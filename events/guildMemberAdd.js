const { EmbedBuilder } = require("discord.js");
const { Events } = require("discord.js");
const { getRandomGif } = require("../services/getMedia");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const img = await getRandomGif();

    const embed = new EmbedBuilder()
      .setTitle(`Bienvenue ${member.user.username} sur le serveur !`)
      .setColor("#006e5f")
      .setImage(img)
      .setFooter({
        text: "V.0.1",
        iconURL: member.client.user.avatarURL(),
      })
      .setTimestamp();

    await member.guild.channels.cache
      .get(member.guild.systemChannelId)
      .send({ embeds: [embed] });
  },
};
