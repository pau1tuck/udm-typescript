import { __decorate, __metadata } from "tslib";
import { ObjectType, Field, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, } from "typeorm";
let User = class User extends BaseEntity {
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "facebookId", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "googleId", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "twitterId", void 0);
__decorate([
    Field(),
    Column({ length: 128, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "givenName", void 0);
__decorate([
    Field(),
    Column({ length: 128, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "familyName", void 0);
__decorate([
    Field(),
    Column({ length: 128, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    Field(),
    Column({ length: 128, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    Field(),
    Column({ unique: true, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ unique: true, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Field(),
    Column({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    Field(() => [String], { nullable: true }),
    Column("simple-array", { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    Field(() => String),
    CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    Field(() => String),
    UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    ObjectType(),
    Entity()
], User);
export { User };
