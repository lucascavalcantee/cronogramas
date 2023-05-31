import {Entity, PrimaryColumn, Column, IntegerType } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("unidade")
export default class unidade {
    @PrimaryColumn()
    id_unidade: String
    
    @Column()
    fk_Curso: string
    
    @Column({ nullable: true })
    descricao_unidade: String 
    
    @Column({ nullable: true })
    carga_horaria_curso: Number
    
    @Column({ nullable: true })
    modalidade: String
    
    @Column({ nullable: true })
    ordem: String 

    constructor() {
        this.id_unidade = uuid()
    }
}