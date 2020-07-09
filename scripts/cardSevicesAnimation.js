const serviceItem = document.getElementsByClassName("serviceItem")
const skillItem = document.getElementsByClassName("Linguagens")

for(var i = 0; i < serviceItem.length; i ++){
    serviceItem[i].addEventListener("mouseover", function () {
        this.getElementsByTagName("p")[0].classList.add("mudarCor")
    })
    serviceItem[i].addEventListener("mouseleave", function () {
        this.getElementsByTagName("p")[0].classList.remove("mudarCor")
    })
}

componetesSelecionados = [[skillItem[1], skillItem[2], skillItem[7]],
                          [skillItem[0]],
                          [skillItem[1], skillItem[3], skillItem[4], skillItem[5], skillItem[6]],
                          [skillItem[0], skillItem[2], skillItem[3], skillItem[6]]]

HoverServiceAnimation(serviceItem[0], componetesSelecionados[0])
HoverServiceAnimation(serviceItem[1], componetesSelecionados[1])
HoverServiceAnimation(serviceItem[2], componetesSelecionados[2])
HoverServiceAnimation(serviceItem[3], componetesSelecionados[3])

// console.log(componetesSelecionados[2])

function HoverServiceAnimation (activator, componente) {
    activator.addEventListener("mouseover", function () {
        adicionarClasse(componente , "aumentar")
    })
    
    activator.addEventListener("mouseleave", function () {
        removerClasse(componente , "aumentar")
    })
}

function adicionarClasse (componente, classe) {
    for(var i = 0; i < componente.length; i++){
        componente[i].classList.add(classe)
    }
}
function removerClasse (componente, classe) {
    for(var i = 0; i < componente.length; i++){
        componente[i].classList.remove(classe)
    }
}