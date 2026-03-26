"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChallengeDto = exports.TestDto = exports.TestInputDto = exports.CodeDto = exports.CodeInputDto = exports.CodeTextDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CodeTextDto {
    language;
    text;
}
exports.CodeTextDto = CodeTextDto;
__decorate([
    (0, class_validator_1.IsEnum)(['py', 'js']),
    __metadata("design:type", String)
], CodeTextDto.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CodeTextDto.prototype, "text", void 0);
class CodeInputDto {
    name;
    type;
}
exports.CodeInputDto = CodeInputDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CodeInputDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CodeInputDto.prototype, "type", void 0);
class CodeDto {
    functionName;
    codeText;
    inputs;
}
exports.CodeDto = CodeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CodeDto.prototype, "functionName", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeTextDto),
    __metadata("design:type", Array)
], CodeDto.prototype, "codeText", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeInputDto),
    __metadata("design:type", Array)
], CodeDto.prototype, "inputs", void 0);
class TestInputDto {
    name;
    value;
}
exports.TestInputDto = TestInputDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TestInputDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TestInputDto.prototype, "value", void 0);
class TestDto {
    weight;
    inputs;
    output;
}
exports.TestDto = TestDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TestDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TestInputDto),
    __metadata("design:type", Array)
], TestDto.prototype, "inputs", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TestDto.prototype, "output", void 0);
class CreateChallengeDto {
    score;
    title;
    category;
    description;
    level;
    code;
    test;
}
exports.CreateChallengeDto = CreateChallengeDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateChallengeDto.prototype, "score", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChallengeDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['graphs', 'data structures', 'math', 'algorithms', 'databases']),
    __metadata("design:type", String)
], CreateChallengeDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChallengeDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['easy', 'medium', 'hard']),
    __metadata("design:type", String)
], CreateChallengeDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeDto),
    __metadata("design:type", CodeDto)
], CreateChallengeDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TestDto),
    __metadata("design:type", Array)
], CreateChallengeDto.prototype, "test", void 0);
//# sourceMappingURL=create-challenge.dto.js.map