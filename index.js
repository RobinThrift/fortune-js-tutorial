

var fortune = require('fortune'),
    server  = fortune();

server.resource('user', {
    username: String,
    email: String,
    age: Number
});

server.listen(1337);
