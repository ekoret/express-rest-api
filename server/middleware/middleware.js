const cors = require('cors');

/**
 * App.use() is used to apply middleware to route.
 * If app.use() comes before all routes, the middleware will be applied to all routes.
 * 
 * Examples:
 * Add built-in middleware to handle urlencoded data (form data).
 */
module.exports.handleURLencoded = (express) => {
    console.log('handleURLencoded middleware loaded!');
    return express.urlencoded({
        extended: false
    });
};


/**
 * Middleware for hitting endpoints at different domains.
 * 
 * CORS: Cross Origin Resource Sharing
 * 
 * For example, if you are at google.ca and make a fetch call to localhost:3000,
 * you will receive a CORS error. Setting up this third-party middleware will allow
 * us to make fetch calls to this API from a different domain.
 * 
 * Sometimes we don't want our API to be publiclly available to everyone, so we can set
 * an array of domains as a whitelist to the CORS options object.
 */


module.exports.handleCors = () => {
//     const corsWhitelist = ['localhost:3000', 'http://localhost:3000', 'https://localhost:3000'];
//     const corsOptions = {
//     origin: (origin, callback) => {
//         /**
//          * Origin contains where the request was from. So we can check if the origin url is in the whitelist.
//          */
//         console.log(origin);
//         if (corsWhitelist.indexOf(origin) !== -1) { //If the origin is found in the whitelist
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     optionsSuccessStatus: 200
// }
    console.log('handleCors middleware loaded!');
    return cors();
    
}

/**
 * Custom middleware.
 * Built-in middleware does not need to call next() as it's already included in the built-in middleware
 * Because we are creating custom middleware, we will need to call next().
 */
module.exports.customMiddleware = (req, res, next) => {
    console.log('customMiddleware middleware loaded!');
    console.log({
        'message': 'Custom middleware ran!',
        'req.method': req.method,
        'req.path': req.path
    });
    next();
};

/**
 * Add built-in middleware to handle json data.
 * Parses incoming requests with JSON payloads and is based on body-parser.
 * If the data we're receiving is going to be JSON, use this middleware to parse the
 * body of the request.
 */
module.exports.handleJSONpayload = (express) => {
    console.log('handleJSONpayload middleware loaded!');
    return express.json();
}


/**
 * If you wanted to send static files such as css and js files, use this middleware.
 */
// app.use(express.static(path.join(__dirname, '/public')));