var redis = require("redis");

var host = process.env.REDISHOST || "127.0.0.1";
var port = parseInt(process.env.REDISPORT, 10) || 6379;
var password = process.env.REDISPASSWORD || null;

function createRedisClient(db) {
    var options = {
        host: host,
        port: port,
        db: db || 0
    };

    if (password) {
        options.auth_pass = password;
    }

    var client = redis.createClient(options);

    client.on("error", function (err) {
        console.log("Redis error (db " + (db || 0) + "): " + err.message);
    });

    return client;
}

module.exports = { createRedisClient: createRedisClient };
