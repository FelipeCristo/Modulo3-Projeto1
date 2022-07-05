const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/listas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connect!'))
    .catch((error) => console.log(`MongoDB Did not Connect!, error:${error}`));
};

module.exports = connectToDatabase;
 