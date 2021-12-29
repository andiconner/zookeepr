const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data The express.json() method we used takes 
//incoming POST data in the form of JSON and parses it into the req.body JavaScript object
app.use(express.json());
//We added some more middleware to our server and used the express.static() method. 
//The way it works is that we provide a file path to a location in our application 
//(in this case, the public folder) and instruct the server to make these files static resources. 
//This means that all of our front-end code can now be accessed without having a specific server endpoint created for it!
app.use(express.static('public'));

// USe apiRoutes
//This is our way of telling the server that any time a client navigates to <ourhost>/api, 
//the app will use the router we set up in apiRoutes. If / is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});