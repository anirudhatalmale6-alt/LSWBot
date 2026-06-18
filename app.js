var FChatLib = require('fchatlib');
var redisHelper = require("./redisHelper");

var client = redisHelper.createRedisClient(1);
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
