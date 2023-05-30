CREATE TABLE Unidade(
idunidade VARCHAR PRIMARY KEY,
descricaounidade VARCHAR NOT NULL,
cargaHoraria INT NOT NULL,
fkCurso VARCHAR REFERENCES Curso(idCurso),
ordem INT NOT NULL
);