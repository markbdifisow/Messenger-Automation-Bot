module.exports.config = {
  name: "greet",
  version: "1.1.0",
  hasPermission: 0,
  credits: "AJ",
  description: "Auto responds to common greetings",
  commandCategory: "autobot",
  usages: "[hi | hello | etc.]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ event, api }) {
  const message = event.body?.toLowerCase().trim();
  if (!message) return;

  const greetings = [
    "hi", "hello", "hey", "yo", "sup", "heya", "hipo",
    "hola", "hi po", "halow", "wassup", "musta",
    "kumusta", "kamusta", "oy", "oi"
  ];

  // Simple matching (only replies if the message is one word or short greeting phrase)
  if (greetings.includes(message)) {
    const replies = [
      "hi, tapos ano? magiging friends tayo? lagi tayong mag uusap mula umaga hanggang madaling araw? tas magiging close tayo? sa sobrang close natin mahuhulog na tayo sa isa't isa, tapos ano? liligawan moko tapos sasagutin kita. tas paplanuhin natin yung pangarap natin sa isa't isa tapos ano? may makikita kang iba. magsasawa ka na, iiwan mo na ako. tapos magmamakaawa ako sayo kasi mahal kita pero ano? wala kang gagawin, hahayaan mo lang akong umiiyak while begging you to stay. kaya wag na lang. thanks na lang sa hi mo.",
      "ano na naman ba? panay ka hi at hello",
      "puro nalang ba tayo hi at hello?",
      "hi babe, kain?",
      "hi, nakita mo ba owner kong si 𝗞𝗘𝗜𝗝𝗢 𝗘𝗡𝗥𝗜𝗟𝗘?",
      "hi, how's your day?",
      "hi po, have a nice day🥰",
      "👋 Kumusta ka?",
      "Hello hello! 🔔",
      "hi beh, pwede ka bang landiin?"
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    return api.sendMessage(randomReply, event.threadID, event.messageID);
  }
};

module.exports.run = async function () {
  // No manual command needed
};