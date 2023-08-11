import cardapio from './cardapio.js';
class CaixaDaLanchonete {
  formatarItens(itens) {
    return itens.map((item) => {
      const itemSeparado = item.split(',');
      const codigo = itemSeparado[0];
      const quantidade = Number(itemSeparado[1]);

      return { codigo, quantidade };
    });
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    if (!itens.length) return 'Não há itens no carrinho de compra!';

    const itensFormatados = this.formatarItens(itens);

    return '';
  }
}

export { CaixaDaLanchonete };
