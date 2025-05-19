import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaService } from './prisma/prisma.service';
import { WebdataModule } from './webdata/webdata.module';

@Module({
  imports: [PrismaModule, WebdataModule],
  controllers: [UserController],
  providers: [UserService,PrismaService],
})
export class AppModule {}
