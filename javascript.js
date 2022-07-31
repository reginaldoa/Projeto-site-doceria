function horas(){
    const horario = document.querySelector('div#horario');
    const data = new Date();
    horario.innerHTML=data.toLocaleDateString('pt-BR', {dateStyle:'full',hour12:true});
}
horas();

// era possível fazer a validação do formulário pelo JavaScript, porém, para deixar o código mais limpo, optei por fazer de uma forma nativa pelo HTML.



//depois ver pq a hora parou de funcionar.