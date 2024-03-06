import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        length:50,
        comment:'用户名'
    })
    user_name:string

    @Column({
        length:50,
        comment:'密码'
    })
    password:string

    @CreateDateColumn({
        comment:'创建时间'
    })
    createTime:Date


    @CreateDateColumn({
        comment:"更新时间"
    })
    updateTime:Date
}