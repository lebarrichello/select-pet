## Mini projeto: Select Pet

Projeto desenvolvido como parte dos estudos no módulo de Front-End do curso de desenvolvimento web Full-Stack da Trybe

[Gravação de tela de 08-11-2023 15:24:33.webm](https://github.com/lebarrichello/select-pet/assets/42211040/bf664a60-00c7-48c8-bef7-4b08785e731f)


<p>Acesse o projeto em produção <a href="https://select-pet-ebon.vercel.app/" target="_blank">clicando aqui</a></p>

## 🎯 Objetivo

Desenvolver uma aplicação que exibe fotos aleatórias de cães e gatos.O usuário pode escolher ver imagens aleatórias 
somente de doguinhos ou somente de gatinhos ou entao ser surpreendido.Essa aplicação utiliza duas API'S: [Dog Api](https://dog.ceo/dog-api/) e [Cat Api](https://thecatapi.com/)

## ✨ Requisitos 

- Crie um projeto npm do zero e configure o vite para usá-lo como web server
- Crie uma nova página que tenha os seguintes elementos:
   - um botão com o texto Get random dog;
   - um botão com o texto Get random cat;
   - um botão com o texto Surprise me;
   - uma imagem que deve ter como texto alternativo Random pet. Essa imagem começará com o atributo src vazio.
- Quando o botão Get random dog for clicado, faça uma requisição para a API https://dog.ceo/api/breeds/image/random. Essa API irá retornar um objeto com a imagem de um cachorro aleatório. 
- Quando o botão Get random cat for clicado, faça uma requisição para a API https://api.thecatapi.com/v1/images/search. Essa API irá retornar um objeto com a imagem de um gato aleatório. 
-  Quando o botão Surprise me for clicado, faça duas requisições: uma para a API de imagens de gatos e outra para API de imagens de cachorros. Exiba somente a imagem da API que retornar primeiro. Ignore o resultado da segunda requisição e também ignore o resultado caso alguma requisição retorne com erro.

## 💻 Tecnologias utilizadas:
<div style="display: inline_block">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</div>


## 📌 Créditos
- **Favicon:** -> [flaticon](https://www.flaticon.com/free-icon/pets_107777)
