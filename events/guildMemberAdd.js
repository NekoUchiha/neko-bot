exports.run = async(client, member) => {
    const Discord = require('discord.js');
    const newUsers = []; 

	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'chat');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
    channel.send(`Welcomu to serveru, **${member}** onegai pleito`);
    // Create an event listener for new guild members
}