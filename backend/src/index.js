const express = require('express')
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const path = require('path');
import cors from 'cors'



const app = express();
app.use(cors());

app.use('/uploads',express.static('uploads'));


// Routes
const postsRoutes = require('./routes/api/posts');
const addRoutes = require('./routes/api/add');
const deleteRoutes = require('./routes/api/delete');
const postsemailRoutes = require('./routes/api/email');
const ImageRouter = require('./routes/api/image');



//BodyParser 
app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: "50mb",extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


// Connect to MongoDB

mongoose.connect(MONGO_URI,{useUnifiedTopology: true ,
    useNewUrlParser:true,
    useFindAndModify:false,
})
.then(() => console.log('DB connected'))
.catch((err => console.log(err)))

// User routes
app.use('/',deleteRoutes);
app.use('/',addRoutes);
app.use('/',postsRoutes);
app.use('/',postsemailRoutes);
app.use('/image',ImageRouter);



const PORT = process.env.PORT || 8000;
app.listen(PORT,() => console.log(`Server run at port ${PORT} `));
