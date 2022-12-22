const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ajuda')
    .setDescription('Vou te ajudar a entender o que eu faço!'),

    async execute(interaction){
        const helpEmbed = new MessageEmbed()
        .setColor('RED')
        .setTitle('Precisando de ajuda?')
        .setDescription(`Olá <@${interaction.user.id}>, quer entender o que cada comando faz? Você está no lugar certo!`)
        .setTimestamp();

        const selectMenu = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('select-menu')
            .setPlaceholder('🔴 Selecione uma categoria')
            .addOptions([
                {
                    label: 'Início',
                    description: 'Volte para a mensagem inicial',
                    emoji: '📍',
                    value:'initial',
                },
                {
                    label: 'Conteúdos',
                    description: 'Veja todos os comandos que remetem a conteúdo',
                    emoji: '📚',
                    value:'contents',
                },
                {
                    label: 'Perguntas',
                    description: 'Veja todos os comandos de perguntas que estão disponíveis',
                    emoji: '❓',
                    value:'questions',
                },
            ]));
                
        await interaction.reply({embeds: [helpEmbed], components: [selectMenu], fetchReply: true }).then(msg =>{
            const filter = (i)=> i.isSelectMenu();
            const collector = msg.createMessageComponentCollector({ filter });
            collector.on('collect', async (collected) =>{
                let value = collected.values[0];
                collected.deferUpdate();
                if(value === 'initial'){
                        msg.edit({ embeds: [helpEmbed], components: [selectMenu] });
                    }
                    if(value === 'contents'){
                        let helpContents = new MessageEmbed()
                        .setColor('RED')
                        .setTitle('Comandos de conteúdo')
                        .addFields([
                            {
                                name: '/introducao',
                                value: 'Este é o pontapé inicial, aqui você vai aprender o básico sobre rede de computadores.', 
                            },
                            {
                                name: '/endereco-ip',
                                value: 'Neste tópico será abordado qual a função e a estrutura básica do tão conhecido endereço IP.', 
                            },
                            {
                                name: '/endereco-mac',
                                value: 'Neste tópico será abordado o que é o endereço MAC que nossos dispsitivos possuem.', 
                            },
                            {
                                name: '/arquiteturas',
                                value: 'Neste tópico será abordado os modelos OSI e TCP/IP. Como funcionam na prática e uma breve explicação sobre encapsulamento.', 
                            },
                            {
                                name: '/topologia',
                                value: 'Neste tópico será abordado algumas formas de como organizar e conectar uma rede local.', 
                            },
                            {
                                name: '/dhcp',
                                value: 'Neste tópico será abordado qual a função do DHCP e o porque é tão utilizado na área de redes.', 
                            },
                        ])
                        msg.edit({ embeds: [helpContents], components: [selectMenu] });
                    };
                    if(value === 'questions'){
                        let helpQuestions = new MessageEmbed()
                        .setColor('RED')
                        .setTitle('Comandos de perguntas')
                        .addFields([
                            {
                                name: '/perguntas-introducao',
                                value: 'Exercite aquilo que foi estudado no tópico de introdução'
                            },
                            {
                                name: '/perguntas-arquiteturas',
                                value: 'Exercite aquilo que foi estudado no tópico de arquiteturas'
                            },
                            {
                                name: '/perguntas-topologia',
                                value: 'Exercite aquilo que foi estudado no tópico de topologia'
                            }
                        ])
                        msg.edit({ embeds: [helpQuestions], components: [selectMenu] });
                    };
                })
            })    
        }
}