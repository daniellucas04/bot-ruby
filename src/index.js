const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFile = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');

(async () => {
    for(file of functions){
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFile, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env['token']);
})();