<h1 align="center">
  <img alt="Github Explorer" title="Github Explorer" src=".github/logo.png" width="300px" />
</h1>

<h4 align = "center">
  Ferramenta para listagem de repositórios GitHub
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leeonardovargas/github-explorer-repositories.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leeonardovargas/github-explorer-repositories.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leeonardovargas/github-explorer-repositories.svg">

  <a href="https://github.com/leeonardovargas/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leeonardovargas/github-explorer-repositories.svg">
  </a>

  <a href="https://github.com/leeonardovargas/gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/leeonardovargas/github-explorer-repositories.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/leeonardovargas/github-explorer-repositories.svg">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="Gif Github Explorer" src=".github/gitbub-explorer.gif" />
</p>

## :rocket: Tecnologias

-  [Prettier](https://prettier.io/)
-  [ESLint](https://eslint.org/)
-  [YARN](https://yarnpkg.com/)
-  [Axios](https://github.com/axios/axios)
-  [Typescript](https://www.typescriptlang.org/)
-  [React](https://pt-br.reactjs.org/)
-  [Styled-components](https://www.styled-components.com/)
-  [Github-Octicons-Icons](https://primer.style/octicons/)
-  [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)

## 💻 Projeto

Essa ferramenta tem como objetivo listar repositórios Github. O usuário pode adicionar um novo repositório através de um campo de busca, ao inserir o valor no input é feito uma busca na [api do Github](https://developer.github.com/v3/). Também é possível ver os detalhes sobre os repositórios, como o número de starts, forkeds, issues abertas. Todos os dados são armazenados no [localStorage](https://javascript.info/localstorage) do navegador.

O motivo da criação desta aplicação foi melhorar os meus conhecimentos perante as linguagens **React** e **TypeScript**, usando assim esse projeto como uma ferramenta de estudo.

## :muscle: Contribuir

Como seres humanos todos nós somos tolerantes a falhas, então se você notar algum erro ou tenha alguma sugestão sobre o projeto, eu ficarei feliz com a sua contribuição, então faça o `fork` e clone o projeto a partir do seu usuário.

```bash
$ git clone https://github.com/SEU-NOME-DE-USUARIO/github-explorer-repositories.git
```
Gere uma nova ramificação do projeto, no exemplo a seguir vou chamar o branch de `minha-alteracao`, mas você pode dar o nome que quiser.

```bash
# Criando um branch
$ git branch minha-alteracao
# Acessando o novo branch
$ git checkout minha-alteracao
```

Faça as alterações necessárias e o push para a branch.

```bash
# Adicionando os arquivos alterados
$ git add .
# Mensagem do commit
$ git commit -m "Corrigindo...."
# Enviando alterações para o brach
$ git push --set-upstream origin minha-alteracao
```
Por último, você deve navegar até o seu repositório onde fez o fork e pressionar o botão *New pull request* no lado esquerdo da página.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
