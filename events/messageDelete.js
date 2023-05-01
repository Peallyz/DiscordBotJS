const {Events} = require("discord.js");
const embedConstructor = require("../components/Embed" );

module.exports = {
    name: Events.MessageDelete,
    timeout: 5000,
    async execute(message) {
        message.guild
            .fetchAuditLogs()
            .then((audit) =>
                message.guild.channels.fetch()
                    .then((channels) =>
                    channels.find((channel) => channel.name === "logs").send(
                        { embeds: [ embedConstructor() ] }
                    )))
                    .catch(err => console.log(err));
    },
};
