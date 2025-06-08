## LLM Assistente de Receitas Brasileiras 🍲

Projeto backend simples em Node.js que consulta um modelo LLM gratuito via API para responder perguntas sobre receitas típicas brasileiras, mantendo um contexto específico para respostas claras, objetivas e práticas.

---

### Funcionalidades

* Recebe perguntas via endpoint HTTP POST.
* Consulta API de modelo LLM (OpenRouter) para gerar respostas contextuais.
* Retorna respostas em formato de texto (Markdown).
---

### Tecnologias

* Node.js
* Express
* Axios
* dotenv

---

### Como usar

1. Clone o projeto:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd llm-assistente
   ```

2. Instale dependências:

   ```bash
   npm install
   ```

3. Configure sua chave de API OpenRouter:

   Crie um arquivo `.env` na raiz do projeto e adicione:

   ```
   OPENROUTER_API_KEY=chave-api
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

5. Faça requisições POST para:

   ```
   http://localhost:3000/api/perguntas
   ```

   Com corpo JSON:

   ```json
   {
     "pergunta": "Como fazer moqueca?"
   }
   ```

6. A resposta gerada pelo modelo no formato JSON:

   ```json
   {
     "resposta": "Aqui vai a resposta formatada..."
   }
   ```
---

7. Ou.. se preferir, pode usar o exemplo HTML simples fornecido para fazer perguntas e exibir respostas no navegador.

---

### Melhorias
* Usar bibliotecas de parsing Markdown para renderizar as respostas com formatação adequada no frontend.
* Ajuste o contexto para especializar o assistente conforme a sua necessidade.
