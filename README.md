# BuscadorCEP!
O aplicativo BuscadorCEP! permite que você encontre códigos de endereçamento postais (CEP). Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP! também vai te ajudar.

## Algumas tecnologias utilizadas
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

O projeto foi desenvolvido com `React` e `Typescript`, usando o `CSS` para estilização das páginas, as mesmas contendo a navegação realizada pelo `React Router Dom`, consumindo as apis do IBGE e Viacep por meio do `Axios`. Quanto a interface, foi utilizada algumas bibliotecas de `Material UI` como, `Radix UI` para a construção dos modais, a `React Tostify` para a exibição dos erros retornado da api para o usuário, o `React Text Mask` para criação do input de CEP com máscara, por fim a `React Icons` trazendo os ícones para interface. Tudo isso, possibilitando o usuário conseguir encontrar um CEP de determinado lugar e também encontrar um endereço com um CEP em mãos. 

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá erros de lint no console.

### `npm test`

Inicia o executor de teste no modo de exibição interativa.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `npm run eject`

**Nota: esta é uma operação unidirecional. Depois de 'ejetar', você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, poderá `ejetar` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente em seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste momento você está por sua conta.

Você não precisa usar `eject`. O conjunto de recursos com curadoria é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## Capturas de tela do projeto

![Captura de Tela 1](https://user-images.githubusercontent.com/50122269/199067448-755b5ad7-a961-4fc8-a8f4-5b2244c356bf.png)
![Captura de Tela 2](https://user-images.githubusercontent.com/50122269/199067514-6c3f5ed7-83c4-4e1e-93ec-e824452427f8.png)
![Captura de Tela (3)](https://user-images.githubusercontent.com/50122269/199067561-02954bfc-a540-436c-b702-31809db1d417.png)
