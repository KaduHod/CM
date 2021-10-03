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
      totalTorra: null

    }
    this.rendas = {
        listaRendas: obj.listaRendas,
        totalRenda: null
    }
    this.estudos = obj.estudos 
    this.fundoDeEmergencia = obj.fundoDeEmergencia
    this.planejamento = null
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
        }else{
          this.gastos.totalTorra += item.valor
        }
      });
      this.gastos.totalGastos = totGasto
    }else{
      this.gastos.totalGastos = this.gastos.listaGastos.valor
      if(this.gastos.listaGastos.essencial) this.gastos.totEssencial = this.gastos.listaGastos.valor
      if(!this.gastos.listaGastos.essencial) this.gastos.totTorra = this.gastos.listaGastos.valor
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
    {nome:'Computador' , valor: 2868, essencial: false },
    {nome: 'CNH', valor: 2100, essencial: false},
    {nome: 'Água e luz', valor: 180, essencial: true},
    {nome: 'Puc-pr', valor: 410, essencial: true},
    {nome: 'Internet', valor: 270, essencial: true},
    {nome: 'Mercado', valor: 500, essencial: true},
  ],
  fundoDeEmergencia: 100,
  listaRendas: [
    {nome: 'Studio N Fit',valor: 600},
    {nome: 'Axie infinity',valor: 2000}
  ],
  estudos: [
    {nome: 'Ánalise e desenvolvimento de sistemas', situação: 'Cursando'},
    {nome: 'Edução fisica', situação: 'Trancado'}
  ]
}


module.exports = User
