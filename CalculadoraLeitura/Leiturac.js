function countText() {
let text = document.form_main.text.value;
document.getElementById('words').innerText = text.split(/\s+/).length;
}

function pausado(){
    let qtd_palavra = document.getElementById('words').innerText - 0;
    let tempo_total = qtd_palavra * 0.6;
    if(tempo_total<60)
    {
    resultado.innerText = tempo_total.toFixed(2) + " segundos";
    }
    else if(tempo_total>60){
        converter= tempo_total/60;
        resultado.innerText = converter.toFixed(2) + " minutos";
    }
}

function normal(){
    let qtd_palavra = document.getElementById('words').innerText - 0;
    let tempo_total = qtd_palavra * 0.5;

    if(tempo_total<60)
    {
    resultado.innerText = tempo_total.toFixed(2) + " segundos";
    }
    else if(tempo_total>60){
        converter= tempo_total/60;
        resultado.innerText = converter.toFixed(2) + " minutos";
    }
}

function rapido(){
    let qtd_palavra = document.getElementById('words').innerText - 0;
    let tempo_total = qtd_palavra * 0.4;
    if(tempo_total<60)
    {
    resultado.innerText = tempo_total.toFixed(2) + " segundos";
    }
    else if(tempo_total>60){
        converter= tempo_total/60;
        resultado.innerText = converter.toFixed(2) + " minutos";
    }
}
