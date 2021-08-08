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
    this.estudos = obj.estudos //check
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
    // console.log('Fundo de emergência necessário:' ,fundoNecessario)
    // if(porcentagemParaGastosEssenciais < 50){
    //   console.log('Porcentagem da renda para cobrir gastos essenciais: ', parseInt(porcentagemParaGastosEssenciais) + '%')
    // } else {
    //   console.log('Porcentagem da renda para cobrir gastos essenciais: ', parseInt(porcentagemParaGastosEssenciais) + '%')
    //   console.log('Perigo, seus gastos não podem ser mais do que 50% do total de sua renda!')
    // }
    // console.log('Renda descontada dos gastos essenciais: ', rendaSemEssencial)
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

module.exports = User
