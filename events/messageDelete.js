const { Events } = require("discord.js");
const { embedConstructor } = require("../components/Embed");
// const { createLogChannel } = require("../createLogChannel.js");

module.exports = {
  name: Events.MessageDelete,
  async execute(message) {
    // createLogChannel(message);

    message.guild.channels
      .fetch()
      .then((channels) =>
        channels
          .find((channel) => channel.name === "logs")
          .send({
            embeds: [embedConstructor("messageDelete", message)],
          })
      )
      .catch((err) => console.log(err));
  },
};
