function cuentaWhatsapp(numero) {
    let direccion = `https://api.whatsapp.com/send?phone=51${numero}`;
    return direccion;
}

function irAWhatsapp() {
    const input = document.querySelector("#inputNumero");
    const value = input.value;
    const direccion = cuentaWhatsapp(value);

    const boton = document.querySelector("#botonLink");
    boton.href = direccion;
}