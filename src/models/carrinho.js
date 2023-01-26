export class Carrinho {
  constructor() {
    this.carrinho = [];
  }

  adiciona(produto) {
    this.carrinho = [...this.carrinho, produto];
  }
  lista() {
    return this.carrinho;
  }

  remove(title) {
    this.carrinho = this.carrinho.filter(produto => produto.title !== title);
  }

}