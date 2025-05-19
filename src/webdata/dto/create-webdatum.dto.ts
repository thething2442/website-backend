import { IsString, IsOptional, IsUUID } from 'class-validator';

export class CreateWebsiteObjectDto {
  @IsOptional()
  @IsString()
  webname?: string;

  @IsOptional()
  @IsString()
  webdata?: string;

  // Optional userId to link to an existing user
  @IsOptional()
  @IsUUID()
  userId?: string;
}
