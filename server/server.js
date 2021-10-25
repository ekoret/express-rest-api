const express = require('express');
const app = express();
const users = require('./data/users'); //This data should be received from a REST api or database

const {
    customMiddleware,
    handleJSONpayload,
    handleURLencoded,
    handleCors
} = require('./middleware/middleware.js');

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${3000}`));


/**
 * Notes on middleware in ./middleware/middleware.js
 */
app.use(handleCors());
app.use(handleURLencoded(express));
app.use(handleJSONpayload(express));
app.use(customMiddleware);


/**
 * Routes
 */
/**
 * Get a single user route
 */
app.get('/api/users/:id', (req, res) => {
    console.log('\nGET request made to a specific users endpoint');

    console.log({
        params: req.params
    });
    
    const id = parseInt(req.params.id);

    const user = users.filter(user => user.id === id);

    /** If the data is an array and if user is not null or undefined, if its not empty,
     * and if it has the id property
     */
    if (Array.isArray(user) && user?.[0]?.id) {
        res.status(200).json({
            message: 'Specific user endpoint hit!',
            apiPath: req.url,
            params: req.params,
            data: user
        });
    } else {
        res.status(404).json({
            message: 'Could not find specificed user!',
            apiPath: req.url,
            params: req.params,
            data: user
        });
    }
});

/**
 * Get all users route
 */
app.get('/api/users', (req, res) => {
    console.log('\nGET request made to users endpoint\n');

    res.status(200).json({
        message: 'User endpoint hit!',
        apiPath: req.url,
        data: users
    });
});

/**
 * Any routes that don't exist will be caught here
 */
app.all('*', (req, res) => {
    console.log('\nCatch all endpoint hit!\n');
    res.status(404).json({
        message: 'No endpoint found in API!',
        apiPath: req.url
    });
});