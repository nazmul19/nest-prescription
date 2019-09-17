import { Column } from "typeorm";

export class UnitDataType {
    @Column({ type: 'int' })
    value: number;

    @Column()
    unit: string;

}