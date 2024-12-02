import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class FriendMatching extends BaseEntity {

    @PrimaryColumn()
    uuid: string;
    
    @Column()
    wishGender: number;

    @Column()
    wishAgeGroup: number; // 0 : 20~22 , 1: 23~25 , 2: 26~28

    @Column()
    wishSmoke: number;

    @Column()
    wishFace: number; // 0: 강아지상, 1: 고양이상, 2: 토끼상, 3: 여우상, 4: 곰상, 5: 햄스터상 

    @Column()
    wishPersonal: number; // 0: ... , 1: ... 

}
