const express = require("express");
const app = express()
app.use(express.json());
const employeeRouter = require("./router/employeeRouter")
const orderRouter = require("./router/orderRouter")

const connection = require("./connection");


connection.connect(function(err) {
    if (err) {
        console.log("error:",err);
    }
    console.log("Connected!");
});

app.get("/users",(req,res)=> {
    console.log("filter text",req.query.filter_text)
    console.log("path param is ",req.params.id)
    console.log("body:",req.body)
    res.send({ message: "list of users"})
})
app.use("/orders",orderRouter);
app.use("/employees",employeeRouter);



app.listen(3000,()=> {
    console.log("App is listening on Port 3000!")
})

function uploadfile(callme) {
    /*
    ......
    */
   callme("file uploaded")
}

uploadfile(function(err) {

})