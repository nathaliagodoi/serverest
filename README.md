# 🚀 Automação de Testes - ServeRest com Cypress

Projeto de automação de testes E2E (UI) e API para a aplicação [ServeRest](https://serverest.dev), utilizando Cypress e JavaScript.

## 📋 Índice
- [⚙️ Pré-requisitos](#-pré-requisitos)
- [🛠 Instalação](#-instalação)
- [▶️ Execução dos Testes](#-execução-dos-testes)
- [📂 Estrutura de Diretórios](#-estrutura-de-diretórios)



## ⚙️ Pré-requisitos
- Node.js v18+
- npm v9+
- Cypress v12+
- Acesso a:
  - Frontend: `https://front.serverest.dev`
  - API: `https://serverest.dev`

## 🛠 Instalação
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/serverest-cypress-automation.git

# Instalar dependências
npm install

# Instalar Cypress
npm install cypress --save-dev
```

## ▶️ Execução dos Testes
```bash
# Executar testes em modo interativo
npm run open:dev

# Executar todos os testes headless
npm run headless:dev

# Executar apenas os testes de API
npm run api:dev

# Executar apenas os testes de Frontend
npm run ui:dev
```

## 📂 Estrutura de Diretórios
```bash
├── cypress/
│   ├── config/             # Configurações de ambiente
│   ├── e2e/
│   │   ├── backend/        # Testes de API
│   │   └── frontend/       # Testes de Frontend
│   ├── factories/          # Dados de teste
│   ├── pages/              # Page Objects
│   └── support/            # Suport API e helpers
├── cypress.config.js
├── README.md
├── package.json
└── package-lock.json
```

