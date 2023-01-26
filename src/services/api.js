export class Api {
  static getProdutos() {
    return fetch('./src/database/produtos.json', {
      method: "GET",
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(({ products }) => products)
  }
}
