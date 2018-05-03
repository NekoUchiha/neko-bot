exports.run = (client, message, args) => {
    message.delete();
	exports.run = (client, message, args) => {
	const ModerRole = message.guild.roles.find("name", "Moder");
	const AdminRole = message.guild.roles.find("name", "Admin");
		if (message.member.roles.has(AdminRole.id) || message.member.roles.has(ModerRole.id)){
			if (args[2] === undefined) return message.channel.send({embed: {
				"description": ":x: Ошибка синтаксита",
				"color": 15337994,
		}
		});
		if (args[3] === undefined) return message.channel.send({embed: {
			"description": ":x: Ошибка синтаксита",
			"color": 15337994,
	}
	});
	if (args[4] === undefined) return message.channel.send({embed: {
		"description": ":x: Ошибка синтаксита",
		"color": 15337994,
}
});
	var msgSay = message.cleanContent.replace(`neko say ${args[2]} ${args[3]}`, "");
	let ForsceSay = args[3];
	if (ForsceSay === "ev") return message.guild.channels.find("name", args[2]).send("@everyone" + msgSay);
	if (ForsceSay === "one") return message.guild.channels.find("name", args[2]).send(msgSay);
	if ( ForsceSay === "ev" || ForsceSay === "one") {

	}
	else {
		message.channel.send({embed: {
			"description": ":x: Ошибка синтаксита",
			"color": 15337994,
	}
	});
	}
} else {message.channel.send({embed: {
	"description": "------------------------------------------------",
	"color": 15337994,
	"timestamp": new Date(),
	"footer": {
		"icon_url": client.user.avatarURL,
		"text": "© neko"
	},
	"thumbnail": {
		"url": "https://raw.githubusercontent.com/NekoUchiha/neko-bot/master/img/dont.png"
	},
	"fields": [
		{
			"name": "У вас нет Доступа до этой Команды.",
			"value": "------------------------------------------------"
		},
	],
}
}); return;}
}
}
