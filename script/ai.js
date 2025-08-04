module.exports.config = {
  name: "ai",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Meta AI",
  description: "GPT-4O FREE AI chatbot",
  commandCategory: "autobot",
  usages: "Ask me anything",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ event, api }) {
  if (!event || !event.body) return;
  const prompt = event.body;
  if (!prompt.startsWith("#ai")) return;
  const response = `𝗚𝗣𝗧-𝟰𝗢 𝗙𝗥𝗘𝗘 🖼️🎓 ━━━━━━━━━━━━━━━ 🔎 Please provide a question for 𝗴𝗽𝘁. 𝙀𝙭𝙖𝙢𝙥𝙡𝙚 #ai what is tralalero tralala?`;
  api.sendMessage(response, event.threadID);
};

module.exports.run = async function () {
  // No run needed, this command works on message events
};