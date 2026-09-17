function dataHora(){
    const agora = new Date();
    const hora = agora.toLocaleDateString('pt-br');

    const relogios = document.querySelectorAll('.relogio-post');

    relogios.forEach(relogio =>{
        relogio.innerHTML = hora;
    });
}
setInterval(dataHora, 1000);
dataHora();
