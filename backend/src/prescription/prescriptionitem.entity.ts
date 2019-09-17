import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Prescription } from "./prescription.entity";
@Entity()
export class PrescriptionItem {
  @Column("integer",{ 
    generated:true,
    nullable:false,
    primary:true,
    name:"id"
    })
  id: number;

  @Column({ length: 255 })
  brand: string;

  @Column({ length: 255 })
  strength: string;

  @Column({ length: 255 })
  dosage: string;

  @Column({ length: 2048 })
  instructions: string;

  @Column('int')
  durationDays: number;

  @Column('int')
  quantity: number;
    
  @ManyToOne(type => Prescription, pres => pres.items, {
        cascade: true
  })
  prescription: Prescription;
}