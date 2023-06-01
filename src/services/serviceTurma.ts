import Turma from "../databases/models/turma"
import { AppDataSource } from "../databases/connections/data-source"

const cursor = AppDataSource.getRepository(Turma)

type NewTurmaRequest = {
    data_inicio: number
    data_fim: number
    horas_aula_dia: number
    fk_curso: string
}

type findOneTurmaRequest = {
    id_turma: string
}

export class CreateTurmaService {

async execute({
    data_inicio,
    data_fim,
    horas_aula_dia,
    fk_curso,
}: NewTurmaRequest): Promise<Turma | Error> {
if (await cursor.findOne({ where: { fk_curso } })) {
    return new Error("Turma já cadastrada!")
}

const Turma = cursor.create({
    data_inicio,
    data_fim,
    horas_aula_dia,
    fk_curso,
})

await cursor.save(Turma)
return(Turma)
}}

export class ReadAllTurmaService {
    async execute() {
        const Turmas = await cursor.find()
        return Turmas
    }
}

export class ReadOneTurmaService {
    async execute({ id_turma }: findOneTurmaRequest) {
        const turma = await cursor.findOne({ where: { id_turma } })
        if (!turma) {
        return new Error("Turma não encontrada!")
        }
        return turma
    }
}

export class UpdateTurmaService {}

export class DeleteTurmaService {
    async execute({ id_turma }: findOneTurmaRequest) {

        const turma= await cursor.findOne({ where: { id_turma} })

        if (!turma) {
        return new Error("turma não encontrado!")
        }

        await cursor.delete(turma.id_turma)
        return turma
}
}
