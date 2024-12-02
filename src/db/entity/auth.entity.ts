import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Auth extends BaseEntity {
    
    @PrimaryColumn()
    uuid: string;
    
    @Column({default:'test1'})
    userName: string;

    @Column({default:2021144038})
    studentId: number;

    @Column({default:'testImg'})
    studentImg: string;

    @Column({default: 0})
    verified: number // 0: 미인증 1: 인증중 2: 인증완료 3: 거절

}
