const User = require('../models/user');
const md5 = require('md5');

module.exports.create = async function(req, res){
    if(req.body.password!=req.body.confirm_password){
        // req.flash('error','Password and confirm password doesnot match');
        res.redirect('back');
    }else{
        try{
            let user = await User.findOne({email: req.body.email});
            if(!user){
                // req.flash('success', 'User Registration Successful');
                console.log("User Registration Successful");
                await User.create({name: req.body.name, email: req.body.email, password: md5(req.body.password)});
                res.redirect('signin');
            }else{
                // req.flash('error', 'User exits try logging In');
                console.log("User exits try logging In");
                return res.redirect('signin');
            }
        }catch(err){
            // req.flash('error', err);
            console.log("Error in creating User", err);
            return res.redirect('back');
        }
    }
    
}
module.exports.createSession = function(req, res){
    return res.redirect('/');
}
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signin', {
        title: "Sign In"
    });
}
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signup', {
        title: "Sign Up"
    });
}
module.exports.signOut = function (req, res){
    req.logout();
    // req.flash('success', 'Logged Out Successfully');
    return res.redirect('/users/signin');
}