
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  // TODO: Add name field

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;
}

// TODO: Add createdAt and updatedAt in all entities

export const UserSchema = SchemaFactory.createForClass(User);
