
const form = document.getElementById('form-id');

function valida_B_A(campoA,campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let campoA = parseFloat(document.getElementById('nA').value);
    let campoB = parseFloat(document.getElementById('nB').value);

    if (!valida_B_A(campoA,campoB)) {
        alert("Por favor, verifique os valores informados no campo A e B. É necessário que B seja maior que A.");
    }
    else {
        alert("Formulário validado");
    }
})

console.log(form);

