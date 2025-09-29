‎onst request = require("request");
‎const fs = require("fs-extra");
‎
‎module.exports.config = {
‎  name: "owner",
‎  version: "1.0.1",
‎  hasPermssion: 0,
‎  credits: "Sithil ahmed shakib",
‎  description: "Show Owner Info with styled box & random photo",
‎  commandCategory: "Information",
‎  usages: "owner",
‎  cooldowns: 2
‎};
‎
‎module.exports.run = async function ({ api, event }) {
‎
‎  
‎  const info = `
‎╔═════════════════════ ✿
‎║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
‎╠═════════════════════ ✿
‎║ 👑 𝗡𝗮𝗺𝗲 : 𝗦𝗜𝗧𝗛𝗜𝗟 𝗔𝗛𝗠𝗘𝗗 𝗦𝗛𝗔𝗞𝗜𝗕
‎║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝗦𝗜𝗧𝗛𝗜𝗟
‎║ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
‎║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗖𝗶𝗻𝘁𝗶𝗻𝗲𝘂
‎║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
‎║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗦𝗖
‎║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗚𝗔𝗭𝗜𝗣𝗨𝗥
‎╠═════════════════════ ✿
‎║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
‎╠═════════════════════ ✿
‎║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
‎║ fb.com/100048701940474
‎╚═════════════════════ ✿
‎`;
‎
‎  const images = [
‎    "https://i.imgur.com/8WBso8x.png",
‎    "https://i.imgur.com/0VZu5eY.png",
‎    "https://i.imgur.com/bkixgPK.jpeg",
‎    "https://i.imgur.com/z6G6L4c.jpeg"
‎  ];
‎
‎  const randomImg = images[Math.floor(Math.random() * images.length)];
‎
‎  const callback = () => api.sendMessage(
‎    {
‎      body: info,
‎      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
‎    },
‎    event.threadID,
‎    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
‎  );
‎
‎  return request(encodeURI(randomImg))
‎    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
‎    .on("close", () => callback());
‎};
