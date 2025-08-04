const axios = require('axios');

/**
 * Command configuration
 * @type {import("bot-types").CommandConfig}
 */
module.exports.config = {
  name: 'autoreply',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['buang'],
  description: "Auto reply to messages",
  usage: "autoreply [on/off]",
  credits: 'KEIJO | Aljur',
  cooldown: 3,
};

/** @type {Record<string, boolean>} Stores autoreply status per thread ID */
let autoReplyStatus = {};

/**
 * Toggle
 * 
 * @param {Object} ctx - Command context
 * @param {import("bot-types").API} ctx.api 
 * @param {import("bot-types").Event} ctx.event
 * @param {string[]} ctx.args - cmd arg
 */
module.exports.run = async function({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;

  if (args[0] === 'on') {
    autoReplyStatus[threadID] = true;
    api.sendMessage('🤖 Auto reply is now ON', threadID, messageID);
  } else if (args[0] === 'off') {
    autoReplyStatus[threadID] = false;
    api.sendMessage('🤖 Auto reply is now OFF', threadID, messageID);
  } else {
    api.sendMessage('🤖 Invalid command. Use "autoreply on" or "autoreply off"', threadID, messageID);
  }
};

/**
 * auto
 * 
 * @param {Object} ctx - Event context
 * @param {import("bot-types").API} ctx.api 
 * @param {import("bot-types").Event} ctx.event 
 */
module.exports.handleEvent = async function({ api, event }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  const messageText = event.body;

  if (autoReplyStatus[threadID]) {
    try {
      /** @type {{ description: string }} */
      const { data } = await axios.get("https://apis-rho-nine.vercel.app/gemini", {
        params: {
          ask: messageText,
        }
      });

      const responseText = data.description || "🤖 No response received.";
      api.sendMessage(`🤖 ${responseText}`, threadID, messageID);
    } catch (error) {
      console.error("AI Error:", error);
      const errMsg = "❌ Error: " + (error.response?.data?.message || error.message || "Unknown error occurred.");
      api.sendMessage(errMsg, threadID, messageID);
    }
  }
};