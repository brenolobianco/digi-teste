# Como  Rodar o Projeto (Backend e Frontend)


## **Backend**
O backend é uma API desenvolvida em Node.js que consome dados de um arquivo JSON e expõe rotas para gerenciar 

### **Como Rodar o Backend Manualmente**

#### **Requisitos**
- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

#### **Passos**
1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. O backend estará rodando em:
   ```
   http://localhost:3001
   ```

### **Como Rodar o Backend com Docker**

#### **Requisitos**
- Docker instalado na sua máquina

#### **Passos**
1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```

2. Suba o container Docker:
   ```bash
   docker compose up.
   ```

3. Inicie o contêiner:
   

4. O backend estará rodando em:
   ```
   http://localhost:3001
   ```


## **Frontend**
O frontend é uma aplicação React que consome as rotas da API do backend.

### **Como Rodar o Frontend Manualmente**

#### **Requisitos**
- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

#### **Passos**
1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. O frontend estará rodando em:
   ```
   http://localhost:3000
   ```

### **Como Rodar o Frontend com Docker**

#### **Requisitos**
- Docker instalado na sua máquina

#### **Passos**
1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Construa a imagem Docker:
   ```bash
   docker compose up
   ```

3. O frontend estará rodando em:
   ```
   http://localhost:3000
   ```








