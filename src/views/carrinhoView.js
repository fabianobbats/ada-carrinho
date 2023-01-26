import { CarrinhoController } from '../controllers/carrinhoController.js';
import { Storage } from '../services/storage.js';
import { toBRL } from '../utils/currency.js';
import { View } from './view.js';

export class CarrinhoView extends View {
  constructor(seletor) {
    super(seletor);
  }

  renderizar(items) {
    this.limpaCarrinho()

    if (items.length === 0) {
      const li = document.createElement("li")
      li.classList.add("itemCarrinho", "carrinhoVazio")
      li.innerText = "Carrinho vazio"
      this.view.appendChild(li)
    } else {
      items.forEach(item => {
        this.view.appendChild(this.criarItemCarrinho(item))
      })
    }
    this.renderizarTotais()
  }

  renderizarTotais() {
    document.querySelector(".totais .quantidade").innerText = Storage.getQuantidade()
    document.querySelector(".totais .valorTotal").innerText = toBRL(Storage.getValorTotal())
  }

  criarItemCarrinho(item) {
    console.log("item", item)
    const li = document.createElement("li")
    li.classList.add("itemCarrinho")
    li.innerHTML = `
        <img src="${item.thumbnail}" onerror="this.src='./src/assets/img/indisponivel.png'" alt="${item.description}">
        <div class="info">
          <h5 class="descricao" title="${item.title}">${item.title}</h5>
          <h6 class="categoria">${item.category}</h6>
          <h4 class="preco">${toBRL(item.price)}</h4>
        </div>
        <div class="acoes">
          <button class="btn-adicionar">+</button>
          <span class="quantidade">${item.incart}</span>
          <button class="btn-remover">-</button>
        </div>
      `

    li.querySelector('.btn-adicionar').addEventListener("click", () => CarrinhoController.adicionarAoCarrinho(item))
    li.querySelector('.btn-remover').addEventListener("click", () => CarrinhoController.removerDoCarrinho(item))

    return li
  }

  limpaCarrinho() {
    const items = document.querySelectorAll(".itemCarrinho")
    items.forEach(item => item.remove())
  }
}
