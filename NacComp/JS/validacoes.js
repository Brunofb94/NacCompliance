var che = document.querySelector("#chk-yean");
var che2 = document.querySelector("#chk-no");
if (che.value[1] == true) {
    che2.disabled = true;
}

function verPermissao(campo) {
    var opt1 = document.getElementById('money');
    if (campo.checked) {
        // mostra...
        opt1.disabled = true;
    }
}

function SimorNo(valor) {
    var option1 = document.getElementById('chk-no');
    if (valor.checked) {
        option1.disabled = true;
    }
}

function noorYes(valor2) {
    var option2 = document.getElementById('chk-yean');
    if (valor2.checked) {
        option2.disabled = true;
    }
}