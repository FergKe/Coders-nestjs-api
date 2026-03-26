import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'managers' })
export class Manager extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true, match: /^manager$/ })
  role: string;

  @Prop({ required: true })
  verified: boolean;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
