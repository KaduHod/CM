create table CashManager.usuarios(
	id int not null auto_increment,
    nome varchar(50),
    username varchar(50)unique,
    email varchar(50),
    senha varchar(50),
    primary key(id)
);
create table CashManager.gastos(
	id int not null auto_increment,
    nome varchar(50),
    valor float,
    essencial boolean,
    mensal boolean,
    primary key(id),
     idUser int,
    foreign key (idUser) references CashManager.usuarios(id)
);
create table CashManager.rendas(
	id int not null auto_increment,
    nome varchar(50),
    valor float,
    primary key(id),
     idUser int,
    foreign key (idUser) references CashManager.usuarios(id)
);
create table CashManager.estudos(
	id int not null auto_increment,
    nome varchar(50),
    instituição varchar(50),
    situação boolean,
    primary key(id),
    idUser int,
    foreign key (idUser) references CashManager.usuarios(id)
);
