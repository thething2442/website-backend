import { IsString, IsOptional, IsUUID,IsJSON } from 'class-validator';

export class CreateWebsiteObjectDto {
  @IsOptional()
  @IsString()
  webname?: string;

  @IsOptional()
  @IsString()
  @IsJSON()
  webdata?: string;

  // Optional userId to link to an existing user
  @IsOptional()
  @IsUUID()
  userId?: string;
}
