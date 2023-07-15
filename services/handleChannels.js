// Check if Channel Exist and Create Channel if not
const isChannelExist = async (target, channelName) => {
  const channels = await target.guild.channels.fetch();
  return channels.find((channel) => channel.name === channelName);
};

const createTextChannel = async (target, channelName, parent = null) => {
  if (!parent) {
    target.guild.channels.create({
      name: channelName,
      type: 0,
    });
    return;
  }

  target.guild.channels.create({
    name: channelName,
    type: 0,
    parent: parent,
  });
};

// Check if Category Exist and Create Category if not

const isCategoryExist = async (target, categoryName) => {
  const channels = await target.guild.channels.fetch();
  const category = channels.find(
    (channel) => channel.type === 4 && channel.name === categoryName
  );
  return category;
};

const createCategory = async (target, categoryName) => {
  target.guild.channels.create({
    name: categoryName,
    type: 4,
  });
};

const handleLogChannel = async (target) => {
  const channelExist = await isChannelExist(target, "log");
  const categoryExist = await isCategoryExist(target, "Bot");

  if (!categoryExist) {
    await createCategory(target, "Bot");
  }

  const updatedCategoryExist = await isCategoryExist(target, "Bot");

  if (!channelExist && updatedCategoryExist) {
    await createTextChannel(target, "log", updatedCategoryExist);
  }
};

module.exports = { handleLogChannel };
