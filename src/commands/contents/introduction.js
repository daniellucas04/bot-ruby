const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('introducao')
        .setDescription('Introduzindo rede de computadores.'),

    async execute(interaction) {
        const introductionEmbed1 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Vamos começar pelo básico')
            .setDescription('Rede de computadores é a interconexão de **computadores** e **equipamentos** que usam fios ou ondas de rádio para **compartilhar dados e recursos**.')
            .addFields(
                {
                    name: 'Objetivos de rede de computadores',
                    value: '~ Compartilhamento de recursos\n\
                            ~ Acesso a informações remotas\n\
                            ~ Comunicação entre pessoas'
                }
            )
            .setTimestamp();

        const introductionEmbed2 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Conexão dos dispositivos')
            .setDescription('Os dispositivos só conseguem se conectar através de **enlaces**.')
            .addFields(
                {
                    name: 'Quais os tipos de enlaces?',
                    value: "Existem '**enlaces com fio**' e '**enlaces sem fio**'. Dependendo do tipo de conexão esses enlaces possuem diferentes capacidades.",
                },
                {
                    name: 'Quais são os tipos de conexão?',
                    value: "Existem conexões de '**ponto a ponto**' e de '**multiponto**'.\n\n\
                        **Ponto a Ponto**: Possui um enlace dedicado. Precisa de toda a capacidade de enlace para a transmissão entre os dois pontos.\n\n\
                        **Multiponto**: Possui o enlace compartilhado entre dois ou mais dispositivos. A capacidade do enlace é dividida para as transmissões.\n\n",
                }
            )
            .setTimestamp();

        const introductionEmbed3 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Classificação de redes')
            .setDescription('Dentre as classificações de redes, existem alguns padrões que são propostos de acordo com a área geográfica.')
            .addFields(
                {
                    name: 'Rede de área alargada - WAN (Wide Area Network)',
                    value: "A WAN têm a dimensão correspondente a países, continentes ou vários continentes. São constituídas por múltiplas redes interligadas, por exemplo LANs e MANs. O exemplo mais prático que se pode ter é a '**internet**'.",
                },
                {
                    name: 'Rede Local - LAN (Local Area Network)',
                    value: "A LAN caracteriza-se por ocupar uma área limitada, no máximo um edifício, ou alguns edifícios próximos, muitas vezes se limitam a até uma única sala. Um exemplo que se pode ter é o '**ethernet**'.",
                },
                {
                    name: 'Rede local sem fios - WLAN (Wireless Local Area Network)',
                    value: "Hoje em dia a utilização de redes locais sem fios tem crescido, conhecidas como WLAN. São bem adequadas para situações que exigem mobilidade. Um exemplo pode ser um dispositivo portátil que circula nas mãos de um operador de supermercado. São redes flexíveis e de fácil instalação.",
                },
            )
            .setTimestamp();

        const introductionEmbed4 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Classificação de redes')
            .addFields(
                {
                    name: 'Rede metropolitana - MAN (Metropolitan Area Network)',
                    value: "A MAN é basicamente uma WAN com dimensão reduzida, geralmente também assegura a interligação de redes locais. A área abrangida corresponde no máximo a uma cidade.",
                },
                {
                    name: 'Rede Pessoal - PAN (Personal Area Network)',
                    value: "A PAN utiliza comunicação sem fios e possui sua dimensão reduzida, o alcance se limita a algumas dezenas de metros.",
                },
                {
                    name: 'Rede de fibra óptica',
                    value: "Trata-se de redes que utilizam sinais luminosos para transmitir informações através de fibras condutoras de luz. Possui uma comunicação mais ágil.  ",
                },
            )
            .setTimestamp();

        const introductionEmbed5 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Internet')
            .setDescription('A Internet é composta de muitas pequenas redes, **todas unidas**. Essas pequenas redes são chamadas de **redes privadas**, onde as redes que conectam essas pequenas redes são chamadas de redes **públicas**.')
            .addFields(
                {
                    name: 'Uma rede pode ser de dois tipos: ',
                    value: '~ Uma rede privada.\n\
                            ~ Uma rede pública.'
                }
            )
            .setTimestamp();

        const introductionEmbed6 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Internet - 2')
            .setDescription("A maioria dos usuários se conecta à Internet usando um **Provedor de Acesso à Internet** (Internet Service Provider - ISP) da sua cidade.\n\
                            Os ISPs locais fornecem serviços diretamente ao usuário, por exemplo, conexão à Internet, conta de email, espaço para a criação de site. Pode-se haver conexão a **ISPs regionais** ou diretamente a **ISPs nacionais**.\n\n\
                            **ISPs regionais (ValeNet, Logtel Telecom, Brasilnet, Futuronet)**: estão conectadas aos IPSs nacionais.\n\n\
                            **ISPs nacionais (NET Virtua, Oi, Vivo, GVT)**: estão conectadas a ISPs internacionais **(American Online, Asia Online)**.")
            .setTimestamp();

        const introductionEmbed7 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Identificando dispositivos em uma rede')
            .setDescription('Para comunicar e manter a ordem, os dispositivos devem ser identificadores e identificáveis em uma rede.')
            .addFields(
                {
                    name: 'Os dispositivos de uma rede são muito semelhantes aos humanos no fato de termos duas maneiras de ser identificados: ',
                    value: '~ Nosso nome.\n\
                            ~ Nossas impressões digitais.'
                }
            )
            .setTimestamp();
    
        const introductionEmbed8 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Identificando dispositivos em uma rede - 2')
            .setDescription('Podemos mudar nosso *nome*, no entanto, não podemos mudar nossas *impressões digitais*.\
                             Todo ser humano tem um conjunto individual de impressões digitais, o que significa que, mesmo que mudem de nome, *ainda há uma identidade por trás dele*.\n')
            .addFields(
                {
                    name: 'Os dispositivos têm a mesma coisa: dois meios de identificação, sendo um deles permeável.',
                    value: '~ Um endereço IP (Internet Protocol)\n\
                            ~ Um endereço MAC (Media Access Control)'
                }
            )
            .setTimestamp();

        const introductionEmbed9 = new MessageEmbed()
            .setColor('NOT_QUITE_BLACK')
            .setTitle('> 📚 Protocolo de comunicação')
            .setDescription("Um protocolo representa conjunto de regras que governa uma comunicação, incluindo formato, sequência de mensagens, e ações tomadas ao enviar ou receber uma mensagem.\
                            Deve-se definir: **o que é comunicado, como é comunicado e quando será comunicado**\n")
            .addFields(
                {
                    name: 'Protocolo de rede: ',
                    value: 'Em uma rede, os protocolos permitem a comunicação de máquinas e equipamentos de interconexão no lugar de humanos. Computadores devem implementar o mesmo protocolo para se comunicarem. Porém na realidade, diferentes protocolos colaboram entre si.'
                },
                {
                    name: 'Referências',
                    value: 'TryHackMe. Disponível em <https://tryhackme.com/room/whatisnetworking> Acesso em 16/06/2022\nTANENBAUM, Andrew S. Redes de Computadores. Rio de Janeiro: Elsevier, 2003.\n'
                }
            )
            .setTimestamp();

        const button1 = new MessageButton()
            .setCustomId('previousbtn')
            .setLabel('Página anterior')
            .setStyle('DANGER');

        const button2 = new MessageButton()
            .setCustomId('nextbtn')
            .setLabel('Próxima página')
            .setStyle('SUCCESS');

        const pages = [introductionEmbed1, introductionEmbed2, introductionEmbed3, introductionEmbed4, introductionEmbed5, introductionEmbed6, introductionEmbed7, introductionEmbed8, introductionEmbed9 ];
        const buttons = [button1, button2];
        const time = 1000 * 3600;
        paginationEmbed(interaction, pages, buttons, time);
    }
}