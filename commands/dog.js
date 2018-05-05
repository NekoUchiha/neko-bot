const randomPuppy = require('random-puppy');

 exports.run = (client, message, args) => {
randomPuppy()
    .then(url => {
    message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		name: "Dogs :dog:",
		icon_url: client.user.avatarURL
	},
	image: {
		url: url
	}
}
});
    })};
