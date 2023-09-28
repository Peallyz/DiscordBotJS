const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server-info")
        .setDescription("Genère un embed avec les informations du serveur"),
    async execute(interaction) {
        const options = {year: "numeric", month: "long", day: "numeric"};
        console.log(interaction.guild.channels.channelCountWithoutThreads);
        const channels = interaction.guild.channels.cache.filter(channel => channel.type === 2 || channel.type === 0);
        const categories = interaction.guild.channels.cache.filter(channel => channel.type === 4);
        let owner = await interaction.guild.fetchOwner();
        console.log(interaction.guild.features);

        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setAuthor({
                name: interaction.client.user.username,
                iconURL: interaction.client.user.avatarURL(),
            })
            .setTitle(`Informations for ${interaction.guild.name}`)
            .setThumbnail(interaction.guild.iconURL({dynamic: true, size: 512}))
            .addFields(
                {
                    name: "Owner",
                    value: `${owner.user.username}`,
                    inline: true,
                },
                {
                    name: "Members",
                    value: `${interaction.guild.memberCount}\n Bot: ${interaction.guild.members.cache.filter(member => member.user.bot).size}\n Humans: ${interaction.guild.memberCount - interaction.guild.members.cache.filter(member => member.user.bot).size}`,
                    inline: true,
                },
                {
                    name: "Creation Date",
                    value: `${interaction.guild.createdAt.toLocaleString(
                        "fr-FR",
                        options
                    )}`,
                    inline: true,
                }
            )
            .addFields(
                {
                    name: "AFK Channel",
                    value: `<#${interaction.guild.afkChannel.id}>`,
                    inline: true,
                },
                {
                    name: "Channels",
                    value: `🎤${channels.filter(channel => channel.type === 2).size} voice channels\n💬 ${channels.filter(channel => channel.type === 0).size} text channels`,
                    inline: true,
                },
                {
                    name: "Categories count",
                    value: `${categories.size} categories`,
                    inline: true,
                },
            )
            .setFooter({
                text: "V.0.1",
                iconURL: interaction.client.user.avatarURL(),
            })
            .setTimestamp();
        await interaction.reply({embeds: [embed]});
    },
};
