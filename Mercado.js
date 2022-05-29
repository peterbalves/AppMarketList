let itens = [];

document.querySelector('input[type=submit]').addEventListener('click', function clickar(){
    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let precoProduto = document.querySelector('input[name=price_produto]');

    itens.push({
        nome:nomeProduto.value,
        valor:precoProduto.value
    });
    let listaProdutos = document.querySelector('.lista-produto');
    let soma = 0;
    listaProdutos.innerHTML = "";

    itens.map(function(val){
        soma+=parseFloat(val.valor);

        listaProdutos.innerHTML+=`
        <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price"><span>R$`+val.valor+`</span></h3>
        
    </div>
        `;
    }) 
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;

});

document.querySelector('button[name=limpar]').addEventListener('click', function Limpar(){
    itens = [];
    document.querySelector('.lista-produto').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0"
    alert('Limpo')
});