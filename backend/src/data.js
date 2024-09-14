const db = require('./db');

exports.getWorkspaceList = async (req, res) => {
  const workspaces = await db.getWorkspaces(req.user.email);
  // console.log("WORKSPACES", workspaces);
  res.status(200).json(workspaces);
};

exports.getChannelList = async (req, res) => {
  const workspaceId = req.params.id;
  const channels = await db.getChannels(workspaceId);
  // console.log("CHANNELS", channels);
  res.status(200).json(channels);
};

exports.getMessageList = async (req, res) => {
  const channelId = req.params.id;
  const messages = await db.getMessages(channelId);
  // console.log("MESSAGES", messages);
  res.status(200).json(messages);
};

console.log(`Connected to database '${process.env.POSTGRES_DB}'`);
