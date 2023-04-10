import { __decorate, __metadata, __param } from "tslib";
import { Arg, Authorized, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Track } from "../entity/track.entity.js";
import { PaginatedTracks, TrackInput } from "../types/track.types.js";
import { redisClient } from "../config/redis.js";
const TRACKS_CACHE_KEY = process.env.TRACKS_CACHE_KEY || "key";
let TrackResolver = class TrackResolver {
    async tracks(limit) {
        const allTracks = (await redisClient.lrange(TRACKS_CACHE_KEY, 0, -1)) || [];
        const tracks = allTracks.map((track) => JSON.parse(track));
        return {
            payload: tracks.slice(0, limit),
            hasMore: tracks.length === limit + 1,
        };
    }
    track(id) {
        return Track.findOne(id);
    }
    async createTrack(input) {
        const newTrack = await Track.create({
            ...input,
        }).save();
        redisClient.lpush(TRACKS_CACHE_KEY, JSON.stringify(newTrack));
        return newTrack;
    }
    async updateTrack(id, trackId, buyUrl, url) {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Track)
            .set({ trackId, buyUrl, url })
            .where("id = :id", {
            id,
        })
            .returning("*")
            .execute();
        return result.raw[0];
    }
    async deleteTrack(id) {
        await Track.delete({ id });
        return true;
    }
};
__decorate([
    Query(() => PaginatedTracks),
    __param(0, Arg("limit", () => Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "tracks", null);
__decorate([
    Query(() => Track, { nullable: true }),
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "track", null);
__decorate([
    Authorized("ADMIN"),
    Mutation(() => Track),
    __param(0, Arg("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TrackInput]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "createTrack", null);
__decorate([
    Authorized("ADMIN"),
    Mutation(() => Track, { nullable: true }),
    __param(0, Arg("id")),
    __param(1, Arg("trackId")),
    __param(2, Arg("buyUrl")),
    __param(3, Arg("url")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "updateTrack", null);
__decorate([
    Authorized("ADMIN"),
    Mutation(() => Boolean),
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "deleteTrack", null);
TrackResolver = __decorate([
    Resolver(Track)
], TrackResolver);
export { TrackResolver };
