const NekoJS = require("neko.js");

exports.run = (client, message, args) => {
	client.getRandomColor = () => {

		let letters = '0123456789';
		let color = '';
		for (let i = 0; i < 7; i++) {
			color += letters[Math.floor(Math.random() * 10)];
		}
	
		return color;
	};
	let nekoclient = new NekoJS.Client();
	nekoclient.neko().then(function(nekoImg){
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		name: "Nekos \\o/",
		icon_url: client.user.avatarURL
	},
	image: {
		url: nekoImg.neko
	}
}
});
});
}