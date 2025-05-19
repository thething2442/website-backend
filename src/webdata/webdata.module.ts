import { Module } from '@nestjs/common';
import { WebdataService } from './webdata.service';
import { WebdataController } from './webdata.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports:[PrismaModule],
  controllers: [WebdataController],
  providers: [WebdataService],
})
export class WebdataModule {}
