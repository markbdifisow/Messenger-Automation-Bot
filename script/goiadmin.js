module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Keijo",
  description: "Auto reply if you try to mention my owner or admins and developers",
  commandCategory: "autobot",
  usages: "Automatic reply",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ event, api }) {
  const nameCalled = event.body.toLowerCase();
  const adminNames = ["Keijo", "hoy keijo", "keijo", "KEIJO", "si keijo", "asan si keijo", "nasaan si keijo?"];

  const matched = adminNames.some(name => nameCalled.includes(name));
  if (matched) {
    const responses = [
      "
❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
.",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
",
      "❗𝗕𝗨𝗦𝗬
━━━━━━━━━━━━━━━━
💬🔊 𝗞𝗲𝗶𝗷𝗼 - stop
mentioning me okay
BCS I'm busy!! 
━━━━━━━━━━━━━━━━
𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘❗
"
    ];
    const randomReply = responses[Math.floor(Math.random() * responses.length)];
    return api.sendMessage(randomReply, event.threadID, event.messageID);
  }
};

module.exports.run = async function () {
  // No run needed, this command works on message events