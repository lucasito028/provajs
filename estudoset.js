const myObject = {

    delayedMethod: function() {
        setTimeout(() => {
            console.log('Ele so vai ser excecutado depois de 2 segundos');
        }, 2000);
    },

    // Usando setInterval dentro de um método de um objeto
    repeatedMethod: function() {
        const intervalId = setInterval(() => {
            console.log('Este metodo sera chamado a cada 3 segundos');
        }, 3000);


        setTimeout(() => {
            clearInterval(intervalId);
        }, 10000);
    }
};

// Chamando os métodos do objeto
myObject.delayedMethod();
myObject.repeatedMethod();
