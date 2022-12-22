const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dhcp')
    .setDescription('Vamos entender qual o trabalho do DHCP!'),

    async execute(interaction){
        const dhcpEmbed1 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📕 Protocolo DHCP')
        .setDescription('Para um dispositivo se conectar em uma rede, este precisa de um **endereço IP**. Estes endereços  podem ser atribuídos **manualmente**, inserindo-os fisicamente em um dispositivo, ou **automaticamente  usando um servidor DHCP (Dynamic Host Configuration Protocol)**.\
                         Quando um dispositivo se conecta a uma rede, se ainda não tiver um IP **atribuído manualmente**, ele envia uma solicitação através de uma **mensagem broadcast** para verificar se algum servidor DHCP está na rede.\
                         O servidor DHCP então responde com um **IP que o dispositivo pode usar**. O dispositivo então envia uma resposta **confirmando que deseja o IP oferecido** e, por último, o servidor DHCP envia uma resposta **confirmando que isso foi concluído** e o dispositivo pode começar a usar o IP.')
        .setFields(
            {
                name: 'Referências',
                value: 'TryHackMe. Disponível em <https://tryhackme.com/room/introtolan> Acesso em 16/06/2022\nTANENBAUM, Andrew S. Redes de Computadores. Rio de Janeiro: Elsevier, 2003.\n'
            }
        )
        .setTimestamp();

        interaction.reply({ embeds: [dhcpEmbed1] });
    }
}