# 📊 ERP Fácil

Sistema ERP (Enterprise Resource Planning) desenvolvido com **Node.js e Express**, com o objetivo de criar uma aplicação completa para gerenciamento de pequenas empresas.

O projeto está sendo desenvolvido como parte dos meus estudos de desenvolvimento de sistemas e tem como objetivo aplicar conceitos de **desenvolvimento Back-end, APIs REST, arquitetura em camadas, banco de dados e desenvolvimento Front-end**.

> 🚧 Projeto em desenvolvimento.

---

## 🎯 Objetivo

O ERP Fácil tem como objetivo centralizar diferentes processos de uma empresa em uma única aplicação.

O sistema será responsável pelo gerenciamento de:

- Usuários
- Clientes
- Produtos
- Categorias
- Fornecedores
- Estoque
- Vendas
- Relatórios
- Dashboard

---

## 🚀 Tecnologias

### Back-end

- Node.js
- Express.js
- JavaScript

### Banco de Dados

- MySQL *(será integrado posteriormente)*

### Front-end

- HTML5
- CSS3
- JavaScript
- Bootstrap *(planejado)*

### Ferramentas

- Visual Studio Code
- Git
- GitHub
- Postman
- MySQL Workbench

---

## 🏗️ Arquitetura

O projeto está sendo desenvolvido utilizando separação de responsabilidades.

A arquitetura planejada segue o fluxo:

```text
Requisição HTTP
      ↓
    Routes
      ↓
 Controllers
      ↓
   Services
      ↓
    Models
      ↓
    MySQL
```

### Routes

Responsáveis por definir os endpoints da API e direcionar cada requisição para o controller correspondente.

### Controllers

Responsáveis por receber as requisições, coordenar o processamento e enviar as respostas HTTP.

### Services

Serão responsáveis pelas regras de negócio da aplicação.

### Models

Serão responsáveis pela camada de acesso e representação dos dados.

---

## 📁 Estrutura atual

```text
erp-facil/
│
├── backend/
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── database/
├── docs/
├── frontend/
├── .gitignore
└── README.md
```

---

## 🌐 Endpoints atuais

### Clientes

```http
GET /clientes
```

Retorna a lista de clientes.

### Produtos

```http
GET /produtos
```

Retorna a lista de produtos.

### Usuários

```http
GET /usuarios
```

Retorna a lista de usuários.

> Atualmente os dados utilizados pelos controllers são dados de teste. A integração com o MySQL será implementada posteriormente.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do back-end

```bash
cd erp-facil/backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
node server.js
```

O servidor ficará disponível em:

```text
http://localhost:3000
```

---

## 📌 Funcionalidades planejadas

- [x] Estrutura inicial do projeto
- [x] Servidor Node.js com Express
- [x] Separação de rotas
- [x] Controllers iniciais
- [x] Endpoint de clientes
- [x] Endpoint de produtos
- [x] Endpoint de usuários
- [ ] Configuração do MySQL
- [ ] CRUD de clientes
- [ ] CRUD de produtos
- [ ] CRUD de usuários
- [ ] Categorias
- [ ] Fornecedores
- [ ] Controle de estoque
- [ ] Sistema de vendas
- [ ] Autenticação
- [ ] Controle de permissões
- [ ] Dashboard
- [ ] Relatórios
- [ ] Documentação da API
- [ ] Testes automatizados
- [ ] Front-end
- [ ] Deploy

---

## 📚 Conceitos aplicados

Durante o desenvolvimento deste projeto estão sendo aplicados conceitos como:

- API REST
- Rotas HTTP
- Controllers
- Separação de responsabilidades
- Modularização
- CommonJS (`require` e `module.exports`)
- Manipulação de objetos e arrays
- Funções e Arrow Functions
- JSON

Novos conceitos serão adicionados conforme o projeto evoluir.

---

## 🔮 Próximas etapas

As próximas etapas do desenvolvimento incluem:

1. Aprimorar os fundamentos de JavaScript utilizados no Back-end.
2. Implementar novos endpoints da API.
3. Configurar o banco de dados MySQL.
4. Implementar operações CRUD.
5. Criar autenticação de usuários.
6. Desenvolver os módulos de estoque e vendas.
7. Criar o Front-end do sistema.
8. Realizar o deploy da aplicação.

---

## 👨‍💻 Autor

**Lucas Goerler Colvero**

Projeto desenvolvido para estudo e construção de portfólio na área de Desenvolvimento de Sistemas.
