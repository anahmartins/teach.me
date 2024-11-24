# Teach Me

**Teach Me** é uma ferramenta de estudo individualizada que utiliza inteligência artificial para gerar perguntas com base em um tema escolhido pelo usuário. Desenvolvido como parte de um mini curso de programação da **Cubos Academy**, o projeto combina habilidades de desenvolvimento web e IA, proporcionando uma experiência de aprendizado interativa e prática.

## 🚀 Funcionalidades

- **Geração de perguntas com IA**: Escolha um tema e receba perguntas geradas automaticamente para aprimorar seus estudos.
- **Histórico de temas estudados**: Revise tópicos previamente trabalhados, consolidando ainda mais o aprendizado.
- **Interface amigável**: Uma interface simples e responsiva construída com HTML, CSS e React.

## 🛠️ Tecnologias Utilizadas

- **Front-end**: 
  - HTML5;
  - CSS3;
  - React.js.
    
- **Back-end**:
  - Integração com APIs de IA para geração de perguntas.
    
- **Outras ferramentas**:
  - Gerenciamento de estado com React useState;
  - LocalStorage para o armazenamento do histórico.

## 📸 Demonstração
![imagem do projeto](https://github.com/anahmartins/teach.me/blob/main/src/assets/CT%20-%20Teach.me.jpeg?raw=true)

## 🖥️ Como Executar o Projeto

Siga os passos abaixo para executar o **Teach Me** em sua máquina local:

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos para execução

1. **Clone este repositório** 
   No terminal, execute o comando abaixo para clonar o projeto:
   
   ```bash
   git clone https://github.com/anahmartins/teach-me.git

3. **Acesse o diretório do projeto**
   Navegue até a pasta do projeto:

   ```bash
   cd teach-me

5. **Instale as dependências**
  Utilize o npm para instalar as dependências do projeto:

   ```bash
   npm install
    ```

4. **Adicione a uma chave própria da OpenAI**
  No arquivo **openai.ts** no diretório ./src/api/openai.ts substitua "``MINHA CHEVA OPENAI``" pela sua chave da API da    OpenAI:

    ```bash
    apiKey: "MINHA CHAVE OPENAI"
    ```

5. **Inicie o servidor local**
  Execute o seguinte comando para iniciar a aplicação:

    ```bash
    npm run dev
    ```
    
## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
