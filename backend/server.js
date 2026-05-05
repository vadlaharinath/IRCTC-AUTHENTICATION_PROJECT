const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
app.use(express.json());
const Db_connect = require("../backend/db");
const loginSchema = require("./schema/LoginSchema");
const signupSchema = require("./schema/SignupSchema");
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const SignupSchema = require('./schema/SignupSchema');

Db_connect();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get("/login", (req, res) => {
    res.send("harinath");
})
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const dbUser = await signupSchema.findOne({ username:username });
        const isMatch = bcrypt.compare(password, dbUser.password);
        console.log("password", password);
        console.log("dbUser.password", dbUser.password);

        if (!dbUser) {
            return res.status(404).json({ message: "user not found" });
        }
        if (isMatch) {
            const token = jwt.sign(
                {
                    userId: dbUser.id,
                    username: dbUser.username,
                },
                process.env.secretKey,
                {
                    expiresIn: '1h',
                }
            );
            res.send({"access_token":token});
        }

        if(username===dbUser.username){
            return res.json({email,password,message:"user fetch sucessfully"});
        }else{
            return res.json({message:"Invalid username details"});
        }

    } catch (error) {
        res.status(500).send("Server error");
    }


});

app.post("/signup", async (req, res) => {
    const { username, fullname, password, email, country, mobile } = req.body;
    // res.json({userName,fullname,password,email,country,mobile,message:"successfully data sended"});
    console.log({ username: "username", password: "password" });
    const userCreation = await signupSchema.create({
        username, fullname, password, email, country, mobile
    });
    await userCreation.save();
    res.status(201).json({ message: "userDetails created successfully" });

})


app.get("/bookings",async (req,res)=>{

    try {
        const databaseUsers=await SignupSchema.find({});
    console.log(databaseUsers);
    return res.send({message:"data fetch sucessfully",databaseUsers});
        
    } catch (error) {
        console.log("error",error.message);
        
    }
    

})

app.listen(8000, (req, res) => {
    console.log("server running on port number 8000");
});