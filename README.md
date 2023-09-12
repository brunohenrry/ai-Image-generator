# 🖼️ Gerador de Imagem com IA

Este é um simples gerador de imagem com inteligência artificial (IA) que permite escolher um modelo de IA e gerar imagens a partir de um prompt de texto.

## Como Usar

1. **Clone o Repositório:**

   ```sh
   https://github.com/brunohenrry/ai-Image-generator
   ```

2. **Configurar a Chave de API**

   Antes de começar, você precisa configurar sua chave de API. Siga as instruções abaixo:

   - Crie um arquivo `.env` na raiz do seu projeto.
   - Dentro do arquivo `.env`, defina sua chave de API da seguinte maneira:

     ```
     YOUR_API_KEY=sua-chave-de-api-aqui
     ```

3. **Instale as Dependências**

   ```sh
   npm install
   ```

4. **Executar o Aplicativo**

   ```sh
   npm start
   ```

5. **Acesse o Aplicativo**

   Abra o seu navegador e vá para [http://localhost:3000](http://localhost:3000) para acessar o gerador de imagem.

6. **Escolha um Modelo de IA**

   No menu suspenso "Modelo de IA", selecione o modelo que deseja usar.

7. **Digite um Prompt de Texto**

   Digite um prompt de texto na caixa de entrada "Prompt de Texto" para guiar a geração de imagens.

8. **Clique em "Gerar"**

   Clique no botão "Gerar" para iniciar o processo de geração de imagens.

9. **Baixe a Imagem**

   Após a geração, clique em uma imagem gerada para selecioná-la e clique no botão "Download" para baixar a imagem.

10. **Repita conforme Necessário**

    Repita o processo para gerar mais imagens conforme desejar.

## Adaptando com Sua Própria API

Você pode adaptar este gerador de imagem com sua própria API. Siga os passos abaixo para fazer isso:

1. **Configure Sua Própria API:**

   Implemente sua própria API de geração de imagens e obtenha uma chave de API.

2. **Substitua a URL da API:**

   No arquivo `script.js`, substitua a URL da API no trecho que faz a chamada:

   ```javascript
   const response = await fetch(
       'https://sua-api.com/endpoint', // Substitua pela URL da sua própria API
       {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${apiKey}`,
           },
           body: JSON.stringify({ inputs: prompt }),
       }
   );
   ```

   Certifique-se de substituir `'https://sua-api.com/endpoint'` pela URL da sua própria API.

3. **Personalize o Aplicativo:**

   Personalize o aplicativo, incluindo o estilo, a interface do usuário e a lógica conforme necessário para se adequar à sua API.

## Modelos de IA Disponíveis

- Modelo 1
- Modelo 2
- Modelo 3

Escolha um modelo na lista suspensa e experimente diferentes modelos para gerar imagens únicas!

## Contribuindo

Sinta-se à vontade para contribuir para este projeto. Você pode abrir problemas (issues) ou enviar pull requests com melhorias e correções.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
