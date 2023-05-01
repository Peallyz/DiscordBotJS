const { Events } = require("discord.js");
const { embedConstructor } = require("../components/Embed");
const { createLogChannel } = require("../createLogChannel.js");

module.exports = {
  name: Events.MessageDelete,
  timeout: 5000,
  async execute(message) {
    createLogChannel(message);

    message.guild
      .fetchAuditLogs()
      .then((audit) =>
        message.guild.channels.fetch().then((channels) =>
          channels
            .find((channel) => channel.name === "logs")
            .send({
              embeds: [
                embedConstructor(
                  "messageDelete",
                  `${message.client.user.tag}`,
                  `${audit.entries.first().executor.username}`,
                  `${message.author.username}`,
                  `${message}`
                ),
              ],
            })
        )
      )
      .catch((err) => console.log(err));
  },
};
