select nome, valor, mensal, essencial from cashmanager.gastos 
	where idUser = 1 and mensal = 1 and essencial = 1
	order by valor DESC ;
    
select sum(valor) as totalValorGatos
	from cashmanager.gastos
	where idUser = 1;
select sum(valor) as totalValorRendas
	from cashmanager.rendas
	where idUser = 1;
    
select idUser,sum(valor) as valorRendas from cashmanager.gastos
	group by idUser;

use cashmanager;
select * from rendas;
select*from gastos;

select idUser, sum(valor) as totalRendas
	from rendas
    group by idUser;
    
select rendas.nome, rendas.valor, usuarios.nome from rendas
    inner join usuarios
    on rendas.idUser = usuarios.id;
    
select U.nome as Users, R.nome as Conta, R.valor as Preço
	from rendas as R
    inner join usuarios as U
    on U.id = R.idUser;
    
select U.nome as Users, G.nome as Conta, G.valor as PreçoConta, R.nome as Emprego, R.valor as Salario
	from usuarios as U
    inner join gastos as G
    on U.id = G.idUser
    inner join rendas as R
    on U.id = R.idUser
    where U.id = 1;