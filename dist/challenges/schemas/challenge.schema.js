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
exports.ChallengeSchema = exports.Challenge = exports.TestSchema = exports.Test = exports.TestInputSchema = exports.TestInput = exports.CodeSchema = exports.Code = exports.CodeInputSchema = exports.CodeInput = exports.CodeTextSchema = exports.CodeText = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const manager_schema_1 = require("./manager.schema");
let CodeText = class CodeText {
    language;
    text;
};
exports.CodeText = CodeText;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['py', 'js'] }),
    __metadata("design:type", String)
], CodeText.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CodeText.prototype, "text", void 0);
exports.CodeText = CodeText = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CodeText);
exports.CodeTextSchema = mongoose_1.SchemaFactory.createForClass(CodeText);
let CodeInput = class CodeInput {
    name;
    type;
};
exports.CodeInput = CodeInput;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CodeInput.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CodeInput.prototype, "type", void 0);
exports.CodeInput = CodeInput = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CodeInput);
exports.CodeInputSchema = mongoose_1.SchemaFactory.createForClass(CodeInput);
let Code = class Code {
    functionName;
    codeText;
    inputs;
};
exports.Code = Code;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Code.prototype, "functionName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CodeTextSchema] }),
    __metadata("design:type", Array)
], Code.prototype, "codeText", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CodeInputSchema] }),
    __metadata("design:type", Array)
], Code.prototype, "inputs", void 0);
exports.Code = Code = __decorate([
    (0, mongoose_1.Schema)()
], Code);
exports.CodeSchema = mongoose_1.SchemaFactory.createForClass(Code);
let TestInput = class TestInput {
    name;
    value;
};
exports.TestInput = TestInput;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TestInput.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], TestInput.prototype, "value", void 0);
exports.TestInput = TestInput = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], TestInput);
exports.TestInputSchema = mongoose_1.SchemaFactory.createForClass(TestInput);
let Test = class Test {
    weight;
    inputs;
    output;
};
exports.Test = Test;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Test.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.TestInputSchema] }),
    __metadata("design:type", Array)
], Test.prototype, "inputs", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Test.prototype, "output", void 0);
exports.Test = Test = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Test);
exports.TestSchema = mongoose_1.SchemaFactory.createForClass(Test);
let Challenge = class Challenge extends mongoose_2.Document {
    managerId;
    score;
    title;
    category;
    description;
    level;
    code;
    test;
};
exports.Challenge = Challenge;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: manager_schema_1.Manager.name }),
    __metadata("design:type", Object)
], Challenge.prototype, "managerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Challenge.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Challenge.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['graphs', 'data structures', 'math', 'algorithms', 'databases'] }),
    __metadata("design:type", String)
], Challenge.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Challenge.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['easy', 'medium', 'hard'] }),
    __metadata("design:type", String)
], Challenge.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.CodeSchema }),
    __metadata("design:type", Code)
], Challenge.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.TestSchema] }),
    __metadata("design:type", Array)
], Challenge.prototype, "test", void 0);
exports.Challenge = Challenge = __decorate([
    (0, mongoose_1.Schema)({ collection: 'challenges' })
], Challenge);
exports.ChallengeSchema = mongoose_1.SchemaFactory.createForClass(Challenge);
//# sourceMappingURL=challenge.schema.js.map