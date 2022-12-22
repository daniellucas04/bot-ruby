const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('endereco-ip')
    .setDescription('Vamos entender mais sobre endereço IP!'),

    async execute(interaction){
        const ipEmbed1 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 Endereço IP')
        .setDescription('Resumidamente, um **endereço IP (Internet Protocol)** pode ser usado como forma de **identificar** um host em uma rede por um **período de tempo**,\
                         onde esse IP pode ser associado a outro dispositivo **sem ser alterado**.\n\n\
                         Primeiro, vamos dividir precisamente o que é um **endereço IP** no diagrama abaixo:')
        .setImage('https://i.imgur.com/U8hSYuZ.png')
        .setTimestamp();

        const ipEmbed2 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 Endereço IP - 2')
        .setDescription('Um endereço IP é um conjunto de números que são divididos em **quatro octetos**.\
                         **O valor de cada octeto** será resumido como o IP do dispositivo na rede.\n\n\
                         É importante entender que os IP podem **mudar de dispositivo para dispositivo**, mas **não podem estar ativos simultaneamente mais de uma vez na mesma rede.**')
        .setTimestamp();

        const ipEmbed3 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 Endereço IP - 3')
        .setDescription('Os endereços IP seguem um conjunto de padrões conhecidos como **protocolos**.\
                         Esses protocolos são a **espinha dorsal** da rede e forçam muitos dispositivos a se **comunicarem na mesma linguagem**.\n\
                         No entanto, devemos lembrar que os dispositivos podem estar em uma **rede privada e pública**.\
                         Dependendo de onde eles estão, isso determina que **tipo de IP eles possuem**: público ou privado.')
        .setTimestamp();

        const ipEmbed4 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 Endereço IP - 4')
        .setDescription('Um endereço público é usado para **identificar** o dispositivo na **Internet**,\
                         enquanto um endereço privado é usado para **identificar** um dispositivo **entre outros dispositivos**.\n\n\
                         Vamos utilizar a tabela abaixo como exemplo. Aqui temos dois dispositivos em uma rede privada:')
        .setImage('https://i.imgur.com/LobiFD9.png')
        .setTimestamp();

        const ipEmbed5 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 Endereço IP - 5')
        .setDescription('Esses dois dispositivos poderão usar seus endereços IP privados para se **comunicarem**.\n\
                         No entanto, quaisquer **dados enviados para a Internet** de qualquer um desses dispositivos serão **identificados pelo mesmo endereço público**.\n\
                         Este processo de conversão de endereços públicos para endereços privados é conhecido como NAT (Network Address Translation)\n\
                         Os IP públicos são fornecidos pelo seu **Provedor de Serviços de Internet (ou ISP)** por uma taxa mensal.\n\n\
                         *Você pode ver seu IP público acessando o site https://meuip.com.br*')
        .setTimestamp();

        const ipEmbed6 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 IPv4')      
        .setDescription('À medida que mais e mais dispositivos se conectam, fica cada vez **mais difícil** obter um endereço público que ainda **não esteja em uso**.\n\
                         Por exemplo, a Cisco, gigante na indústria no mundo das redes, estimou que haveria aproximadamente **50 bilhões de dispositivos conectados até o final de 2021**. *Confira em: [Cisco., 2021](https://www.cisco.com/c/dam/en_us/about/ac79/docs/innov/IoT_IBSG_0411FINAL.pdf)*\n\n\
                         Até agora discutimos apenas uma versão do esquema de endereçamento IP conhecido como **IPv4**, que usa um sistema de numeração de **2^32 endereços IP (4,29 bilhões)**.')
        .setTimestamp();

        const ipEmbed7 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📒 IPv6')      
        .setDescription('O IPv6 é uma nova iteração do esquema de endereçamento do Protocolo da Internet para ajudar a resolver esse problema.')
        .addFields(
            {
                name: 'Embora pareça mais complicado, possui alguns benefícios: ',
                value: '~ Suporta até **2^128 endereços IP (mais de 340 trilhões)**, resolvendo os problemas de quantidade encontrados no IPv4\n\
                        ~ **Mais eficiente** devido às novas metodologias.\n\n Abaixo podemos comparar o IPv6 com IPv4:'
            },
            {
                name: 'Referências',
                value: 'TryHackMe. Disponível em <https://tryhackme.com/room/whatisnetworking> Acesso em 16/06/2022\nTANENBAUM, Andrew S. Redes de Computadores. Rio de Janeiro: Elsevier, 2003.\n'
            }
        )
        .setImage('https://i.imgur.com/D3zREGx.png')
        .setTimestamp();

        const button1 = new MessageButton()
        .setCustomId('previousbtn')
        .setLabel('Página Anterior')
        .setStyle('DANGER');

        const button2 = new MessageButton()
        .setCustomId('nextbtn')
        .setLabel('Próxima página')
        .setStyle('SUCCESS');

        const pages = [ ipEmbed1, ipEmbed2, ipEmbed3, ipEmbed4, ipEmbed5, ipEmbed6, ipEmbed7 ];
        const buttons = [ button1, button2 ];
        const time = 1000 * 3600;
        paginationEmbed(interaction, pages, buttons, time); 
    }
}