FROM cypress/included:latest

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "npx cypress run"]
