import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 30)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(8, 50)
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 digits, 1 Uppercase & 1 Lowercase and 1 Symbol',
    },
  )
  password: string;

  @IsEnum({ ADMIN: 'admin', USER: 'user' })
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  avatar: string;

  @IsNumber()
  @Min(18, { message: 'User is too young' })
  @Max(90, { message: 'User is too old' })
  @IsOptional()
  age: number;

  @IsString()
  @IsPhoneNumber('PS')
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsString()
  @Length(6, 6)
  @IsOptional()
  verificationCode: string;

  @IsEnum({ MALE: 'male', FEMALE: 'female' })
  @IsOptional()
  gender: string;
}
