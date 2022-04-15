module.exports.login = function(req, res){
    return res.send('<h1>Login Page</h1>');
}
module.exports.register = function(req, res){
    return res.send('<h1>Register Page</h1>');
}
module.exports.logout = function (req, res){
    return res.send('<h1>Logout</h1>');
}