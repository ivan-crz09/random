const config = {
    "production": {
        apiUrl: "http://randomapi-env.hympu3cp2s.us-east-1.elasticbeanstalk.com"
    },
    "development": {
        apiUrl: "http://randomapi-env.hympu3cp2s.us-east-1.elasticbeanstalk.com"
    }
}


module.exports = function () {
    switch (process.env.NODE_ENV) {
        case "production":
            return config.production;
            break;
        case "development":
            return config.development;
            break;
        default: // :: Production as default
            return config.development;
            break;
    }
}();
