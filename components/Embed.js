// at the top of your file
const { EmbedBuilder } = require("discord.js");

function embedConstructor(
  type,
  author = "Nezu",
  executor,
  messageAuthor,
  message
) {
  switch (type) {
    case "messageDelete": {
      // inside a command, event listener, etc.
      return new EmbedBuilder()
        .setColor("Red")
        .setTitle("Suppression d'un message")
        .setURL("https://discord.js.org/")
        .setAuthor({
          name: author,
          iconURL: "https://i.imgur.com/AfFp7pu.png",
          url: "https://discord.js.org",
        })
        .setDescription(`${executor} à supprimer un message`)
        .setThumbnail("https://i.imgur.com/AfFp7pu.png")
        .addFields(
          { name: `Message de : ${messageAuthor}`, value: message },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          },
          { name: "Inline field title", value: "Some value here", inline: true }
        )
        .setImage("https://i.imgur.com/AfFp7pu.png")
        .setTimestamp()
        .addFields({
          name: "Inline field title",
          value: "Some value here",
          inline: true,
          url: "https://discord.js.org",
        })
        .setFooter({
          text: "Some footer text here",
          iconURL: "https://i.imgur.com/AfFp7pu.png",
          inline: true,
        });
    }
    case "channelDelete": {
      // inside a command, event listener, etc.
      return new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Suppression d'un channel")
        .setURL("https://discord.js.org/")
        .setAuthor({
          name: "Some name",
          iconURL: "https://i.imgur.com/AfFp7pu.png",
          url: "https://discord.js.org",
        })
        .setDescription("Some description here")
        .setThumbnail("https://i.imgur.com/AfFp7pu.png")
        .addFields(
          { name: "Regular field title", value: "Some value here" },
          { name: "\u200B", value: "\u200B" },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          }
        )
        .addFields({
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        })
        .setImage("https://i.imgur.com/AfFp7pu.png")
        .setTimestamp()
        .setFooter({
          text: "Some footer text here",
          iconURL: "https://i.imgur.com/AfFp7pu.png",
        });
    }
  }
}

module.exports = { embedConstructor };
