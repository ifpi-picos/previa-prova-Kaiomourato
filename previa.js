export function maiorNumero(lista){
    if(!Array.isArray(lista) || lista.length === 0){
        return null
    } else{
        return Math.max(...lista)
    }
}

export function verificarParOuImpar(numero){
    if (isNaN(numero)){
        return null
    } else if (numero % 2 == 0){
        return "Par"    
    } else{
        return "Ímpar"
    }
}
export function contarCaracter(texto, caracter) {
    if (typeof texto !== 'string' || typeof caracter !== 'string' || caracter.length !== 1) {
      return null
    } else{

    let contador = 0
    let i = 0

    let caracterMin = caracter.toLowerCase()
  
    while (i < texto.length) {
      if (texto[i].toLowerCase() === caracterMin) {
        contador++
      } 
      i++
    }
  
    return contador
    }
}
  

export function atualizarPropriedade(objeto, propriedade, alteração){
    if(propriedade in objeto){
        objeto[propriedade] = alteração
        return objeto
    } else {
        return null
    }
}