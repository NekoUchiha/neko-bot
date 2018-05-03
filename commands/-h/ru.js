const Discord = require('discord.js');

exports.run = (client, message, args, chala, langu) => {
    message.channel.send({embed: {
        color: 0xe20808,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "neko -h ru info",
        description: "Список комманд на русском языке",
        fields: [{
            name: "help",
            value: "основная информационая комманда."
          },
          {
            name: "-h neko",
            value: "описание всех команд, на уникальном неко языке."
          },
          {
            name: "-h ru",
            value: "описание всех команд, на русском языке."
          },
          {
            name: "-h eng",
            value: "описание всех команд, на английском языке."
          },
          {
            name: "invite",
            value: "вы можете добавить Неко бота к себе на сервер"
          },
          {
            name: "neko",
            value: "выдаёт рандомную картинку некочек"
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