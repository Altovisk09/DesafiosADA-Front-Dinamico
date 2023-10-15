window.addEventListener('DOMContentLoaded', function(){
    const form = document.forms[0];
    const tbody = document.querySelector("table > tbody");

    class FormError extends Error{
        constructor(message, input, value){
            super(message);
            this.message = message;
            this.input = input;
            this.value = value;
            this.name = "Form Error"
        }
    }

    function validaVazio(value = ''){
        return !!value.trim();
    }

    function validaDate(value = new Date()){
        const today = new Date().getDate();
        const correntMonth = new Date().getMonth();

        const dayValue = value.getUTCDate();
        const monthValue = value.getUTCMonth();

        const dayValid = dayValue >= today;
        const monthValid = monthValue >= correntMonth;
        return dayValid && monthValid;
    }

    function validaDelivery(value = ''){
        const tempoMin = 30;
        const [hourValue, minuteValue] = value.split(':');
        const today = new Date();
        today.setMinutes(today.getMinutes() + tempoMin);
        const valueOrder = new Date();
        valueOrder.setHours(hourValue);
        valueOrder.setMinutes(minuteValue);
        console.log(valueOrder, today)
        return valueOrder >= today
    }

    function validaAmount(value = 0){
        const valorMin = 10
        return value >= valorMin;

    }

    function validaEmail(value = ''){
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
    }

    function feedback(message, classe = "alert-danger"){
        const divMessage = document.querySelector("#mensagem");
        divMessage.textContent = message;
        if (classe != "alert-danger") {
          divMessage.classList.remove("alert-danger");
        }
        divMessage.classList.add(classe);
        
    }
    const defaultOrder = {
        pedido: "",
        data: "",
        valor: 0,
        email: "",
        previsao: "",
    }
    
    let qtdPedidos = 0;

    function addLinha(order = defaultOrder){        
        const row = document.createElement("tr");
        const rowID = document.createElement("th");
        rowID.setAttribute("scope", "row");
        rowID.textContent = qtdPedidos + 1;
        row.appendChild(rowID);
        Object.keys(order).forEach((key) => {
          const colun = document.createElement("td");
          colun.textContent = order[key];
          row.appendChild(colun);
        });
        tbody.appendChild(row);
        qtdPedidos++;
      };

    const validaInputs = (input, value) => {
        if (input === "order" && !validaVazio(value)){
            throw new FormError("Pedido inválido", input, value);
        }
        
      if (input === "date" && ! validaDate(new Date(value))){
        throw new FormError("Data inválida", input, value);
      }
        
    if (input === "amount" && !validaAmount(value)){
       throw new FormError("Valor inválido", input, value);
    }

       if (input === "email" && !validaEmail(value))
         throw new FormError("Email inválido", input, value);

       if (input === "delivery" && !validaDelivery(value))
         throw new FormError("Previsão inválida", input, value);
    };

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const inputs = ['order', 'date', 'amount', 'email', 'delivery']
        try{
            const order = {};
            inputs.forEach((input) => {
                const inputValue = form[input].value;
                validaInputs(input, inputValue);
                Object.assign(order, {
                    [input]: form[input].value,
                  });
            })
            addLinha(order);
            feedback("Sucesso", "alert-success")
        }catch(error){
            feedback(`Erro: ${error.message}`);
        }
    })
})