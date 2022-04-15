module.exports.signIn = function(req, res){
    return res.render('form', {
        title: "login"
    });
}
module.exports.signUp = function(req, res){
    return res.render('form', {
        title: "register"
    });
}
module.exports.signOut = function (req, res){
    return res.send('<h1>Logout</h1>');
}