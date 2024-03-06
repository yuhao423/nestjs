import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './entities/user.entity';
User
ConfigModule
@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:['.env']
  }),
  TypeOrmModule.forRootAsync({
  imports:[ConfigModule],
  useFactory:async (configService:ConfigService):Promise<TypeOrmModuleOptions>=>({
    type:'mysql',
    host:configService.get<string>('MYSQL_HOST'),
    port:configService.get<number>('MYSQL_POOT'),
    username:configService.get<string>('MYSQL_USERNAME'),
    password:configService.get<string>('MYSQL_PASS'),
    database:configService.get<string>('MYSQL_NAME'),
    entities:[__dirname + '/entities/**.entity{.ts,.js}'],
    logging: 'all',
    synchronize:true,
    autoLoadEntities:false,
  }),
  inject:[ConfigService]
  
}),
  UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
