/*$(document).ready(function() {
    $("#cpf").mask("999.999.999-99");
})*/

/*var Cpfinput = $("#cpf").value;

var myregex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?
    [0-9]{3}\./?[0-9]{4}\-?[0-9]{2})$/;
*/

function valida() {
    if (valida_cpf(document.getElementById('cpf').value)) {
        ///
        var btns = document.querySelector("#validar")

        btns.addEventListener("click", function(evento) {
                evento.preventDefault()

                var frms = document.querySelector("#myform")
                var nome = frms.fname.value;
                var cpf = frms.cpf.value;
                var rg = frms.rg.value;
                var email = frms.email.value;
                var cep = frms.cep.value;
                var fone = frms.fone.value;
                var nickname = frms.nickname.value;

                let tred = document.createElement("tr");
                let tdnome = document.createElement("td");
                let tdcpf = document.createElement("td");
                let tdrg = document.createElement("td");
                let tdemail = document.createElement("td");
                let tdcep = document.createElement("td");
                let tdfone = document.createElement("td");
                let tdcnickname = document.createElement("td");

                tdnome.textContent = nome;
                tdcpf.textContent = cpf;
                tdrg.textContent = rg;
                tdemail.textContent = email;
                tdcep.textContent = cep;
                tdfone.textContent = fone;
                tdcnickname.textContent = nickname;

                if (tdnome == null) {
                    alert("insira dados ")
                } else {


                    tred.appendChild(tdnome)
                    tred.appendChild(tdcpf)
                    tred.appendChild(tdrg)
                    tred.append(tdemail)
                    tred.appendChild(tdcep)
                    tred.appendChild(tdfone)
                    tred.appendChild(tdcnickname)
                }
                let tab = document.querySelector("#tb")
                tab.appendChild(tred)




            })
            ////

        alert('CPF Válido');

    } else

        alert('Campo Vázio ou CPF Inválido');
}

function valida_cpf(cpf) {
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    } else
        return false;
}