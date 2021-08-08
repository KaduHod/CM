class gasto{
  constructor(valor, nome){
    this.valor = valor
    this.nome = nome
    this.ponteiro = null
  }
  print(){
    let auxilixar = this
    while(auxilixar) {
      console.log(auxilixar.valor, auxilixar.nome)
      auxilixar = auxilixar.ponteiro
    }
  }

  insereGasto(gasto){
    if(this.nome == null){
      this.nome = gasto.nome
      this.valor = gasto.valor
    }else{
      let auxiliar = this
      while(auxiliar.ponteiro){
        auxiliar = auxiliar.ponteiro
      }
      auxiliar.ponteiro = gasto
    }
  }
  removeGasto(nomeGasto){
    if(this.nome == nomeGasto) {
      if (this.ponteiro) {
        this.nome = this.ponteiro.nome
        this.valor = this.ponteiro.valor
        this.ponteiro = this.ponteiro.ponteiro
      }
      else {
        this.ponteiro = null
        this.nome = null
        this.valor = null
      }
    }else{
      let auxiliar = this
      if(auxiliar.ponteiro){
        try {
          while (auxiliar.ponteiro.nome != nomeGasto) {
            auxiliar = auxiliar.ponteiro
          }

          if(auxiliar.ponteiro.nome == nomeGasto){
            if(auxiliar.ponteiro.ponteiro){
              auxiliar.ponteiro = auxiliar.ponteiro.ponteiro
            }else{
              auxiliar.ponteiro = null
            }
          }
        } catch (e) {
          console.error('#####: ========= Nome: < '+ nomeGasto +' > não esta na lista')
        }
      }else{
        auxiliar.ponteiro = null
      }
    }
  }
}
let head = new gasto(410, 'Puc');let g0 = new gasto(270, 'Internet');let g1 = new gasto(2200, 'PC');let g2 = new gasto(200, 'Agua e luz')
let g3 = new gasto(500, 'Mercado')

head.print()
head.insereGasto(g1)
head.insereGasto(g2)
head.insereGasto(g3)
head.removeGasto('Mercado')
head.removeGasto('Internet')
head.removeGasto('Agua e luz')
head.removeGasto('Puc')
head.removeGasto('PC')
head.insereGasto(new gasto(220, 'anti-estresse'))
head.insereGasto(g0)
head.insereGasto(g1)
console.log(head)
