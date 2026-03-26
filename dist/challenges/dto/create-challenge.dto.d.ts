export declare class CodeTextDto {
    language: string;
    text: string;
}
export declare class CodeInputDto {
    name: string;
    type: string;
}
export declare class CodeDto {
    functionName: string;
    codeText: CodeTextDto[];
    inputs: CodeInputDto[];
}
export declare class TestInputDto {
    name: string;
    value: number;
}
export declare class TestDto {
    weight: number;
    inputs: TestInputDto[];
    output: number;
}
export declare class CreateChallengeDto {
    score: number;
    title: string;
    category: string;
    description: string;
    level: string;
    code: CodeDto;
    test: TestDto[];
}
