const Sequelize = require('sequelize');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: './src/database/database.sqlite',
});
const architectureQuestion = require('../../events/table_architecture_questions.js')(sequelize);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('perguntas-arquiteturas')
        .setDescription('Finalizou o conteúdo de arquiteturas? faça alguns exercícios para fixar!.'),

    async execute(interaction) {
        const data = await architectureQuestion.findAll({ attributes: ['id', 'Enunciado', 'AlternativeA', 'AlternativeB', 'AlternativeC', 'AlternativeD', 'AlternativeE', 'CorrectAlternative'], raw: true, order: [['id']] })
        const length = data.length;
        const randomNumber = Math.floor(Math.random() * length);
        const randomQuestion = data[randomNumber];
        const question = randomQuestion.Enunciado;

        const embed = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle(`${question}`)
            .setDescription(`> **A**: ${randomQuestion.AlternativeA}\n\n\
                             > **B**: ${randomQuestion.AlternativeB}\n\n\
                             > **C**: ${randomQuestion.AlternativeC}\n\n\
                             > **D**: ${randomQuestion.AlternativeD}\n\n\
                             > **E**: ${randomQuestion.AlternativeE}\n\n`)
            .setFooter({ text: `*20 segundos para responder 🕡*` });

        const row = new MessageActionRow()
            .setComponents(
                new MessageButton()
                    .setCustomId('A')
                    .setLabel('A')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('B')
                    .setLabel('B')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('C')
                    .setLabel('C')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('D')
                    .setLabel('D')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('E')
                    .setLabel('E')
                    .setStyle('SUCCESS'),
            );

        const message = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });

        const filter = (b) => b.user.id === interaction.user.id;
        const time = 20000;
        const collector = message.createMessageComponentCollector({ filter, time: time });

        collector.on('collect', (i) => {
            const buttonId = i.customId;

            if (buttonId === randomQuestion.CorrectAlternative) {
                const correctAnswer = new MessageEmbed()
                    .setTitle(`Parabéns você acertou! 🟢`)
                    .setColor('GREEN');
                i.reply({ embeds: [correctAnswer], components: [], ephemeral: true, fetchReply: true }).then(()=>{message.delete();});
            } else {
                const wrongAnswer = new MessageEmbed()
                    .setTitle(`Infelizmente você errou! 🔴`)
                    .setColor('RED');
                i.reply({ embeds: [wrongAnswer], components: [], ephemeral: true, fetchReply: true }).then(()=>{message.delete();});
                }
        });

        collector.on('end', (collected, reason) => {
            console.log(`Collected ${collected.size} interactions on ${interaction.guild.name}\nReason: ${reason}`);
        });
    },
};
