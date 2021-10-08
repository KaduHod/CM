insert into cashmanager.usuarios (username,nome,email,senha) values(
	'KaduHod',
    'Carlos Alberto Ribas Junior',
    'Carlos@mail.com',
    'senha123'
);
insert into cashmanager.estudos (nome,instituição,situação,idUser) values(
	'Educação Fisica',
    'PUC-PR',
    false,
    1
) ;
insert into cashmanager.estudos (nome,instituição,situação,idUser) values(
	'Analise e desenvolvimento de sistemas',
    'PUC-PR',
    true,
    1
) ;
insert into cashmanager.rendas(nome, valor, idUser) values(
	'Studio N Fit',
    600,
    1
);
insert into cashmanager.rendas(nome, valor, idUser) values(
	'Axie Infinity',
    1500,
    1
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Internet',
    260,
    1,
    1,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Agua e luz',
    200,
    1,
    1,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Faculdade',
    410,
    1,
    1,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'imposto',
    155.74,
    1,
    1,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'CNH',
    3500.99,
    0,
    0,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Mesada Pai',
    200,
    1,
    0,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Mesada Mãe',
    200,
    0,
	1,
    1    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Namorada',
    200,
    1,
    1,
    1    
);


insert into cashmanager.usuarios (username,nome,email,senha) values(
	'Nathy',
    'Natasha Arlinoy',
    'Nathy@mail.com',
    '123456'
);
insert into cashmanager.estudos (nome,instituição,situação,idUser) values(
	'3 ano do ensino médio',
    'Colegio aguiar',
    true,
    2
) ;
insert into cashmanager.rendas(nome, valor, idUser) values(
	'Candeias',
    800,
    2
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Doguinhos',
    260,
    1,
    1,
    2    
);
insert into cashmanager.gastos (nome, valor, essencial, mensal, idUser) values(
	'Cosméticos',
    150,
    0,
    1,
    2    
);


drop table cashmanager.usuarios, cashmanager.rendas, cashmanager.gastos, cashmanager.estudos;
drop table cashmanager.gastos;
select * from cashmanager.usuarios;
select * from cashmanager.estudos;
select * from cashmanager.rendas;
select * from cashmanager.gastos;