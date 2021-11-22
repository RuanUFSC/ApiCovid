ORIENTAÇÕES

Na pasta Backend:

Criar arquivo .ENV com as informações abaixo:

DEV_DB_NAME=NOME DO BANCO DE DADOS
DEV_DB_USER=postgres
DEV_DB_PASSWORD=DIGITAR A SENHA DO POSTGRES
DEV_DB_HOST=localhost
DEV_DB_PORT=5432
DEV_PORT=3333

No terminal, usar os seguintes comandos:

npm init -y

npm i cors dotenv express express-validator pg sequelize uuid

npm i nodemon -D 

npm install --save multer


npm install crypto-js



No arquivo package.json adicionar o seguinte script

	"dev": "nodemon server.js"

npm run dev


Na pasta Frontend:

npx create-react-app covid .

Na pasta covid, apagar as pastas src e public e substituir pelas do Github

cd covid
npm install react-router-dom@5.2.0
cd covid
npm install axios
npm start
