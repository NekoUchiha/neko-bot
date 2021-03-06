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
          },
          {
            name: "avatar",
            value: "постит аватар выбраного вами пользователя как ссылку так и картинку"
        },
		{
		name: `Социальные 👫`,
		value: `
		**pat**
		ты гладишь выбраного пользователя
		**hug**
		ты обнимаешь выбраного пользователя
		**kiss**
		ты целуешь выбраного пользователя
		**tickle**
		ты щекочешь выбраного пользователя
		**poke**
		ты тыкаешь выбраного пользователя
		**feed**
		ты кормишь выбраного пользователя
		**cuddle**
		ты прижимаешь выбраного пользователя
		**baka**
		ты называешь дурачком выбраного пользователя
		**slap**
		ты бьёшь пощёчену выбраному пользователю
		**smug**
		ты показываешь своё Высокомерие
		`
		},
		{
          name: "serverinfo",
          value: "выводит в чат информыцию о сервере"
        },
		{
          name: "userinfo",
          value: "выводит в чат информыцию о пользователе"
		},
        {
            name: "cat",
            value: "выдаёт рандомную картинку кошечек"
        },
        {
            name: "dog",
            value: "выдаёт рандомную картинку собачек"
        },
        {
            name: `Модули ⚙️`,
            value:`
            **botinstall**
            устанавливает основной модуль бота
            **modulinfo**
            проверяет модули бота установленые на сервере
            **modulinstall class bns**
            устаналивает модуль выдачи ролей Blade and Soul
            `
        },
		{
            name: "say",
            value: "позволяет говорить от имени бота (требуеться установка бота - модуль General)"
        },
		{
            name: "msdel",
            value: "удаляет определённое вами количество сообщений от 2 до 100 (требуеться установка бота - модуль General)"
        },
        {
            name: "ссылки бота 🔗",
            value: `
            **Server**: [https://invite.neko.me/](https://discord.gg/Fd2n2Y8)
             **Bot**: [https://bot.neko.me/](https://discordapp.com/oauth2/authorize?client_id=394476127768412160&scope=bot&permissions=2146958591)
             `
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
