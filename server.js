const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));

const appRouter = express.Router();

const fireBaseApp = require('./api/firebase/');

appRouter.route('/signUp')
    .get(function (req, res) {
        res.json("Hi SignUp Page  Everyone");
    })
    .post(function (req, res) {
        try {
            console.log(req.body);
            const email = req.body.User.email;
            const password = req.body.User.password;
            fireBaseApp.auth.init(fireBaseApp.firebaseConfigured);
            fireBaseApp.auth.handleSignUp(email, password);
            res.json(req.body);
        } catch (e) {
            res.json(e);
        }
    });

appRouter.route('/toggleSignIn')
    .get(function (req, res) {
        res.json("Hi SignIn Page Everyone");
    })
    .post(function (req, res) {
        try {
            console.log(req.body);
            const email = req.body.User.email;
            const password = req.body.User.password;
            fireBaseApp.auth.init(fireBaseApp.firebaseConfigured);
            fireBaseApp.auth.toggleSignIn(email, password);
            res.json(req.body);
        } catch (e) {
            res.json(e);
        }
    });

app.use('/api', appRouter);
app.listen(port, () => console.log('RESTful App listening on port = ' + port));