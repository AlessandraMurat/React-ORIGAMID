  // Aula 207 Exercício 

  // Mostre os dados da aplicação como apresentado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores 
  // Se a situação estiver ativo pinte de verde, inativo vermelho 


import React from 'react'


const gabriela  = {
  cliente: 'Gabriela',
  idade: 27,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1000'}
  ],
  ativa: true
}

const mario = {
  cliente: 'Mario',
  idade: 34,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 4000'}
  ],
  ativa: false
}

const App = () => {

  const dados  = gabriela;

  //Utilizamos o map para retornar uma nova array a partir de um array ja existente, e mostrando somente os preços
  // Utilizamos o replace para tirar o cifrão do valor
  const totalCompra = dados.compras
    .map((item) => Number(item.preco.replace('R$', '')),)
    .reduce((a, b) => a + b);
  console.log(totalCompra);
 
  return (  
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade} anos</p>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red', fontWeight : 'bold'}}> {dados.ativa ? 'Cliente Ativo' : 'Cliente Inativo'}</span> </p>
      <p>Total: R$ {totalCompra}</p>

      {/* O && verifica se a condição é verdadeira, se for ele continua a expressão, caso seja falsa ele não mostra nada */}
      {totalCompra > 10000 && <p style={{color: 'red'}}>Atenção! Você precisa parar de gastar</p>}


    </div>
  )







}

export default App;
