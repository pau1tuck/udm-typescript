import { Arg, Authorized, Int, Mutation, Query, Resolver } from "type-graphql";
import { Track } from "../entity/track.entity.js";
import { appDataSource } from "../index.js";
import { PaginatedTracks, TrackInput } from "../types/track.type.js";
import { redisClient } from "../config/redis";

const { TRACKS_CACHE_KEY } = process.env;

@Resolver(Track)
export class TrackResolver {
    // READ ALL TRACKS
    @Query(() => PaginatedTracks)
    async tracks(
        @Arg("limit", () => Int)
        limit: number
    ): Promise<PaginatedTracks> {
        const allTracks = (await redisClient.lrange(TRACKS_CACHE_KEY, 0, -1)) || [];
        const tracks = allTracks.map((track: string) => JSON.parse(track));
        return {
            payload: tracks.slice(0, limit),
            hasMore: tracks.length === limit + 1,
        };
    }

    // READ ONE TRACK
    @Query(() => Track, { nullable: true })
    async track(@Arg("id") id: string): Promise<Track | undefined> {
        const findTrack = await appDataSource.manager.findOneBy(id, {
            id: 1,
        });
        if findTrack {
            return findTrack
        } else:
        findTrack ? return findTrack : "";
    }

    // CREATE TRACK
    // @Authorized("ADMIN")
    @Mutation(() => Track)
    async createTrack(@Arg("input") input: TrackInput): Promise<Track> {
        const newTrack = await Track.create({
            ...input,
        }).save();
        redisClient.lpush(TRACKS_CACHE_KEY, JSON.stringify(newTrack));
        return newTrack;
    }

    // UPDATE TRACK
    @Authorized("ADMIN")
    @Mutation(() => Track, { nullable: true })
    async updateTrack(
        @Arg("id") id: string,
        @Arg("trackId") trackId: number,
        @Arg("buyUrl") buyUrl: string
    ): Promise<Track | null> {
        const result = await appDataSource
            .createQueryBuilder()
            .update(Track)
            .set({ trackId, buyUrl })
            .where("id = :id", {
                id,
            })
            .returning("*")
            .execute();
        return result.raw[0];
    }

    // DELETE TRACK
    @Authorized("ADMIN")
    @Mutation(() => Boolean)
    async deleteTrack(@Arg("id") id: string): Promise<boolean> {
        await Track.delete({ id });
        return true;
    }
}
