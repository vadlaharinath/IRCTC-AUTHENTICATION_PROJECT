const mongoose=require('mongoose');
require('dotenv').config();
// const db_url="mongodb+srv://irctc:irctc@mernprojects.rw1lfxr.mongodb.net/";


const Db_connect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("MongoDb connected sucessfully");
        
    } catch (error) {
        console.log("MongooDb connection failed:",error.message);
    }
    

}
module.exports=Db_connect;