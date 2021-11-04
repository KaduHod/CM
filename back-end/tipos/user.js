class User{
  constructor(obj){
    this.nome = obj.nome
    this.login = obj.login,
    this.pwd = obj.pwd,
    this.mail = obj.mail
    this.gastos = {
      listaGastos: obj.listaGastos,
      totalGastos: null,
      totalEssencial:null,
      totMensal: null

    }
    this.rendas = {
        listaRendas: obj.listaRendas,
        totalRenda: null
    }
    this.fundoDeEmergencia = obj.fundoDeEmergencia
    this.planejamento = null
    // Adicionar valor da média de gastos por dia registrado!
    // Média de gastos com compras diarias, como pão, queijo, credito (Gastos não registrados)
    // Somar esses valores e ter o valor total no mes
    // criar dado que junta gastos essenciais (gastos registrados) e gastos diarios (gastos não registrados).
    this.setTotGastos()
    this.setTotRenda()
    this.setPlanejamento()

  }
  setPlanejamento(objSetPlanejamento){
    let fundoNecessario = this.gastos.totalEssencial * 6
    let porcentagemParaGastosEssenciais = (100*this.gastos.totalEssencial)/this.rendas.totalRenda
    let rendaSemEssencial = this.rendas.totalRenda - this.gastos.totalEssencial
    if(this.fundoDeEmergencia < this.gastos.totalEssencial * 6){
      this.planejamento = {
        Essencial: this.gastos.totalEssencial,
        fundoDeEmergencia: 0.80*rendaSemEssencial,
        Torrar: 0.20*rendaSemEssencial
      }
    }else{
      this.planejamento = {
        Essencial: this.gastos.totalEssencial,
        Objetivos: 0.20*rendaSemEssencial,
        Aposentadoria: 0.60*rendaSemEssencial,
        Torrar: 0.20*rendaSemEssencial
      }
    }
  }
  setTotGastos(){
    if(Array.isArray(this.gastos.listaGastos)){
      let totGasto = null

      this.gastos.listaGastos.forEach((item, i) => {
        totGasto += item.valor
        if(item.essencial){
          this.gastos.totalEssencial += item.valor
        }
        if(item.mensal){
          this.gastos.totMensal += item.valor
        }
      });
      this.gastos.totalGastos = totGasto
    }else{
      this.gastos.totalGastos = this.gastos.listaGastos.valor
      if(this.gastos.listaGastos.essencial) this.gastos.totEssencial = this.gastos.listaGastos.valor
      if(!this.gastos.listaGastos.essencial) this.gastos.totTorra = this.gastos.listaGastos.valor
      if(this.gastos.listaGastos.mensal) this.gastos.totMensal = this.gastos.listaGastos.valor
    }
  }
  setTotRenda(){
    if(Array.isArray(this.rendas.listaRendas)){
      let totRenda = null
      this.rendas.listaRendas.forEach((item, i) => {

        totRenda += item.valor
      });

      this.rendas.totalRenda = totRenda
    }else{
      this.rendas.totalRenda = this.rendas.listaRendas.valor

    }
  }
}
let req_ = {
  nome: 'Carlos Alberto Ribas Junior',
  login: 'KaduHod',
  pwd: '123456',
  mail: 'carlos@mail.com',
  listaGastos: [
    {nome:'Mesada Pai' , valor: 200, essencial: true, mensal: true },
    {nome:'Mesada Mãe' , valor: 200, essencial: false, mensal: true },
    {nome:'Namorada' , valor: 200, essencial: false, mensal: true },
    {nome: 'CNH', valor: 3500, essencial: false, mensal: false},
    {nome: 'Água e luz', valor: 180, essencial: true, mensal: true},
    {nome: 'Puc-pr', valor: 410, essencial: true, mensal: true},
    {nome: 'Internet', valor: 270, essencial: true, mensal: true},
    {nome: 'Imposto', valor: 155, essencial: true, mensal: true},
  ],
  fundoDeEmergencia: 9000,
  listaRendas: [
    {nome: 'Studio N Fit',valor: 600},
    {nome: 'Axie infinity',valor: 2000}
  ]
}
 let new_user = new User(req_)
/* console.log('========\n \n \n')
console.log('Nome: ' + new_user.nome + '\n' +"Login: "+ new_user.login + '\n' +'Senha: ' + new_user.pwd + '\n' +'Email: '+ new_user.mail)
console.log('User campos \n')
console.log(new_user.rendas)
console.log('========\n')
console.log(new_user.gastos)
console.log('========\n')
console.log(new_user.estudos) 
console.log('========\n')
console.log(new_user.planejamento) 
console.log('========\n')
console.log(new_user.fundoDeEmergencia) 

console.log('========================\n \n \n \n \n \n \n===================================')
console.log(new_user) */


module.exports = User
