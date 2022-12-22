const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('topologia')
    .setDescription('Vamos entender sobre as topologias que existem em um ambiente LAN!'),

    async execute(interaction){
        const topologyEmbed1 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 LAN (Local Area Network) Topologias')
        .setDescription('Em referência à rede, quando nos referimos ao termo **"topologia"**, estamos nos referindo ao **design** ou **aparência** da rede em questão, ou seja, como organizar fisicamente os dispositivos. Vamos conhecer **três topologias** neste tópico e discutir **vantagens** e **desvantagens**.\
                         Na internet você pode encontrar *diversos* tipos de topologia.')
        .setTimestamp();

        const topologyEmbed2 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 Topologia em estrela')
        .setDescription('A principal premissa de uma **topologia em estrela** é que os dispositivos sejam conectados **individualmente** por meio de um dispositivo de rede central, como um **switch ou hub**. Essa topologia é a mais encontrada atualmente devido à sua **confiabilidade e escalabilidade** - apesar do **custo**.\n\n\
                         Qualquer informação enviada a um dispositivo nesta topologia é enviada através do **dispositivo central ao qual se conecta**. Vamos explorar algumas dessas **vantagens e desvantagens**.')
        .addFields(
            {
                name: 'Vantagens',
                value: '~ Essa topologia é muito mais escalável por natureza, ou seja, é **fácil adicionar dispositivos à medida que a demanda aumenta**.\n\
                        ~ Geralmente os dispositivos centralizados são **robustos**.'
            },
            {
                name: 'Desvantagens',
                value: '~ Quanto maior a rede mais **manutenção é necessária**. Essa maior dependência da manutenção também pode **dificultar muito a solução de falhas**.\n\
                        ~ Se o hardware centralizado que conecta os dispositivos **falhar**, esses dispositivos **não poderão mais enviar ou receber dados**.'
            }
        )
        .setImage('https://i.imgur.com/ClA0iaa.png')
        .setTimestamp();

        const topologyEmbed3 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 Topologia em barramento')
        .setDescription('Este tipo de conexão depende de uma única conexão que é conhecida como cabo de **backbone**. Esse tipo de topologia é semelhante à **folha de uma árvore** no sentido de que os dispositivos (folhas) se originam de onde os ramos estão neste cabo.\n\
                         Como todos os dados destinados a cada dispositivo **trafegam pelo mesmo cabo**, ele rapidamente fica propenso a se tornar **lento e afunilado** se os dispositivos dentro da topologia estiverem solicitando dados **simultaneamente**.\n\
                         Esse gargalo também resulta em uma **solução de problemas muito difícil**, pois se torna **difícil identificar** qual dispositivo está apresentando problemas com **todos os dados viajando pela mesma rota**. Esta topologia foi utilizada nos primeiros projetos de redes locais e atualmente não é mais utilizada.\n')
        .addFields(
            {
                name: 'Vantagens',
                value: '~ Fácil de configurar.\n\
                        ~ Econômico.'
            },
            {
                name: 'Desvantagens',
                value: '~ Se torna lento rapidamente.\n\
                        ~ Dificuldade em resolver problemas.\n\
                        ~ Se o cabo backbone quebrar, os dispositivos não poderão mais receber ou transmitir dados pelo barramento.'
            }
        )
        .setImage('https://i.imgur.com/olruKXK.png')
        .setTimestamp();

        const topologyEmbed4 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 Topologia em anel')
        .setDescription('Dispositivos como computadores são conectados **diretamente uns aos outros para formar um loop**, o que significa que há **pouco cabeamento necessário e menos dependência de hardware dedicado**, como em uma topologia em estrela.\n\
                         Uma topologia em anel funciona **enviando dados pelo loop até chegar ao dispositivo de destino**, usando outros **dispositivos ao longo do loop para encaminhar os dados**.\n\
                         Curiosamente, um dispositivo só enviará dados recebidos de outro dispositivo nessa topologia se **não tiver nenhum para enviar a si mesmo**.\n\
                         Se o dispositivo tiver dados para enviar, ele enviará seus **próprios dados** antes de enviar dados de **outro dispositivo**.')
        .addFields(
            {
                name: 'Vantagens',
                value: '~ Fácil de solucionar problemas.\n\
                        ~ Menos propensas a gargalos.'
            },
            {
                name: 'Desvantagens',
                value: '~ Não é eficiente para os dados trafegarem.\n\
                        ~ A falha no cabo ou algum dispositivo resulta na quebra de toda a rede.'
            }
        )
        .setImage('https://i.imgur.com/mAlrmFb.png')
        .setTimestamp();

        const topologyEmbed5 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 O que é um Switch?')
        .setDescription('Os switches são **dispositivos dedicados** em uma rede projetados para agregar **vários outros dispositivos, como computadores, impressoras ou qualquer outro dispositivo com capacidade de rede usando o ethernet**.\n\
                         Esses vários dispositivos se **conectam à porta de um switch**.\n\
                         Os switches geralmente são encontrados em **redes maiores**, como empresas, escolas ou redes de tamanho semelhante, onde há **muitos dispositivos para se conectar à rede**.\n\
                         Os switches podem conectar um grande número de dispositivos com portas de 4, 8, 16, 24, 32 e 64 para conectar os dispositivos.')
        .setTimestamp();
        
        const topologyEmbed6 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 O que é um Switch? - 2')
        .setDescription('Os switches são bem mais **eficientes** do que seus equivalentes menores (hubs/repetidores).\n\
                         Os switches mantêm o controle de qual dispositivo está conectado a qual porta. Dessa forma, quando eles recebem um pacote, em vez de **repetir esse pacote para todas as portas** como um hub faria, ele apenas o envia para o destino pretendido, **reduzindo o tráfego da rede**.')
        .setTimestamp();

        const topologyEmbed7 = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setTitle('> 📘 O que é um Roteador?')
        .setDescription('É o trabalho de um roteador conectar redes e passar dados entre elas. Ele faz isso usando **roteamento**.\n\
                         Roteamento é o rótulo dado ao processo de **dados que trafegam pelas redes**. O roteamento envolve a **criação de um caminho entre as redes** para que esses dados possam ser entregues com **sucesso**.')
        .setFields(
            {
                name: 'Referências',
                value: 'TryHackMe. Disponível em <https://tryhackme.com/room/introtolan> Acesso em 16/06/2022\nTANENBAUM, Andrew S. Redes de Computadores. Rio de Janeiro: Elsevier, 2003.\n'
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

        const pages = [ topologyEmbed1, topologyEmbed2, topologyEmbed3, topologyEmbed4, topologyEmbed5, topologyEmbed6, topologyEmbed7 ];
        const buttons = [button1, button2];
        const time = 1000 * 3600;

        paginationEmbed(interaction, pages, buttons, time);
    }
}