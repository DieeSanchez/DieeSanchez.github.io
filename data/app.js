const contPrincipal = document.querySelector(".container");
const titAcademico = document.getElementById("academicos");
const titTecnico = document.getElementById("tecnicas");
const btn = document.querySelector(".topBoton");
const btn2 = document.querySelector(".topBoton2");
const banner = document.getElementById("banner");
const modalDatos = document.getElementById("modalDatos");
const btnCerrarModal1 = document.getElementById("cerrarModal");
const btnLinkedin = document.getElementById("btnLinkedin");
const btnProyectos = document.getElementById("btnGit");
const btnDatos = document.getElementById("btnDatos");
const modalOtrosDatos = document.getElementById("modalOtrosDatos");
const btnOtrosDatos = document.getElementById("btnOtrosDatos");

btn.addEventListener("click",() =>{
    contPrincipal.style.background="#082032";
    titAcademico.style.color = "#C4DFE6";
    titTecnico.style.color = "#C4DFE6";
    banner.src="./data/Banner2.png";

if(btn.style.background = "rgb(48, 242, 122)"){
    setTimeout(()=>{
        btn.style.background = "none";
    }, 380);
}
});
btn2.addEventListener("click",() =>{
    contPrincipal.style.background="#336B87";
    titAcademico.style.color = "#1a2024";
    titTecnico.style.color = "#1a2024";
    banner.src="./data/Banner8.png";

    if(btn2.style.background = "rgb(242, 48, 48)"){
        setTimeout(()=>{
            btn2.style.background = "none";
        }, 380);
    }

});

btnLinkedin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/diego-m-sanchez/");
});
btnProyectos.addEventListener("click", ()=>{
    window.open("https://github.com/DieeSanchez?tab=repositories");
});

btnDatos.addEventListener("click", () =>{
    modalDatos.showModal();
});

btnCerrarModal1.addEventListener("click",()=>{
    modalDatos.close();
});

btnOtrosDatos.addEventListener("click", () =>{
    modalOtrosDatos.showModal();
});

cerrarModalDatos.addEventListener("click",()=>{
    modalOtrosDatos.close();
});