function copyText( eleid) {
  /* Get the text field */
  var text = eleid;

  /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
}

const Emojis = () => {
  
  cantidadEmojis = document.getElementById('numero').value
  cantidadEmojis = Math.floor(Math.abs(cantidadEmojis))
  const emojis = ['💑','😚','😘','💏','🤗', '❤' ]
  let listaEmojis = []
  
  for (let i=0 ; i < cantidadEmojis ; i++) {
      listaEmojis.push(emojis[Math.floor(Math.random() * 6)])
  }
  listaEmojis = listaEmojis.join('')
  document.getElementById('retorno').value =  listaEmojis
  copyText(document.getElementById('retorno'));
}

document.getElementById('boton').addEventListener("click", Emojis);
