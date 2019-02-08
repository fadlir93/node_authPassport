import express from 'express';
import { User, createUser } from '../models/User';
let router =  express.Router();

router.get('/', function(req, res) {
    res.render('pages/users');
});

router.get('/register', function(req, res) {
    res.render('pages/register');
});

router.post('/register', function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let cfm_pwd = req.body.cfm_pwd;

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('cfm_pwd', 'Confirm password is required').notEmpty();
    req.checkBody('cfm_pwd', 'Confirm Password Must Matches With Password').equals('req.body.password');

    let errors = req.validationErrors();
    if(errors){
        res.render('pages/register', {errors: errors});
    } else {
        let user = new User({
            name: name,
            email: email,
            password: password
        });
        createUser(user, function(err, user) {
            if(err) throw err;
            else console.log(user);
        });
        req.flash('success_message','You Have registered, Now Please login');
        res.redirect('login');
    }
});

router.get('/login', function(req, res) {
    res.render('pages/login');
});

router.post('login', function(req, res) {
    res.render('pages/login')
})

export default router;