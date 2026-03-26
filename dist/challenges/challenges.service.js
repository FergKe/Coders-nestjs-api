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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const challenge_schema_1 = require("./schemas/challenge.schema");
let ChallengesService = class ChallengesService {
    challengeModel;
    constructor(challengeModel) {
        this.challengeModel = challengeModel;
    }
    async create(createChallengeDto, managerId) {
        const createdChallenge = new this.challengeModel({
            ...createChallengeDto,
            managerId,
        });
        return createdChallenge.save();
    }
    async findAll() {
        return this.challengeModel.find().exec();
    }
    async findOne(id) {
        const challenge = await this.challengeModel.findById(id).exec();
        if (!challenge) {
            throw new common_1.NotFoundException(`Challenge with ID ${id} not found`);
        }
        return challenge;
    }
    async update(id, updateChallengeDto) {
        const updatedChallenge = await this.challengeModel
            .findByIdAndUpdate(id, updateChallengeDto, { new: true })
            .exec();
        if (!updatedChallenge) {
            throw new common_1.NotFoundException(`Challenge with ID ${id} not found`);
        }
        return updatedChallenge;
    }
    async remove(id) {
        const result = await this.challengeModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Challenge with ID ${id} not found`);
        }
    }
};
exports.ChallengesService = ChallengesService;
exports.ChallengesService = ChallengesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(challenge_schema_1.Challenge.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChallengesService);
//# sourceMappingURL=challenges.service.js.map