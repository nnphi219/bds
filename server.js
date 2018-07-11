var express = require('express'),
    app = express(),
    port = process.env.PORT || 8082,
    mongoose = require('mongoose'),

    Task = require('./api/models/todoListModel'), //created model loading here
    User = require('./api/models/UserModel'),
    Post = require('./api/models/PostModel'),
    PostType = require('./api/models/PostTypeModel'),
    Page = require('./api/models/PageModel'),

    bodyParser = require('body-parser');
var cors = require('cors');
var hostname = 'http://bat_dong_san-server.localtest.me';

const fileUpload = require('express-fileupload');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bat_dong_san'); 
// mongoose.connect('mongodb://bat_dong_sanadmin:bat_dong_sanadmin@ds115569.mlab.com:15569/bat_dong_san');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use for upload file
app.use(fileUpload());

var todoListRoute = require('./api/routes/todoListRoute'); //importing route
var userRoute = require('./api/routes/UserRoute');
var postRoute = require('./api/routes/PostRoute');
var pageRoute = require('./api/routes/PageRoute');
var postTypeRoute = require('./api/routes/PostTypeRoute');
var commonRoute = require('./api/routes/CommonRoute');
var qcInteractionRoute = require('./api/routes/QCInteractionRoute');

todoListRoute(app);
userRoute(app);
postRoute(app);
postTypeRoute(app);
pageRoute(app);
commonRoute(app);

qcInteractionRoute(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
