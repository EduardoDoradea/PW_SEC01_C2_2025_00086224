
// boton 1
document.querySelectorAll("button")[0].addEventListener("click", function () {
    const contenedorParrafo = document.querySelector(".contenedorParrafo");
    const contenedorDescripcion = document.querySelector(".contenedorDescripcion");
    const contenedorDatos = document.querySelector(".contenedorDatos");
    const contenedorPrincipal = document.querySelector(".contenedorPrincipal");
    const contenedorCabecera = document.querySelector(".contenedorCabecera");

    if (contenedorParrafo.style.flexDirection === "column" && contenedorDescripcion.style.flexDirection === "column" && contenedorDatos.style.flexDirection === "column" && contenedorPrincipal.style.flexDirection === "column" && contenedorCabecera.style.flexDirection === "column") {
        contenedorParrafo.style.flexDirection = "row";
        contenedorDescripcion.style.flexDirection = "row";
        contenedorDatos.style.flexDirection = "row";
        contenedorPrincipal.style.flexDirection = "row";
        contenedorCabecera.style.flexDirection = "row";
    } else {
        contenedorParrafo.style.flexDirection = "column";
        contenedorDescripcion.style.flexDirection = "column";
        contenedorDatos.style.flexDirection = "column";
        contenedorPrincipal.style.flexDirection = "column";
        contenedorCabecera.style.flexDirection = "column";
    }
});

// boton 2
document.querySelectorAll("button")[1].addEventListener("click", function () {
    const titulo = document.querySelector("h1");
    titulo.textContent = "Desarrollo Web con HTML & CSS";
});

// boton 3
document.querySelectorAll("button")[2].addEventListener("click", function () {
    const subtitulo = document.querySelector(".contenedorDescripcion h2");
    const textoDescripcion = document.querySelector(".textoDescripcion");


    if (subtitulo.style.color === "red") {
        subtitulo.style.color = "#6322D6";
        textoDescripcion.style.color = "#940AA6";
    } else {
        subtitulo.style.color = "red";
        textoDescripcion.style.color = "blue";
    }
});

// boton 4: 
document.querySelectorAll("button")[3].addEventListener("click", function () {
    const contenedorDatos = document.querySelector(".contenedorDatos aside");

    if (!contenedorDatos.querySelector("img")) {
        const img = document.createElement("img");
        img.src = "imagenes/animewallpaper.jpg";
        img.alt = "Imagen de un anime";
        img.style.width = "500px";
        img.style.height = "auto";
        img.style.display = "block";
        img.style.marginTop = "15px";
        img.style.border = "3px solid #6F2FDE";
        img.style.borderRadius = "10px";
        contenedorDatos.appendChild(img);
    }
});