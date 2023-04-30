const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageDelete,
  async execute(message) {
    message.guild
      .fetchAuditLogs()
      .then((audit) =>
        console.log(
          `${
            audit.entries.first().executor.username
          } a supprimé un message honteux`
        )
      )
      .catch(console.error);

    message.author
      .send("Nous avons supprimé ton ignoble message envers nos élèves !!")
      .then((messageSend) =>
        console.log(`Le message : ${messageSend} a été envoyé`)
      );
  },
};
