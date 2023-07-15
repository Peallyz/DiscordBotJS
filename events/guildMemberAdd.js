const { EmbedBuilder } = require("discord.js");
const { Events } = require("discord.js");
const { getRandomGif } = require("../services/getMedia");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const img = await getRandomGif();

    const embed = new EmbedBuilder()
      .setTitle(`Bienvenue sur le serveur !`)
      .setColor("#006e5f")
      .setAuthor({
        name: member.client.user.username,
        iconURL: member.client.user.avatarURL(),
      })
      .setImage(img);

    await member.guild.channels
      .fetch()
      .find((channel) => channel.type === 5)
      .send({ embeds: [embed] });
  },
};
