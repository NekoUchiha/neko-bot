exports.run = (client, message, args, chala, langu) => {
    message.channel.send({embed: {
        color: 0xe20808,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: "neko -h eng info",
        description: "List of commands in English",
        fields: [{
            name: "help",
            value: "basic information command."
            },
            {
            name: "-h neko",
            value: "description of all commands, in a unique language."
            },
            {
            name: "-h ru",
            value: "description of all commands, in Russian."
            },
            {
            name: "-h eng",
            value: "description of all commands, in English."
            },
            {
            name: "invite",
            value: "ivite neko bot for your server."
        },
        {
          name: "neko",
          value: "post random neko image"
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "© neko"
        }
        }
    });
}