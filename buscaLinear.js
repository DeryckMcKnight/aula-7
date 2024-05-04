function buscaLinear(valorBuscado, listaDeElementos) {
    for (i = 0; i<listaDeElementos.length; i++){
        if (listaDeElementos[i] === valorBuscado){
            return i;
        }
    }
    console.log("Não encontrou o elemento");
}

console.log(buscaLinear);