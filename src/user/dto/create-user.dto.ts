import { IsString, IsOptional, IsUUID ,IsEmail,IsBoolean} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  webname?: string;

  @IsEmail()
  
  @IsOptional()
  @IsString() // JSON as string
  webdata?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}

export class UpdateWebsiteObjectDto {
  @IsOptional()
  @IsString()
  webname?: string;

  @IsOptional()
  @IsString() // JSON as string
  webdata?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
