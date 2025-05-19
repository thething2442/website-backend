import { Injectable } from '@nestjs/common';
import { CreateWebsiteObjectDto } from './dto/create-webdatum.dto';
import { UpdateWebdatumDto } from './dto/update-webdatum.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WebdataService {
  constructor(private prisma: PrismaService) {}

  create(createWebdatumDto: CreateWebsiteObjectDto) {
    return this.prisma.websiteObject.create({
      data: createWebdatumDto,
    });
  }

  findAll() {
    return this.prisma.websiteObject.findMany();
  }

  findOne(id: string) {
    return this.prisma.websiteObject.findUnique({
      where: { id },
    });
  }

  update(id: string, updateWebdatumDto: UpdateWebdatumDto) {
    return this.prisma.websiteObject.update({
      where: { id },
      data: updateWebdatumDto,
    });
  }

  remove(id: string) {
    return this.prisma.websiteObject.delete({
      where: { id },
    });
  }
}
