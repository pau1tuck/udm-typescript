import { __decorate, __metadata, __param } from "tslib";
import argon2 from "argon2";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entity/user.entity.js";
import { RegisterUserInput } from "../types/user.types.js";
let UserResolver = class UserResolver {
    users() {
        return User.find();
    }
    currentUser({ req }) {
        if (!req.session.userId) {
            return null;
        }
        return User.findOne(req.session.userId);
    }
    async register(input, password) {
        const encryptedPassword = await argon2.hash(password);
        try {
            await User.insert({
                ...input,
                password: encryptedPassword,
            });
        }
        catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }
    async login(email, password, ctx) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("Email address not registered");
        }
        let checkPassword;
        if (user.password) {
            checkPassword = await argon2.verify(user.password, password);
            if (!checkPassword) {
                throw new Error("Incorrect password");
            }
        }
        else {
            throw new Error("No password set for account");
        }
        if (!user.verified) {
            throw new Error("Email address not verified");
        }
        ctx.req.session.userId = user.id;
        ctx.req.session.roles = user.roles;
        console.log(`${user.email} logged in`);
        return user;
    }
    async logout({ req, res }) {
        return new Promise((resolve) => req.session.destroy((err) => {
            res.clearCookie("sid");
            if (err) {
                console.log(err);
                resolve(false);
                return;
            }
            resolve(true);
        }));
    }
    async updateUser(id, input, password) {
        const encryptedPassword = await argon2.hash(password);
        const result = await getConnection()
            .createQueryBuilder()
            .update(User)
            .set({ ...input, password: encryptedPassword })
            .where("id = :id", {
            id,
        })
            .returning("*")
            .execute();
        return result.raw[0];
    }
    async deleteUser(id) {
        await User.delete({ id });
        return true;
    }
};
__decorate([
    Authorized("ADMIN"),
    Query(() => [User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserResolver.prototype, "users", null);
__decorate([
    Query(() => User, { nullable: true }),
    __param(0, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "currentUser", null);
__decorate([
    Mutation(() => Boolean),
    __param(0, Arg("input")),
    __param(1, Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterUserInput, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    Mutation(() => User, { nullable: true }),
    __param(0, Arg("email")),
    __param(1, Arg("password")),
    __param(2, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    Mutation(() => Boolean),
    __param(0, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    Authorized("ADMIN"),
    Mutation(() => User, { nullable: true }),
    __param(0, Arg("id")),
    __param(1, Arg("input")),
    __param(2, Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, RegisterUserInput, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    Authorized("ADMIN"),
    Mutation(() => Boolean),
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    Resolver(User)
], UserResolver);
export { UserResolver };
