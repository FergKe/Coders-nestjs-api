import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
export declare class ChallengesController {
    private readonly challengesService;
    constructor(challengesService: ChallengesService);
    create(createChallengeDto: CreateChallengeDto, user: any): Promise<import("./schemas/challenge.schema").Challenge>;
    findAll(): Promise<import("./schemas/challenge.schema").Challenge[]>;
    findOne(id: string): Promise<import("./schemas/challenge.schema").Challenge>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<import("./schemas/challenge.schema").Challenge>;
    remove(id: string): Promise<void>;
}
