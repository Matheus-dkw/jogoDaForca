const biblioteca = ['alura']

//['alura', 'motorista', 'advogado', 'conhecimento', 'descoberta', 'uniforme', 'habilidade','academia','churrasco','aerporto']

const palavraSecreta = biblioteca[Math.floor(Math.random() * biblioteca.length)]

const letrasPalavraSecreta = palavraSecreta.split("")

const container = document.getElementById("adivinhado");

const slotsDeLetras = []

const letrasErradas = [];

const listaDeLetrasCertas = [];

const listaDeLetrasErradas = [];

let n = 7

let perdeu = false

let venceu = false

// Cria todos os slots
letrasPalavraSecreta.forEach(function (el, posicao) { // (elementos, posicao, array)
  const slot = document.createElement('span') // criando um bloco
  slot.classList.add("letra"); // add formatação css
  slot.classList.add("adivinhada"); // add formatação css
  slot.setAttribute('id', posicao);  // ( 'classe' ou 'id', valor da classe > ex: .red )
  slotsDeLetras.push(slot)
  container.appendChild(slot);
})
//------------------------------------------------------------------------------------

const letrasErradasBolean = [false, false, false, false, false, false, false];

let letrasCorretas = letrasPalavraSecreta.map(function () {
  return false;
});
console.log("letrasCorretas array:", letrasCorretas);
let letra = '';

/*--------------------------Tecla Pressionada---------------------------------- */

document.body.addEventListener('keypress', function (event) {
  letra = event.key
  codigo = event.keyCode;
  console.log(`Key: ${letra}, Code ${codigo}`);
  comecar()
});
function comecar(){
  if (letrasPalavraSecreta.length == listaDeLetrasCertas.length) { // venceu?
    venceu = true
    alert(`voce Ganhou! Parabens`)
  
  } else {
    if (listaDeLetrasErradas.length > 5) { // perdeu?
      perdeu = true
      alert(`voce perdeu! tente novamente`)
  
    } else (venceu == false);{
      /*add letra certa */
      if (letrasPalavraSecreta.includes(letra) == true) {
        mostrarNaTelaLetrasCertas()
  
      } else (perdeu == false);{
        /*add letra Errada */
        if (listaDeLetrasErradas.includes(letra) == false && listaDeLetrasCertas.includes(letra) == false ){
          listaDeLetrasErradas.push(letra)
          mostrarNaTelaLetrasErradas()
      }else{
        alert(`voce ja digitou a letra ${letra}!`)
      }
      }
  
    }
  }
}




















function mostrarNaTelaLetrasCertas() {

  if (letrasPalavraSecreta.includes(letra) == true) {//======= letra certa ====

    if (listaDeLetrasCertas.includes(letra) == true && acabar == false) {
      alert(`voce ja digitou a letra ${letra}!`)
    }
    letrasPalavraSecreta.forEach(function (el, posicao) {

      if (letra == el && letrasCorretas[posicao] == false) {
        const textElement = document.createTextNode(letra.toUpperCase())
        slotsDeLetras[posicao].appendChild(textElement)
        letrasCorretas[posicao] = true
        console.log(letrasCorretas)
        listaDeLetrasCertas.push(letra)

        

      }
    })

  }
}




function mostrarNaTelaLetrasErradas() {



  //elemento Pai
  const listaErrada = document.getElementById("errado")

  //ADD Novo item  => elemento filho
  let novaLetraErrada = document.createElement('span')
  novaLetraErrada.classList.add("errado")
  novaLetraErrada.classList.add("errada")
  novaLetraErrada.textContent = letra
  listaErrada.appendChild(novaLetraErrada)
  mudarFoto()

}

function voltarParaHome() {
  window.location.replace("index.html")
}

function mudarFoto() {
  if (n > 1) {
    n--
    const image = document.getElementById("boneco")
    image.src = `http://localhost:5500/Alura/Challage/Sprint2/forca/0${n}-boneco.png`

    if (n == 1) {
      alert(`voce perdeu! tente novamente`)
      image.src = `http://localhost:5500/Alura/Challage/Sprint2/forca/08-VocePerdeu.png`

    }
  }
}


function salvarPalavra() {
  const novaPalavra = document.getElementById('textoentrada').value

  if (biblioteca.includes(novaPalavra) == false) {
    biblioteca.push(novaPalavra)
    alert(`${novaPalavra} foi adicionada a biblioteca`)

  } else {
    alert('Palavra ja adicionada ou incorreta!')
  }
}



console.log(palavraSecreta)

console.log(letrasPalavraSecreta)
