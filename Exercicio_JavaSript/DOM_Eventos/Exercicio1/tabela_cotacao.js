document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
  mostraSituacao();

  document.querySelector('#btn-cadastrar').addEventListener('click', btnCadastrarClick);
}

function mostraSituacao() {
  const cotacoes = document.querySelectorAll('.cotacao');

  cotacoes.forEach(cotacao => {
    const nome = cotacao.querySelector('.info-nome').textContent;
    const preco = cotacao.querySelector('.info-valor').textContent;
    const infoSituacao = cotacao.querySelector('.info-situacao');
    infoSituacao.textContent = atualizaSituacao(preco);
  });
}

function atualizaSituacao(preco){
  if(preco > 50){
    return "vender";
  }else if(preco < 50){
    return "comprar";
  }else{
    return "manter em carteira";
  }
}

function btnCadastrarClick(event) {
  const form = document.querySelector('.form-cotacao');
  const acao = form.acao.value;
  const valor = form.valor.value;

  const row = document.createElement('tr');
  const infoAcao = document.createElement('td');
  const infoValor = document.createElement('td');
  const infoSituacao = document.createElement('td');


  infoAcao.textContent = acao;
  infoValor.textContent = valor;
  infoSituacao.textContent = mostraSituacao();

  row.appendChild(infoAcao);
  row.appendChild(infoValor);
  row.appendChild(infoSituacao);


  const tabela = document.querySelector('.table-responsive tbody');
  tabela.insertBefore(row, tabela.childNodes[2]);
  console.log(infoSituacao);
}
