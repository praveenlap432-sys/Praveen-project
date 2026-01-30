const mongoose = require('mongoose')

const connectdb = async ()=> {
    try{
await mongoose.connect('mongodb+srv://praveenlap432_db_user:Chj6Jz2DEIWe4796@cluster0.jozn8my.mongodb.net/Newfullstack')
console.log('mongodb was connected ')
    }
    catch(error){
        console.log(error.message);
        

    }
}
module.exports=connectdb