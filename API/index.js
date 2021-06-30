const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes');
const AdminRoutes = require('./routes/admin-routes');

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/users/', userRoutes);
app.use('/api/admin/', AdminRoutes);

const userRouter = require(/routes/users);
 app.get('/', (req, res) => {
       res.send(JSON.stringify({ message: "welcome to rest api"}));
     }); 

     const AdminRouter = require(/routes/admin);
     app.post('/',(req, res) => {
           res.send({ message: "post comment!!"});
         });
        


    
    app.listen(port, () => console.log(` app listening on port ${port}!`));
