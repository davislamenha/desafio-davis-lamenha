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

  verificarExtra(itens, extra, principal) {
    const temExtra = itens.some(({ codigo }) => codigo === extra);

    if (temExtra) {
      const temPrincipal = itens.some(({ codigo }) => codigo === principal);
      return temPrincipal;
    }

    return true;
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    if (!itens.length) return 'Não há itens no carrinho de compra!';

    const itensFormatados = this.formatarItens(itens);

    if (!this.validarQuantidade(itensFormatados)) return 'Quantidade inválida!';

    if (!this.validarItens(itensFormatados)) return 'Item inválido!';

    const verificarExtraCafe = this.verificarExtra(
      itensFormatados,
      'chantily',
      'cafe',
    );
    const verificarExtraSanduiche = this.verificarExtra(
      itensFormatados,
      'queijo',
      'sanduiche',
    );

    if (!verificarExtraCafe || !verificarExtraSanduiche)
      return 'Item extra não pode ser pedido sem o principal';

    return '';
  }
}

export { CaixaDaLanchonete };
