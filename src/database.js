const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGODB, {
            useUnifiedTopology: true 
        });
        console.log('Database is connect!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDatabase;