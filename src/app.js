import { CarrinhoController } from './controllers/carrinhoController.js';
import { VitrineController } from './controllers/vitrineController.js';

async function render() {
  await VitrineController.renderizaLista()
  await CarrinhoController.renderizaLista()
}
render()