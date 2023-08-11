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

  validarItens(itens) {
    let itemNaoExiste = false;
    itens.forEach(({ codigo }) => {
      if (!cardapio.find((item) => item.codigo === codigo))
        itemNaoExiste = true;
    });
    return !itemNaoExiste;
  }

  validarQuantidade(itens) {
    const qtdZero = itens.some(({ quantidade }) => quantidade <= 0);
    return !qtdZero;
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    if (!itens.length) return 'Não há itens no carrinho de compra!';

    const itensFormatados = this.formatarItens(itens);

    if (!this.validarQuantidade(itensFormatados)) return 'Quantidade inválida!';

    if (!this.validarItens(itensFormatados)) return 'Item inválido!';

    return '';
  }
}

export { CaixaDaLanchonete };
