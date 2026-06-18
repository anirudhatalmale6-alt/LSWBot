var fchat;
var channel;

var redisHelper = require("../redisHelper");
var client = redisHelper.createRedisClient(3);

module.exports = function (parent, chanName){
	fchat = parent;
	channel = chanName;
	
	var cmd = {};
	client.on("error", function (err) { console.log("Redis error " + err); });
	
	//añadir sendmoney
	
	return cmd;
}

function send(message, data) {
	if (data.publico) {
		fchat.sendMessage(message, channel);
	}
	else {
		fchat.sendPrivMessage(data.character, message);
	}
}