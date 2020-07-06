const teste = document.querySelector(".LogoContato");

const memoria = teste
teste.addEventListener("mouseenter", function (){
    this.innerHTML = "<p>Automações<br><br>Ciencia de Dados<br><br>ciencia de dados<p>"
})
teste.addEventListener("mouseleave", function (){
    this.innerHTML = memoria
})