const Discord=require('discord.js');
const YTDL = require("ytdl-core");
const robot = new Discord.Client();
const { TOKEN, PREFIX } = require('./config');

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function play(content, message){
    var server = servers[message.guild.id];

    server.dipatcher = connection.playStream(YTDL(server.queque[0], {filter: "audioonly"}));

    server.queque.shift();

    server.dipatcher.on("end", function(){
        if (server.queque[0]) play(connection, message);
        else connection.diconnect();
    })
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready",function(){
    console.log("Ready");
});


bot.on("gulidMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " Konnichewa onegai Guesto");

    member.addRole(Guesto);

    member.guild.createRole({
        name: member.user.username,
        colore: generateHex(),
        permissions: []
    }).then(function(role) {
        member.addRole(role);
    });
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "test":
        message.channel.sendMessage("Nya. Watashi wa neko desu! :cat: ");
        break;
        case "removerole":
        message.member.removeRole(Gmember.guild.roles.find("name", "Guesto"));
        break;
        case "deleterole":
        message.member.guild.roles.find("name", "Guesto");
        case "play":
        if (!args[1]){
            message.channel.sendMessage("Nya onegai musik linko");
            return;
        }

        if (!message.member.voiceChannel){
            message.channel.sendMessage("Nya. onegai connecto voice chanal");
            return;
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queque: []
        };

        var server = servers[message.guild.id];
        
        server.queque.push(args[1]);

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
            play(connection, message);
        });
        break;
        case "skip":
        var server = servers[message.guild.id];

        if (server.dipatcher) server.dipatcher.end();
        break;
        case "stop":
        var server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
        default:
        message.channel.sendMessage("Io no sono desu :cat: ");
    }
});

bot.login(TOKEN);
