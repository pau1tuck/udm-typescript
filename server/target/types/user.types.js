import { __decorate, __metadata } from "tslib";
import { Field, InputType } from "type-graphql";
let RegisterUserInput = class RegisterUserInput {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "givenName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "familyName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "country", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "email", void 0);
RegisterUserInput = __decorate([
    InputType()
], RegisterUserInput);
export { RegisterUserInput };
let CreateUserInput = class CreateUserInput extends RegisterUserInput {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "city", void 0);
CreateUserInput = __decorate([
    InputType()
], CreateUserInput);
export { CreateUserInput };
