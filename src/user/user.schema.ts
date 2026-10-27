import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [30, 'Name must be at most 30 characters'],
    trim: true,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    minlength: [4, 'Password is too short'],
    maxlength: [50, 'Password is too long'],
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    enum: ['Admin', 'User'],
    required: true,
  })
  role: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({
    type: Number,
    min: [17, 'User is too young'],
    max: [90, 'User is too old'],
  })
  age: number;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String, trim: true })
  address: string;

  @Prop({ type: Boolean, enum: [true, false] })
  active: boolean;

  @Prop({ type: String, trim: true })
  verificationCode: string;

  @Prop({ type: String, enum: ['male', 'female'] })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
