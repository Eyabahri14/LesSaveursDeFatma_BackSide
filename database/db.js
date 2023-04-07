const mongoose = require('mongoose');
require('dotenv').config()

exports.getConnections = () => mongoose.connect(process.env.URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));