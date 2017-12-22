const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));

const authRouter = express.Router();

const signUp = require('./api/firebase/');

authRouter.route('/signUp')
    .get(function(req, res){
        var responseJSON = {"Foo": "bar",           
            "firebase": "asdfsa"            
        };                
        //console.log(signUp[0]);
        res.json(responseJSON);
    })
    .post(function(req, res){
        console.log(req.body.fooas);
       res.json(req.body);
    });

app.use('/api', authRouter);
app.listen(port, () => console.log('RESTful App listening on port = '+port));