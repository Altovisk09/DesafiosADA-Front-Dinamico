document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;
        const pais = document.getElementById("pais").value;
        const numero = document.getElementById("number").value;

        let valid = true;

        if (nome.trim() === "") {
            alert("Por favor, preencha o campo Nome.");
            valid = false;
        }

        if (email.trim() === "") {
            alert("Por favor, preencha o campo Email.");
            valid = false;
        } else if (!isValidEmail(email)) {
            alert("Por favor, insira um email válido.");
            valid = false;
        }

        if (senha.trim() === "") {
            alert("Por favor, preencha o campo Senha.");
            valid = false;
        } else if (!isSenhaForte(senha)) {
            alert("A senha deve conter pelo menos 8 caracteres, incluindo letras e números.");
            valid = false;
        }

        if (pais === "") {
            alert("Por favor, selecione um país de origem.");
            valid = false;
        }

        if (numero.trim() === "") {
            alert("Por favor, preencha o campo Número Celular.");
            valid = false;
        } else if (!isValidNumero(numero)) {
            alert("Por favor, insira um número de celular válido.");
            valid = false;
        }

        if (valid) {
            formulario.submit();
        }
    });

    function isValidEmail(email) {
        return email.includes("@") && (email.includes(".com") || email.includes(".com.br"));
    }    

    function isSenhaForte(senha) {
        if (senha.length < 8) {
            return false;
        }

        let temLetraMaiuscula = false;
        for (let i = 0; i < senha.length; i++) {
            if (senha[i] >= 'A' && senha[i] <= 'Z') {
                temLetraMaiuscula = true;
                break;
            }
        }

        let temNumero = false;
        for (let i = 0; i < senha.length; i++) {
            if (senha[i] >= '0' && senha[i] <= '9') {
                temNumero = true;
                break;
            }
        }
    
        return temLetraMaiuscula && temNumero;
    }

    function isValidNumero(numero) {
        return numero.length === 11 && !isNaN(numero);
    }
});
