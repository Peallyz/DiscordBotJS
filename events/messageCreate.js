const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    console.log(`A message is sent by ${message.author.username}`);
  },
};
