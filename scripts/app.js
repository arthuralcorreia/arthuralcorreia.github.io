const LogoContato = document.getElementsByClassName("Linguagens");
const Buttons = document.getElementById("CVDownloadButtons")
const cardDownload = document.getElementById("cardDownload")
const FormButton = document.getElementById("BotaoFormulario")
const GridDetalhes = document.getElementById("GridDetalhesPessoais")
const formularioDeContato = document.getElementById("formularioDeContato")
const backForm = document.getElementById("backButton")

for(var i = 0; i < LogoContato.length; i++){
    LogoContato[i].addEventListener("mouseover", function () {
        if (this.getElementsByTagName("img")[0].style.display == ""){
            this.getElementsByTagName("p")[0].style.display = "grid"
            this.getElementsByTagName("img")[0].style.display = "none"
        }
    });

    LogoContato[i].addEventListener("mouseleave", function () {
        this.getElementsByTagName("p")[0].style.display = "none"
        this.getElementsByTagName("img")[0].style.display = ""
    });
}

cardDownload.addEventListener("mouseover", function () {
    this.getElementsByTagName("img")[0].style.display = "none"
    Buttons.style.display = "grid"
})

cardDownload.addEventListener("mouseleave", function () {
    this.getElementsByTagName("img")[0].style.display = "grid"
    Buttons.style.display = "none"
})

FormButton.addEventListener("click", function () {
    GridDetalhes.style.display = "none"
    formularioDeContato.style.display = "grid"
})

backForm.addEventListener("click", () => {
    GridDetalhes.style.display = "grid"
    formularioDeContato.style.display = "none"
})


console.log(backForm)