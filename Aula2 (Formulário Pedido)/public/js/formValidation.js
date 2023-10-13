window.addEventListener('DOMContentLoaded', function(){
    const form = document.forms[0];
    const inputs = ['order', 'date', 'amount', 'email', 'delivery-prediction']
    
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

    }


    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        try{

        }catch(error){

        }
    })
})