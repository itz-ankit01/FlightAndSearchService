const express = require('express');
const {PORT} = require('./config/serverConfig')
const setupAndStartServer = async () => {

    // create the express Object

    const app = express();

    app.listen(PORT, () => {
        console.log(`server at the PORT ${PORT}`);
    })
}

setupAndStartServer();