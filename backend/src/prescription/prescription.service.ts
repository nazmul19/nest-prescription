import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Prescription } from './prescription.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PrescriptionService extends TypeOrmCrudService<Prescription>{
    constructor(@InjectRepository(Prescription) repo) {
        super(repo);
    }
}
