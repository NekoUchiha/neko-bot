const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const count = args[2] 
message.delete();
	const ModerRole = message.guild.roles.find("name", "Moder");
	const AdminRole = message.guild.roles.find("name", "Admin");
		if (message.member.roles.has(AdminRole.id) || message.member.roles.has(ModerRole.id)){
	async function purge() {

		if(isNaN(count)){
			message.channel.send('Plisu numeru onegai \n Use: neko msdel <amount>');
			return;
		}

		const fefched = await message.channel.fetchMessages({limit: count});
		console.log(fefched.size + ' mesng found, deleting....');

		message.channel.bulkDelete(fefched)
		.catch(error => message.channel.send(`Error: ${error}`));
		message.channel.send(":wastebasket:" + " " + " | " + " **" + message.author.username + "**, " + fefched.size + ' messunge deletu onegai');
		setTimeout(function() {
			message.channel.send("delete");
			message.channel.bulkDelete(2);
		}, 3000)
	}
	purge();
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