function linkPerfil(numero) {
    let link = `https://api.whatsapp.com/send?phone=${numero}`;
    return link;
}

function actualizaLinkBoton() {
    const input = document.querySelector("#inputNumero");
    const value = input.value;
    const link = linkPerfil(value);

    const boton = document.querySelector("#botonLink");
    boton.href = link;
    console.log(boton)
}