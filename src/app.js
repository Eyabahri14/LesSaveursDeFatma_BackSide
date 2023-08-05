const express = require('express');
const connection = require('../database/db');
const helmet = require("helmet");
const auth = require("./routes/authRoute");
const admin = require("./routes/adminRoute");
const user = require("./routes/userRoute");
const PORT = process.env.PORT || 3000

connection.getConnections();
const cors=require("cors");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//secure http
app.use(helmet());

// socket connection
var server = require('http').Server(app);
var io = require('socket.io')(server,
    
    
    {
    cors: {
      origin:'*',
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  }
  
  ); 
app.set('io',io);
io.on('connection', socket => {
    console.log("new  sockeet connection...");
    socket.emit("test event","hey eya");
});

io.listen(9000)

app.use("/", auth);
app.use("/", admin);
app.use("/",user);

app.get('/',(req,res)=> {
  res.status(200).json({data:"Its fucking working!"});
})


module.exports = app;
