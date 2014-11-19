

var fortune = require('fortune'),
    server  = fortune();

server.resource('user', {
    username: String,
    email: String,
    age: Number,
    posts: [{ref: 'post', inverse: 'author'}]
});

server.resource('post', {
    content: String,
    title: String,
    date: Date,
    author: 'user'
});

server.listen(1337);
