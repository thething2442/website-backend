import { PartialType } from '@nestjs/mapped-types';
import { CreateWebsiteObjectDto } from './create-webdatum.dto';

export class UpdateWebdatumDto extends PartialType(CreateWebsiteObjectDto) {}
