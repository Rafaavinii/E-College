CREATE SCHEMA escola;
CREATE DOMAIN escola.tipo_nome AS VARCHAR(30) NOT NULL;
CREATE DOMAIN escola.tipo_telefone AS VARCHAR(15);
CREATE TABLE escola.endereco(
    id_endereco INTEGER NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    cidade VARCHAR(60) NOT NULL,
    numero INTEGER NOT NULL,
    CONSTRAINT pk_endereco PRIMARY KEY (id_endereco)
);
CREATE TABLE escola.disciplina(
    codigo VARCHAR(8) NOT NULL,
    descricao VARCHAR(255),
    carga_horaria INTEGER NOT NULL,
    ementa VARCHAR [] NOT NULL,
    CONSTRAINT pk_disc PRIMARY KEY(codigo)
);
CREATE TABLE escola.professor(
    nome escola.tipo_nome,
    titulacao VARCHAR(30) NOT NULL,
    telefone escola.tipo_telefone,
    email VARCHAR(20) NOT NULL,
    id_endereco INTEGER NOT NULL,
    cod_disc VARCHAR(8) NOT NULL,
    CONSTRAINT pk_professor PRIMARY KEY (email),
    CONSTRAINT fk_endereco FOREIGN KEY (id_endereco) REFERENCES escola.endereco(id_endereco),
    CONSTRAINT fk_codDisciplina FOREIGN KEY (cod_disc) REFERENCES escola.disciplina(codigo)
);
CREATE TABLE escola.turma(
    identificador VARCHAR(2) NOT NULL,
    CONSTRAINT pk_turma PRIMARY KEY(identificador)
);
CREATE TABLE escola.aluno(
    nome escola.tipo_nome,
    telefone escola.tipo_telefone,
    matricula VARCHAR(20) NOT NULL,
    email VARCHAR(20),
    id_endereco INTEGER NOT NULL,
    id_turma VARCHAR(2) NOT NULL,
    CONSTRAINT pk_aluno PRIMARY KEY (matricula),
    CONSTRAINT fk_endereco FOREIGN KEY (id_endereco) REFERENCES escola.endereco(id_endereco),
    CONSTRAINT fk_turma FOREIGN KEY (id_turma) REFERENCES escola.turma(identificador)
);
CREATE TABLE escola.aula(
    id_aula INTEGER NOT NULL,
    horario TIME NOT NULL,
    cod_disc VARCHAR(8) NOT NULL,
    CONSTRAINT pk_aula PRIMARY KEY(id_aula),
    CONSTRAINT fk_codDisc FOREIGN KEY(cod_disc) REFERENCES escola.disciplina(codigo)
);
CREATE TABLE escola.presente(
    mat_aluno VARCHAR(20) NOT NULL,
    id_aula INTEGER NOT NULL,
    CONSTRAINT fk_matAluno FOREIGN KEY (mat_aluno) REFERENCES escola.aluno(matricula),
    CONSTRAINT fk_aula FOREIGN KEY (id_aula) REFERENCES escola.aula(id_aula)
);
CREATE TABLE escola.disc_pertence_turma(
    cod_disc VARCHAR(8) NOT NULL,
    id_turma VARCHAR(2) NOT NULL,
    CONSTRAINT fk_codDisc FOREIGN KEY(cod_disc) REFERENCES escola.disciplina(codigo),
    CONSTRAINT fk_idTurma ForEIGN KEY(id_turma) REFERENCES escola.turma(identificador)
);
CREATE TABLE escola.vinculo(
    id_vinculo INTEGER NOT NULL,
    data_contratacao DATE NOT NULL,
    salario FLOAT NOT NULL,
    email_prof VARCHAR(20) NOT NULL,
    CONSTRAINT pk_vinculo PRIMARY KEY(id_vinculo),
    CONSTRAINT fk_emailProf FOREIGN KEY(email_prof) REFERENCES escola.professor(email)
);
CREATE TABLE escola.tarefa(
    id_tarefa INTEGER,
    nota INTEGER,
    data_entraga DATE,
    prof_email VARCHAR(20),
    CONSTRAINT pk_tarefa PRIMARY KEY(id_tarefa),
    CONSTRAINT fk_emailProf FOREIGN KEY (prof_email) REFERENCES escola.professor(email)
);
CREATE TABLE escola.boletim(
    id_boletim INTEGER,
    nota FLOAT,
    num_falta INTEGER NOT NULL,
    situacao BOOLEAN,
    media FLOAT,
    mat_aluno VARCHAR(20),
    CONSTRAINT pk_boletim PRIMARY KEY(id_boletim),
    CONSTRAINT fk_matAluno FOREIGN KEY (mat_aluno) REFERENCES escola.aluno(matricula)
);
CREATE TABLE escola.aviso(
    aviso VARCHAR(500) NOT NULL,
    prof_email VARCHAR(20),
    CONSTRAINT pk_aviso PRIMARY KEY(aviso),
    CONSTRAINT fk_emailProf FOREIGN KEY (prof_email) REFERENCES escola.professor(email)
);