import { __decorate, __metadata } from "tslib";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { Track } from "../entity/track.entity.js";
let PaginatedTracks = class PaginatedTracks {
};
__decorate([
    Field(() => [Track]),
    __metadata("design:type", Array)
], PaginatedTracks.prototype, "payload", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], PaginatedTracks.prototype, "hasMore", void 0);
PaginatedTracks = __decorate([
    ObjectType()
], PaginatedTracks);
export { PaginatedTracks };
let TrackInput = class TrackInput {
};
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], TrackInput.prototype, "trackId", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], TrackInput.prototype, "artist", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], TrackInput.prototype, "title", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], TrackInput.prototype, "version", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], TrackInput.prototype, "label", void 0);
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], TrackInput.prototype, "month", void 0);
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], TrackInput.prototype, "year", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], TrackInput.prototype, "buyUrl", void 0);
TrackInput = __decorate([
    InputType()
], TrackInput);
export { TrackInput };
