Teste Técnico para Desenvolvedor Full-Stack DFCOM

## Como rodar

# Importante!

Para rodar o sistema completo você vai precisar ter a seguinte .env: 

```
DATABASE_HOST='database-url-from-mongo'
```

Primeiro instale as dependencias do projeto:

```bash
npm install
# ou
yarn
# ou
pnpm i
# ou
bun i
```

Segundo, rode o projeto com:

```bash
npm run start
# ou
yarn start
# ou
pnpm start
# ou
bun start
```

## Descrição

Este projeto é uma API simples que serve para gerenciar produtos. Abaixo estão as rotas disponíveis e um exemplo do modelo de produto.

## Modelo de Produto

```json
{
  "name": "teste",
  "description": "description teste",
  "price": "10 reais",
  "category": "teste",
  "stock": "10"
}
```

## Rotas

### 1. Obter todos os produtos

- **Rota:** `GET /products`
- **Descrição:** Retorna uma lista de todos os produtos.
- **Exemplo de Requisição:**

  ```bash
  curl -X GET http://localhost:3333/products
  ```

### 2. Criar um novo produto

- **Rota:** `POST /products`
- **Descrição:** Cria um novo produto.
- **Exemplo de Requisição:**

  ```bash
  curl -X POST http://localhost:3333/products \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "novo produto",
    "description": "descrição do novo produto",
    "price": "20 reais",
    "category": "nova categoria",
    "stock": "15"
  }'
  ```

### 3. Atualizar um produto

- **Rota:** `PATCH /products/:id`
- **Descrição:** Atualiza as informações de um produto existente.
- **Exemplo de Requisição:**

  ```bash
  curl -X PATCH http://localhost:3333/products/1 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "produto atualizado",
    "description": "descrição atualizada",
    "price": "25 reais",
    "category": "categoria atualizada",
    "stock": "20"
  }'
  ```

### 4. Obter um produto pelo ID

- **Rota:** `GET /products/:id`
- **Descrição:** Retorna os detalhes de um produto específico pelo seu ID.
- **Exemplo de Requisição:**

  ```bash
  curl -X GET http://localhost:3333/products/1
  ```

### 5. Deletar um produto

- **Rota:** `DELETE /products/:id`
- **Descrição:** Deleta um produto pelo seu ID.
- **Exemplo de Requisição:**

  ```bash
  curl -X DELETE http://localhost:3333/products/1
  ```

---

<a href="https://www.linkedin.com/in/jovimoura10/" target="_blank" align="left" style="font-style: italic;">
  Desenvolvido por John
</a>

<br>

<a href="https://jovimoura.vercel.app/" target="_blank" align="left" style="font-style: italic;">
  Portfolio
</a>
