// at the top of your file
const {EmbedBuilder} = require("discord.js");

function embedConstructor(
    type,
    content
) {

    switch (type) {
        case "messageDelete": {
            const anthyra = content.guild.members.cache.find(user => user.id === '819175877816352780').user;
            const peally = content.guild.members.cache.find(test => test.id === '290083594586554370').user;

            // inside a command, event listener, etc.
            return new EmbedBuilder()
                .setColor("Red")
                .setTitle(`Suppression d'un message dans #${content.guild.channels.cache.get(content.channelId).name}`)
                .setAuthor({
                    name: content.author.tag,
                    iconURL: content.author.avatarURL(),
                    url: "https://discord.js.org",
                })
                .setDescription(`${content}`)
                .setThumbnail(content.guild.iconURL())
                .setTimestamp()
                .setFooter({
                    text: `Bot réalisé par ${anthyra ? anthyra.tag : "Anthyra"} et ${peally ? peally.tag : "Peally"}`,
                    iconURL: content.guild.client.user.avatarURL(),
                });
        }
    }
}

module.exports = {embedConstructor};
