const Discord=require('discord.js');
const YTDL = require("ytdl-core");
const robot = new Discord.Client();
const { TOKEN, PREFIX } = require('./config');

robot.on('warn', console.warn);

robot.on('error', console.error);

robot.on('ready', () => console.log('Бот Готов'));

robot.on('disconnect',() => console.log('бот отключается, непонятно почему, пробует переподключится'));

robot.on('reconnecting', () => console.log('бот Перезагружается'));

robot.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ');

    if (msg.content.startsWith('neko play')){
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('Nya. onegai connecto voice chanal')
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
        return msg.channel.send('Watashi wa ii connecto wa channal :(');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('Watashi wa chan`neru de hanasu koto ga dekimasen');
        }
        
        try{
            var connection = await voiceChannel.join();
        } catch(error) {

            console.error(`бот не может зайти на канал: ${error}`);
            return msg.channel.send(`Watashi wa chan'neru ni akusesudekinai: ${error}`);
        }

        const dispatcher = connection.playStream(YTDL(args[1]))
        .on('end', () => {
             console.log('Композиция Закончилась!')
             voiceChannel.leave();
         })
         .on('error', error => {
             console.error(error);
         });
         dispatcher.setVolumeLogarithmic(5 / 5);

    }
});


robot.login(TOKEN);
