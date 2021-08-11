
      let body = document.getElementsByTagName('body')[0]
      body.style.height = `${window.screen.height}px`
//======================
      function mostrarCampoLogin(){
        let formLogin = document.getElementById("forms")
        formLogin.style.transform = 'translateX(16%)'
      }
      function mostrarCampoRegistrese(){
        let formLogin = document.getElementById("forms")
        formLogin.style.transform = 'translateX(-30%)'
      }
//======================
      let inputs = []

      let caracteresEspeciais = ['@','!','#','$','%','&','*','()','_','+','-','=','<','>',';',':','?','/',']','[','}','{','}' ]
      function verificaCaixaAlta(str){
        if(str.toLowerCase() !== str) return true
        else return false
      }
//======================
      function isNumber(str){
        return !isNaN(str)
      }

      function verificaRegistro(){
        let errorsMassage = {
          username: [],
          email: [],
          senha: [],
          confSenha: []

        }
        if(inputs.length == 0){
          for(i=0; i<4;i++){// pego os inputs
            let input = document.getElementById(`reg${[i]}`)
            inputs.push(input)
          }
        }
        
         let verificação = validaRegistro(inputs)
         
         verificação.map((item,index) =>{
           switch(index){
              case 0:
                if(item.possuiNumero == false) errorsMassage.username.push('Username deve possuir ao menos um número.')
                if(item.passuiCapsLock == false) errorsMassage.username.push('Username deve possuir ao menos um caractere em caixa alta.')
                if(item.possuiCaractereEspecial == false) errorsMassage.username.push('Username deve possuir ao menos um caractere especial.')

                break;
              case 1:
                if(item.arroba == false ) errorsMassage.email.push('Email inválido.')
                if(item.pontoDepoisDoArroba == false) errorsMassage.email.push('Email inválido.')
                if(item.caracterDepoisDoPonto == false) errorsMassage.email.push('Email inválido.')
                if(item.arrobaPrimeiroOuUltimo == false) errorsMassage.email.push('Email inválido.')
                break;
              case 2:
                if(item.passuiCapsLock == false) errorsMassage.senha.push('Senha deve possuir ao menos um caractere em caixa alta.')
                if(item.possuiNumero == false) errorsMassage.senha.push('Senha deve possuir ao menos um número.')
                if(item.possuiCaractereEspecial == false) errorsMassage.senha.push('Senha deve possuir ao menos um caractere especial.')
                if(item.comprimentoMinimo == false) errorsMassage.senha.push('Senha deve ter no mínimo 6 digitos.')
                break;
              case 3:
                if(item.igualASenha == false) errorsMassage.confSenha.push('Confirmação de senha não confere.')
                break;
           }  
         })
         
         let containerErros = document.getElementById('errosFlex')
         let errosBlockContainer = document.getElementById('erros')

         if(containerErros.childElementCount > 0){// retiro elementos anteriores
           while(containerErros.childElementCount > 0){
            containerErros.childNodes.forEach(filho=>{
             containerErros.removeChild(filho)
            })
           }
           errosBlockContainer.style.bottom = '-101%'
         }
         let contDelay = 50
         for(key in errorsMassage){// itero sobre o array que contem as mensagens de erro 
          if(errorsMassage[key].length > 0){//tiro o campo que não possui mensagem de erro
            if(key == 'email'){
              
              var novoParagrafoEmail = document.createElement('p')
              novoParagrafoEmail.setAttribute('class','pError')
              novoParagrafoEmail.innerHTML = errorsMassage[key][0]
              novoParagrafoEmail.style.animation = 'textoError 150ms linear 200ms forwards'
              
            }else{
              
              errorsMassage[key].forEach(element => {
                contDelay = contDelay + 50
                let novoParagrafo = document.createElement('p')
                novoParagrafo.setAttribute('class','pError')
                novoParagrafo.style.animation = `textoError 150ms linear ${contDelay}ms forwards`
                novoParagrafo.innerHTML = element
                containerErros.appendChild(novoParagrafo)
              });
            }
          }
         }
         if(novoParagrafoEmail){
          novoParagrafoEmail.style.animation = `textoError 150ms linear ${contDelay}ms forwards`
          containerErros.appendChild(novoParagrafoEmail)
         }
         
        errosBlockContainer.style.bottom = '0px'
        
        function validaRegistro(arrInputs){
          //validar Nome
          let checkListUserName = {// true significa que passou no teste
            possuiNumero: false,
            passuiCapsLock: false,
            possuiCaractereEspecial: false
          }
          //validar Email
          let checkListEmail = {
            arroba: false,
            pontoDepoisDoArroba: false,
            caracterDepoisDoPonto: false,
            arrobaPrimeiroOuUltimo: false,
          }

          let checkListPWD = {
            passuiCapsLock:false,
            possuiNumero:false,
            possuiCaractereEspecial: false,
            comprimentoMinimo: false
          }
          let checkListPWDConfirm = {
            igualASenha: false
          }
          let checkList = [checkListUserName, checkListEmail, checkListPWD, checkListPWDConfirm]
          //validar senha
          arrInputs.map(item =>{// itero sobre a lista de inputs a serem validados
            let tipoInput = item.getAttribute('name')
            
            let valorDigitado = item.value
            if(tipoInput === 'UserName'){
              if(verificaCaixaAlta(valorDigitado)==true) checkListUserName.passuiCapsLock = true
              for(let i = 0; i < valorDigitado.length; i++){// verifica se string possui numero
                if(isNumber(valorDigitado[i]) == true){
                  checkListUserName.possuiNumero = true
                }
              }
              caracteresEspeciais.map(char =>{
                if(valorDigitado.indexOf(char) > -1){
                  checkListUserName.possuiCaractereEspecial = true
                }
              })
            }

            if(tipoInput === 'Email'){
              let indexArroba = false
              let indexPontoDepoisDoArroba = false
              for(let i = 0; i < valorDigitado.length;i++){
                if(valorDigitado[i] === '@'){
                  checkListEmail.arroba = true// verifica se á arroba
                  indexArroba = i
                }

                if(indexArroba !== false){// verifico o ponto depois do arroba
                  if(i > indexArroba + 1 && valorDigitado[i] === '.'){
                    checkListEmail.pontoDepoisDoArroba = true
                    indexPontoDepoisDoArroba = i
                  }
                }
                if(indexPontoDepoisDoArroba !== false){// verifica caractere depois do ponto
                  if(valorDigitado[i+1]) checkListEmail.caracterDepoisDoPonto = true
                }
                if(i === 0 || i === valorDigitado.length - 1) {//verifica se o arroba esta no ultimo ou primeiro indice
                  if(valorDigitado[i] !== '@' && checkListEmail.arrobaPrimeiroOuUltimo == false){
                    checkListEmail.arrobaPrimeiroOuUltimo = true
                  }

                }
              }
            }

            if(tipoInput === 'Senha'){
              if(verificaCaixaAlta(valorDigitado)) checkListPWD.passuiCapsLock = true
              for(let i = 0; i < valorDigitado.length; i++){// verifica se string possui numero
                if(isNumber(valorDigitado[i]) == true){
                  checkListPWD.possuiNumero = true
                }
              }
              caracteresEspeciais.map(char =>{
                if(valorDigitado.indexOf(char) > -1){
                  checkListPWD.possuiCaractereEspecial = true
                }
              })
              if(valorDigitado.length >= 6){
                checkListPWD.comprimentoMinimo = true
              }
            }
            if(tipoInput === 'confSenha'){
              let senha = document.getElementById('reg2').value
              if(valorDigitado == document.getElementById('reg2').value) checkListPWDConfirm.igualASenha = true
            }
          })
          return checkList
        }
        //====================== fim valida registro
      }
   