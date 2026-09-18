function dataHora(){
    const agora = new Date();
   
    const horaFormatada = agora.toLocaleTimeString('pt-BR');

    const relogios = document.querySelectorAll('.relogio-post');

    relogios.forEach(relogio => {
        relogio.innerText = horaFormatada;
    });
}

dataHora();
setInterval(dataHora, 1000);
