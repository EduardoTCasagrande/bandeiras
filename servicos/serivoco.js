import  {colecaoUf}  from '../dados/dados.js';

export const buscarUfs = () => {
  return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
  console.log('Buscando UFs por nome:', nomeUf);

  const resultado = colecaoUf.filter(uf => {
     const ufNomeLowerCase = uf.nome.toLowerCase();
     const nomeUfLowerCase = nomeUf.toLowerCase();
     const includes = ufNomeLowerCase.includes(nomeUfLowerCase);
     console.log(`Comparando: ${ufNomeLowerCase} com ${nomeUfLowerCase}. Resultado: ${includes}`);
     return includes;
  });

  console.log('Resultado da busca:', resultado);
  return resultado;
};



export const buscarUfPorId = (id) => {
  const idUF = parseInt(id);
  return colecaoUf.find(uf => uf.id === idUF);
}