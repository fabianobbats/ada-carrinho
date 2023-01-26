export class Storage {
  static salvar(item) {

    let carrinho = this.lista() || []

    const itemIncart = carrinho.find(el => el.id === item.id)

    if (itemIncart) {
      itemIncart.incart += 1
    } else {
      item.incart = 1
      carrinho.push(item)
    }


    localStorage.setItem("@ada-carrinho:items", JSON.stringify(carrinho));
  }

  static remover(item) {

    let carrinho = this.lista() || []

    const itemIncart = carrinho.find(el => el.id === item.id)

    itemIncart.incart -= 1

    if (!itemIncart.incart) {
      carrinho = carrinho.filter(el => el.id != item.id)
    }

    localStorage.setItem("@ada-carrinho:items", JSON.stringify(carrinho));
  }

  static lista() {
    return JSON.parse(localStorage.getItem("@ada-carrinho:items"))
  }

  static getQuantidade() {
    const carrinho = this.lista() || []

    return carrinho.reduce((total, item) => total + item.incart, 0)
  }

  static getValorTotal() {
    const carrinho = this.lista() || []

    return carrinho.reduce((total, item) => total + item.incart * Number(item.price), 0)
  }

}