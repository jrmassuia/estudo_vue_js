new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }
    ,
    methods: {
        exibirAlerta() {
            alert('Botão clicado!');
        },
        armazenarValor(event) {
            this.valor = event.target.value;
        }
    }
})