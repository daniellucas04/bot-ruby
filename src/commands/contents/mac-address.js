const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('endereco-mac')
    .setDescription('Vamos entender mais sobre endereço MAC!'),

    async execute(interaction){
        const macEmbed1 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📙 Endereço MAC')
        .setDescription('Todos os dispositivos em uma rede terão uma **interface de rede física** (cabeada ou wireless), que é uma **placa de microchip** encontrada na placa-mãe do dispositivo.\n\
                         Essa interface de rede recebe um **endereço exclusivo** na fábrica em que foi construída, chamado de **endereço MAC (Media Access Control)**.\n')
        .setTimestamp();

        const macEmbed2 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📙 Endereço MAC - 2')
        .setDescription('O endereço MAC é um número **hexadecimal de doze caracteres dividido em dois** e **separado por dois pontos** - considerados separadores.\n\
                         Por exemplo: \n```a4:c3:f0:85:ac:2d```\n Os primeiros seis caracteres **representam a empresa que fez a interface de rede** e os últimos seis são um **número único**.\n\n\
                         > `Empresa que produziu: a4:c3:f0`\n> `Número único: 85:ac:2d`\n')
        .addFields(
            {
                name: '\nPara identificar seu endereço MAC no Windows: ',
                value: '```ipconfig```',
            },
            {
                name: 'Para identificar seu endereço MAC no Linux: ',
                value: '```ip addr```'
            },
            {
                name: 'Referências',
                value: 'TryHackMe. Disponível em <https://tryhackme.com/room/whatisnetworking> Acesso em 16/06/2022\nTANENBAUM, Andrew S. Redes de Computadores. Rio de Janeiro: Elsevier, 2003.\n'
            }
        )
        .setTimestamp();

        const button1 = new MessageButton()
        .setCustomId('previousbtn')
        .setLabel('Página Anterior')
        .setStyle('DANGER');

        const button2 = new MessageButton()
        .setCustomId('nextbtn')
        .setLabel('Próxima página')
        .setStyle('SUCCESS');

        const pages = [ macEmbed1, macEmbed2 ];
        const buttons = [ button1, button2 ];
        const time = 1000 * 3600;
        paginationEmbed(interaction, pages, buttons, time);
    }
}