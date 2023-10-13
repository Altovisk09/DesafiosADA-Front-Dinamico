window.addEventListener('DOMContentLoaded', function(){
    const form = document.forms[0];
    
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

    function validaDate(date = new Date()){

    }

    function validaDelivery(value = ''){

    }

    function validaAmount(value = 0){

    }

    function validaEmail(value = ''){

    }
    
    const validaInputs = (input, value) => {
        if (input === "order" && !validaVazio(value))
        throw new FormError("Pedido inválido", input, value);

      if (input === "data" && !validaDate(new Date(value)))
        throw new FormError("Data inválida", input, value);

      if (input === "amount" && !validaAmount(value))
        throw new FormError("Valor inválido", input, value);

      if (input === "email" && !validaEmail(value))
        throw new FormError("Email inválido", input, value);

      if (input === "delivery" && !validaDelivery(value))
        throw new FormError("Previsão inválida", input, value);
    };


    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const inputs = ['order', 'date', 'amount', 'email', 'delivery-prediction']
        try{
            inputs.forEach((input) => {
                const inputValue = form[input].value;

                validaInputs(input, inputValue)
            })
        }catch(error){
            alert(error.message);
        }
    })
})