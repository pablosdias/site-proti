// script.js

function mostrarProdutos() {
    document.getElementById('products').style.display = 'block';
  }
  
  function adicionarAoCarrinho(produto) {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    var listItem = document.createElement('li');
    listItem.textContent = produto;
    cartItems.appendChild(listItem);
    var totalAtual = parseFloat(cartTotal.textContent.replace('R$ ', ''));
    var preco = getPrecoProduto(produto);
    cartTotal.textContent = 'R$ ' + (totalAtual + preco).toFixed(2);
  }
  
  function getPrecoProduto(produto) {
    switch (produto) {
      case 'Tijolos':
        return 10.99;
      case 'Cimento':
        return 15.99;
      case 'Telhas':
        return 19.99;
      default:
        return 0.00;
    }
  }
  
  function finalizarCompra() {
    var cartTotal = document.getElementById('cart-total');
    alert('Total da compra: ' + cartTotal.textContent);
  }
  