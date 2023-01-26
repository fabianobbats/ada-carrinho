import { CarrinhoController } from '../controllers/carrinhoController.js';
import { toBRL } from '../utils/currency.js';
import { View } from './view.js';

export class VitrineView extends View {
  constructor(seletor) {
    super(seletor);
  }

  renderizar(produtos) {
    this.limpaVitrine();

    produtos.forEach(produto => {
      this.view.appendChild(this.criarProduto(produto))
    })
  }

  criarProduto(produto) {
    const li = document.createElement("li")
    li.classList.add("item")
    li.innerHTML = `
      <img src="${produto.thumbnail}" onerror="this.src='./src/assets/img/indisponivel.png'" alt="${produto.description}">
      <h4 title="${produto.title}">${produto.title}</h4>
      <h6 title="${produto.description}">${produto.description}</h6>
      <h5>${toBRL(produto.price)}</h5>
    `
    const btnAdicionar = document.createElement("button")
    btnAdicionar.classList.add('btn-adicionar')
    btnAdicionar.innerText = "Adicionar ao Carrinho"
    btnAdicionar.onclick = () => CarrinhoController.adicionarAoCarrinho(produto)

    li.appendChild(btnAdicionar)

    return li
  }

  limpaVitrine() {
    const produtos = document.querySelectorAll(".vitrine li");

    produtos.forEach((produto) => produto.remove());
  }
}
