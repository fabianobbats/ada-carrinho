import { Storage } from '../services/storage.js';
import { CarrinhoView } from '../views/carrinhoView.js';

export class CarrinhoController {
  static carrinhoView = new CarrinhoView(".carrinho");

  static async renderizaLista() {
    const carrinho = Storage.lista() || []
    this.carrinhoView.renderizar(carrinho)
  }

  static adicionarAoCarrinho(item) {
    Storage.salvar(item)
    this.renderizaLista()
  }

  static removerDoCarrinho(item) {
    Storage.remover(item)
    this.renderizaLista()
  }
}
