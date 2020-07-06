const LogoContato = document.getElementsByClassName("Linguagens");

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