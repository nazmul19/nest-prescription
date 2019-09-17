import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from './prescription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prescription])],
  providers: [PrescriptionService],
  controllers: [PrescriptionController]
})
export class PrescriptionModule {}
