import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { UnitDataType } from "./unitdatatype";
import { PrescriptionItem } from "./prescriptionitem.entity";

@Entity()
export class Prescription {
  @Column("integer",{ 
    generated:true,
    nullable:false,
    primary:true,
    name:"id"
    })
  id: number;

  @Column({length: 255})
  patientName: string;
  
  @Column({length: 30})
  patientGender: string;

  @Column('int')
  patientAge: number;

  @Column({length: 20})
  patientMobile: string;

  @Column('int')
  patientWeight: number;

  @Column(type => UnitDataType)
  bloodPressureHigh: UnitDataType;

  @Column(type => UnitDataType)
  bloodPressureLow: UnitDataType;

  @Column(type => UnitDataType)
  bslPp: UnitDataType;

  @Column(type => UnitDataType)
  bslFf: UnitDataType;

  @Column({ name: 'followUpDate', type: 'datetime' })
  followUpDate: Date;

  @Column({length: 2048})
  instrunction: string;

  @Column({length: 2048})
  note: string;

  @OneToMany(() => PrescriptionItem, (item) => item.prescription)
  items: PrescriptionItem[];

}