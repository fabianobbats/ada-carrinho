import { Api } from "../services/api.js"
import { VitrineView } from "../views/vitrineView.js";

export class VitrineController {
  static vitrineView = new VitrineView(".vitrine");

  static async renderizaLista() {
    const produtos = await Api.getProdutos()
    this.vitrineView.renderizar(produtos)
  }
}