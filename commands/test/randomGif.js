const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { getRandomGif } = require("../../services/getMedia");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("randomgif")
    .setDescription("Affiche un gif aléatoire"),
  async execute(interaction) {
    const img = await getRandomGif();

    const embed = new EmbedBuilder()
      .setColor("#000000")
      .setAuthor({
        name: interaction.client.user.username,
        iconURL: interaction.client.user.avatarURL(),
      })
      .setImage(img);
    await interaction.reply({ embeds: [embed] });
  },
};
