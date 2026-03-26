import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Manager } from './manager.schema';

@Schema({ _id: false })
export class CodeText {
  @Prop({ required: true, enum: ['py', 'js'] })
  language: string;

  @Prop({ required: true })
  text: string;
}
export const CodeTextSchema = SchemaFactory.createForClass(CodeText);

@Schema({ _id: false })
export class CodeInput {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;
}
export const CodeInputSchema = SchemaFactory.createForClass(CodeInput);

@Schema()
export class Code {
  @Prop({ required: true })
  functionName: string;

  @Prop({ type: [CodeTextSchema] })
  codeText: CodeText[];

  @Prop({ type: [CodeInputSchema] })
  inputs: CodeInput[];
}
export const CodeSchema = SchemaFactory.createForClass(Code);

@Schema({ _id: false })
export class TestInput {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: number;
}
export const TestInputSchema = SchemaFactory.createForClass(TestInput);

@Schema({ _id: false })
export class Test {
  @Prop({ required: true })
  weight: number;

  @Prop({ type: [TestInputSchema] })
  inputs: TestInput[];

  @Prop({ required: true })
  output: number;
}
export const TestSchema = SchemaFactory.createForClass(Test);

@Schema({ collection: 'challenges' })
export class Challenge extends Document {
  @Prop({ type: Types.ObjectId, ref: Manager.name })
  managerId: Manager | Types.ObjectId;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['graphs', 'data structures', 'math', 'algorithms', 'databases'] })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: ['easy', 'medium', 'hard'] })
  level: string;

  @Prop({ type: CodeSchema })
  code: Code;

  @Prop({ type: [TestSchema] })
  test: Test[];
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);
