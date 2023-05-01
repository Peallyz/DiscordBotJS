const isChannelExist = (target) => {
  return target.guild.channels
    .fetch()
    .then((channels) => channels.find((channel) => channel.name === "log2"));
};

const createLogChannel = (target) => {
  if (!isChannelExist(target)) {
    target.guild.channels.create({
      name: "log2",
    });
  }
};

module.exports = { createLogChannel };
