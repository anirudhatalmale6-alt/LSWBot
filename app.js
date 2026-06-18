var FChatLib = require('fchatlib');
var redis = require("redis");

var client = redis.createClient(
    process.env.REDISPORT,
    process.env.REDISHOST,
    {
        auth_pass: process.env.REDISPASSWORD,
        db: 1
    }
);

client.on("error", function (err) { });
var saveDB = setInterval(function () { client.save(); }, 60000);

var options = {
	username: "dash", password: "meow1234nyan",
	character: "Bot Announcer", master: "Kiara Simons",
	room: "adh-38a0e2eb3080d93df777", cname: "Kenia Bot Nyan", cversion: "One point meow",
	debug: "false", discord: "false", rooms : "normal"
};

//debug: "false", discord: "true", rooms : "normal"
//room: "adh-5b5393f9514b3c25ab71"
var myFchatBot = new FChatLib(options);
console.log("ok");
