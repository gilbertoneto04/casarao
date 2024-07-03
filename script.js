function moverBotaoAleatorio(event) {
  const botao = event.target;
  const larguraPagina = document.body.clientWidth;
  const alturaPagina = document.body.clientHeight;
  const novaPosicaoX = Math.floor(
    Math.random() * (larguraPagina - botao.clientWidth)
  );
  const novaPosicaoY = Math.floor(
    Math.random() * (alturaPagina - botao.clientHeight)
  );
  botao.style.position = "absolute";
  botao.style.left = `${novaPosicaoX}px`;
  botao.style.top = `${novaPosicaoY}px`;
}
