import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany({ include: { webobject: true } });
  }

  findOne(id: string) {
    if (!id) {
      throw new Error('User ID is required');
    }
  
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        webobject: true,
      },
    });
  }
  update(id: any, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: any) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getUsersWithWebsiteObjectPercentage(): Promise<{ percentage: number }> {
    const totalUsers = await this.prisma.user.count();
    const usersWithWebsites = await this.prisma.user.count({
      where: {
        webobject: {
          some: {},
        },
      },
    });
    console.log({ totalUsers, usersWithWebsites });
    const percentage = totalUsers === 0 ? 0 : (usersWithWebsites / totalUsers) * 100;
    return { percentage };
  }
  
  
}
