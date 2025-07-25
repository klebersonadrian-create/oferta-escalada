
const imagens = [
  "/imagens/imagem1-escalada.png",
  "/imagens/imagem2-escalada.png",
  "/imagens/imagem3-escalada.png",
  "/imagens/imagem4-escalada.png",
  "/imagens/imagem5-escalada.png",
  "/imagens/imagem6-escalada.png",
  "/imagens/imagem7-escalada.png",
  "/imagens/imagem8-escalada.png",
  "/imagens/imagem9-escalada.png",
  "/imagens/imagem10-escalada.png"
];

// Exemplo de uso no seu código
imagens.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  document.body.appendChild(img);
});
