#Télechargement de l'image NodeJs
FROM node

#Définition du répertoire de travail à l'intérieur du conteneur 
WORKDIR /app 

#Copie des fichiers package.json et package-lock.json (si présent) du répertoire de construction vers le répertoire de destination (WORKDIR)
COPY package*.json ./

#installation des dépendances Nodejs avant le build
RUN npm install

#copie de l'ensemble du projet vers le repertoire de destination
COPY . . 

# Exposer le port 3000 du conteneur
EXPOSE 3000

CMD ["npm", "start"]
