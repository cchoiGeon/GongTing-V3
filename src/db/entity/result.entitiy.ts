import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Result extends BaseEntity {
    
    @PrimaryColumn()
    uuid: string; // Primary Key는 기본적으로 null 허용되지 않음

    @Column({ nullable: true })
    nickname: string;

    @Column({ nullable: true })
    gender: number;

    @Column({ nullable: true })
    age: number; // 0 : 20~22 , 1: 23~25 , 2: 26~28

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    smoke: number;

    @Column({ nullable: true })
    face: number; // 0: 강아지상, 1: 고양이상, 2: 토끼상, 3: 여우상, 4: 곰상, 5: 햄스터상 

    @Column({ nullable: true })
    personal: number; // 0: ..., 1: ...

    @Column()
    date: Date;

    @Column()
    status: number; // 0: 매칭 실패, 1: 매칭 성공 

    @Column()
    type: number; // 0: 친구매칭 , 1: 연인매칭 ...
}
