Projeto final do bootcamp Back-end - Porto Digital em parceria com o projeto MINAS.

Num mundo tão vasto quanto o da Tecnologia, os espaços, infelizmente, ainda são dominados por um padrão hegemônico: Homem, branco, heterossexual e cis. 

A Reprograma, assim como diversas outras iniciativas, vêm trabalhando para que esse padrão mude e toda a mudança, leva tempo, tem custos financeiros, emocionais e psicológicos. 

Nada melhor do que encontrar seus pares, ensinando aquilo que você quer aprender. 

Por esta razão, pensei no projeto Mulheres Mentoras. 

Neste semestre, a Reprograma recebeu mais de 2000 inscrições e pôde contemplar, 140 mulheres. 
E é pensando nestas outras 1860 mulheres, que o Mulheres Mentoras passa a existir. 
Para que nós, a medida de nossa disponibilidade, possamos mentorar outras mulheres, que queiram ingressar na área, diminuir o gap de gênero e acima de tudo, fazer um acompanhamento que entende as dificuldades, assim como nós, da turma On7, pudemos nos ajudar, compreendendo as dificuldades umas das outras. 

-

Para isto, criei um banco de dados de pessoas que se interessem em mentorar ou em ser mentorada. 
As pessoas mentoras ou mentorandas, se cadastram no sistema fornecendo nome, email e se quer mentorar ou ser mentorada.

Enquanto projeto em início, serão disponibilizadas três áreas de ensino: Lógica de Programação, Git e Github e JavaScript.
  

    TECNOLOGIAS UTILIZADAS: 
        - MongoDB Atlas
        - Node.js
        - Git/Github
        - NPM
        - Postman
        - Heroku - [https://mulheres-mentoras.herokuapp.com/]

 
    DEPENDÊNCIAS UTILIZADAS:
        - Mongoose
        - Express
        - Nodemon
        - Dotenv-safe


INSTRUÇÕES PARA A UTILIZAÇÃO DA API

 - Para utilizar esta API é necessária a instalação das tecnologias NodeJS e MongoDB.

    Instalação: 
        1. Faça um Fork desse repositório para seu GitHub;
        2. Clone seu repositório para seu ambiente local;
        3. Abra o console e digite os comandos:

           $ npm init 
           $ npm install

    Inicialiazação:
           $ npm start


CONTRIBUINDO COM O PROJETO

1. Faça o fork do projeto
2. Crie uma branch para sua modificação (git checkout -b feature/any)
3. Faça o commit (git commit -am 'Add some any')
4. Push (git push origin feature/any)
5. Crie um novo Pull Request

FEATURES E ROTAS

Esta API está sendo executada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário utlizar `http://localhost:8080/` antes dos endpoints de requisição.

Manipulando registros (Usuária)

| Feature | Método | Rota |
|---------|--------|------|
| Lista de todas as mentoras | GET | '/mentoras' |
| Lista de todas as mentoras por área | GET | '/mentoras/area/<AREA_DE_APRENDIZADO_DESEJADO>' |
| Filtro de mentoras disponíveis para mentorar | GET | 'mentoras/disponiveis' |

| Feature | Método | Rota |
|---------|--------|------|
| Lista de todas as mentorandas | GET | '/mentorandas' |
| Lista de todas as mentorandas por área | GET | '/mentorandas/area/<AREA_DE_APRENDIZADO_DESEJADO>' |

Manipulando registros (administradora)

| Feature | Método | Rota |
|---------|--------|------|
| Cadastro de mentora | POST | '/mentoras' |
| Atualização de cadastro de mentoras | PUT | '/mentoras/id' |
| Atualização de 'valor' de mentoras | PATCH | '/mentoras/id' |
| Remoção de mentoras | DELETE | '/mentoras/id' |

| Cadastro de mentoranda | POST | '/mentorandas' |
| Atualização de cadastro de mentorandas | PUT | '/mentorandas/id' |
| Atualização de 'valor' de mentorandas | PATCH | '/mentorandas/id' |
| Remoção de mentoras | DELETE | '/mentorandas/id' |



