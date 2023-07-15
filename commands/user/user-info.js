const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user-info")
    .setDescription("Genère un embed avec les informations de l'utilisateur"),
  async execute(interaction) {
    let options = { year: "numeric", month: "long", day: "numeric" };

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setAuthor({
        name: interaction.client.user.username,
        iconURL: interaction.client.user.avatarURL(),
      })
      .setTitle("User informations")
      .setDescription(`Informations about ${interaction.user.username}`)
      .addFields(
        {
          name: "Name",
          value: `${interaction.user.username}`,
          inline: true,
        },
        {
          name: "User ID",
          value: `${interaction.user.id}`,
          inline: true,
        },
        {
          name: "Creation Date",
          value: `${interaction.user.createdAt.toLocaleString(
            "fr-FR",
            options
          )}`,
          inline: true,
        }
      )
      .setImage(interaction.user.avatarURL({ dynamic: true, size: 512 }))
      .setFooter({
        text: "V.0.1",
        iconURL: interaction.client.user.avatarURL(),
      })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
