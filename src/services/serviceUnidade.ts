import Unidade from "../databases/models/unidade"
import { AppDataSource } from "../databases/connections/data-source"

const cursor = AppDataSource.getRepository(Unidade)

type NewUnidadeRequest = {
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
    fk_curso: string
}

type findOneUnidadeRequest = {
    id_unidade: string
}

export class CreateUnidadeService {

async execute({
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso,
}: NewUnidadeRequest): Promise<Unidade | Error> {
if (await cursor.findOne({ where: { descricao_unidade } })) {
    return new Error("Unidade já cadastrada!")
}

const Unidade = cursor.create({ 
    descricao_unidade, 
    carga_horaria_unidade, 
    ordem, 
    fk_curso,
})

await cursor.save(Unidade)
return(Unidade)
}}

export class ReadAllUnidadeService {
async execute() {
    const unidades = await cursor.find()
    return unidades
}}

export class ReadOneUnidadeService {
async execute({ id_unidade }: findOneUnidadeRequest) {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
    return new Error("Curso não encontrado!")
    }
    return unidade
}}

export class UpdateUnidadeService {}

export class DeleteUnidadeService {
    async execute({ id_unidade }: findOneUnidadeRequest) {

        const unidade= await cursor.findOne({ where: { id_unidade} })

        if (!unidade) {
        return new Error("Curso não encontrado!")
        }

        await cursor.delete(unidade)
        return unidade
}}
