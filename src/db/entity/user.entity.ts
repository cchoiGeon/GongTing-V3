import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class User extends BaseEntity {
    
    @PrimaryColumn()
    uuid: string = uuid();
    
    @Column({ unique: true })
    userId: string;

    @Column()
    password: string;
    
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    nickname: string;

    @Column({ nullable: true })
    studentId: number;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    face: number; // 0: 강아지상, 1: 고양이상, 2: 토끼상, 3: 여우상, 4: 곰상, 5: 햄스터상 

    @Column({ nullable: true })
    personal: number; // 0: ... , 1: ... 

    @Column({ nullable: true })
    isSmoke: number; // 0: 흡연, 1: 비흡연, 2: 금연

    @Column({ nullable: true })
    kakaoId: string;
}
