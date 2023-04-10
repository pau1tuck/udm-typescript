import { __decorate, __metadata } from "tslib";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
let Track = class Track extends BaseEntity {
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Track.prototype, "id", void 0);
__decorate([
    Field(() => Int),
    Column({ type: "int", unique: true }),
    __metadata("design:type", Number)
], Track.prototype, "trackId", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Track.prototype, "artist", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Track.prototype, "title", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], Track.prototype, "version", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], Track.prototype, "label", void 0);
__decorate([
    Field(() => Int),
    Column({ type: "int" }),
    __metadata("design:type", Number)
], Track.prototype, "month", void 0);
__decorate([
    Field(() => Int),
    Column({ type: "int" }),
    __metadata("design:type", Number)
], Track.prototype, "year", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], Track.prototype, "buyUrl", void 0);
__decorate([
    Field(() => Int),
    Column({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Track.prototype, "votes", void 0);
__decorate([
    Field(() => String),
    CreateDateColumn(),
    __metadata("design:type", Date)
], Track.prototype, "createdAt", void 0);
__decorate([
    Field(() => String),
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Track.prototype, "updatedAt", void 0);
Track = __decorate([
    ObjectType(),
    Entity()
], Track);
export { Track };
