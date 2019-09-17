import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionModule } from './prescription/prescription.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'nest_hvac',
      entities: [__dirname + '/**/*.entity.ts'],
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: true,
    }),
    PrescriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
