const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stops music and quits'),
  async execute(interaction, queue) {
    queue.length = 0;
    const connection = getVoiceConnection(interaction.guildId);
    connection.destroy();
    await interaction.reply('Penis!');
  },
};
