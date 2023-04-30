const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong !"),
  async execute(interaction) {
    await interaction.reply(
      `Pong  envoyé par ${interaction.client.user.username} à ${new Date(
        interaction.createdTimestamp
      )}!`
    );
  },
};
