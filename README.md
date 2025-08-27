# AB1-Programacao-Web-1
O projeto da disciplina consiste na criação de um sistema web que tenha como propósito a resolução de algum problema do mundo real. O sistema proposto deverá ser construído de forma que contribua ou facilite a vida das pessoas envolvidas.
Sistema de Conversão SIAP (Versão React)
Este projeto é uma implementação da interface de usuário para o "Sistema de Conversão SIAP" utilizando a biblioteca React. A aplicação foi estruturada de forma componentizada, seguindo as melhores práticas de desenvolvimento front-end moderno.


# Visão Geral
A interface oferece um layout limpo dividido em três partes principais: um cabeçalho fixo com título e navegação, uma barra lateral com categorias de fundos e uma área de conteúdo central para a funcionalidade principal de conversão de arquivos.

# Funcionalidades
Header: Cabeçalho com título centralizado e links de navegação à direita ("Suporte", "Instruções", "Login").

Sidebar: Barra lateral com botões para diferentes categorias ("Fundo Saúde", "Fundo Assistência Social", etc.).

Área de Conversão: Um painel central que permite ao usuário selecionar um arquivo (.xlsx) e iniciar o processo de download (simulado).

Componentização: O código é dividido em componentes reutilizáveis (Header, Sidebar, ConverterBlock), facilitando a manutenção e escalabilidade.

# Tecnologias Utilizadas

React: Biblioteca JavaScript para construir interfaces de usuário.

Create React App: Boilerplate utilizado para iniciar o ambiente de desenvolvimento React.

CSS Modules: Para estilização escopada por componente, evitando conflitos de classes CSS.

JavaScript (ES6+): Linguagem base para a lógica da aplicação.

HTML5 & CSS3: Para estruturação e estilização.

# Pré-requisitos
Antes de começar, você precisa ter as seguintes ferramentas instaladas em sua máquina:

### Node.js (versão 16 ou superior recomendada)

### NPM (geralmente instalado junto com o Node.js) ou Yarn

Como Executar
Siga os passos abaixo para clonar e executar o projeto localmente:

### Clone o repositório:

Execute no terminal  git clone https://github.com/jpg-indev/AB1-Programacao-Web-1.git

## Navegue até o diretório do projeto:

Execute no terminal

cd sistema-conversao-siap-react
Instale as dependências:
Se estiver usando NPM:

Execute no terminal

### npm install
Se estiver usando Yarn:

Execute no terminal

### yarn install
Inicie o servidor de desenvolvimento:
Com NPM:

Execute no terminal

### npm start

Com Yarn:

Execute no terminal

### yarn start

Após executar o último comando, o navegador abrirá automaticamente no endereço http://localhost:3000, e você poderá ver a aplicação em funcionamento. Qualquer alteração nos arquivos do projeto será refletida em tempo real no navegador.

### Estrutura do Projeto
A estrutura de pastas foi organizada para separar as responsabilidades e facilitar a localização dos arquivos. A pasta principal de trabalho é a:

src/
 ├── components/
 │    ├── Header/
 │    │     ├── Header.js
 │    │     └── Header.css
 │    ├── Sidebar/
 │    │     ├── Sidebar.js
 │    │     └── Sidebar.css
 │    └── ConverterBlock/
 │          ├── ConverterBlock.js
 │          └── ConverterBlock.css
 ├── App.js
 └── index.js