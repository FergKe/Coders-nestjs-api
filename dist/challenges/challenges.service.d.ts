import { Model } from 'mongoose';
import { Challenge } from './schemas/challenge.schema';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
export declare class ChallengesService {
    private challengeModel;
    constructor(challengeModel: Model<Challenge>);
    create(createChallengeDto: CreateChallengeDto, managerId: string): Promise<Challenge>;
    findAll(): Promise<Challenge[]>;
    findOne(id: string): Promise<Challenge>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<Challenge>;
    remove(id: string): Promise<void>;
}
