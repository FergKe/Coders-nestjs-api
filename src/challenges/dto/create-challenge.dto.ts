import { IsString, IsNumber, IsEnum, IsNotEmpty, ValidateNested, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CodeTextDto {
  @IsEnum(['py', 'js'])
  language: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}

export class CodeInputDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class CodeDto {
  @IsString()
  @IsNotEmpty()
  functionName: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeTextDto)
  codeText: CodeTextDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeInputDto)
  inputs: CodeInputDto[];
}

export class TestInputDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  value: number;
}

export class TestDto {
  @IsNumber()
  weight: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestInputDto)
  inputs: TestInputDto[];

  @IsNumber()
  output: number;
}

export class CreateChallengeDto {
  @IsNumber()
  score: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(['graphs', 'data structures', 'math', 'algorithms', 'databases'])
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['easy', 'medium', 'hard'])
  level: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CodeDto)
  code: CodeDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestDto)
  test: TestDto[];
}
