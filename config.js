const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94741262964'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94742524402"
global.devs = '94742524402';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlTOFVqZGdYMlczaXdILzBjOGNrYjR2YTUwN1dra2E0STJha1ptb0tHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT21hNGcwTzR4Vk1KeHNtVTdaMzF5TGo2Y1kweEFrV1NISXg1R1pGaDlIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSCs4R2ZqYUNGWEh2Z1lGY1NPcCtGNVAyc0dGckhqaGtrRXA4bWZUNjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqbkRkV1ZZekp0T0ZjaElobkt6RWUzU256Mk5nMU5aNXA3Q3RQSy9SR3lZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDSUQ5VFJtNUViT01LRXZveW12TlVoMXd4azVRb2pyaTRqWEdabHNiVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhmakZQRUFxdlF3bHpYeXp6Tm83NnVPZnk3Slh0dml0RThXdkk5QWQwWHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0wxcnc1YWc2SmhjekFwZ1dUbkh5d1lkWi91TFU2L3FiOHZCMjJ3cEtscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnBPMVRnZGtmK2djRDhITGVNSU51MTF1MFpncTZRWGVCUS9wcm5VWFNIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhmdWdiOGpxb1RCRjBpS0dlZmp0QXhjeHhoQWJVcGR0TWo0V0ttUVlUbzZTMHJzWHd5ZDhJcmJ3RVJzYVhkNytWK05UbXVJb2M0MzQ1VzFpWSs0bGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiIwSjlmZWl2K2ZOa0txQ1BvRUJaVldwMlJqc1Z4WHFBcHl0dldGNkl2KytJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQyNTI0NDAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZGNDk4QjlCQjcwQjIyOTM1OTIxMEE2MjgxOUZFMEI5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDc3NTE2OTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQyNTI0NDAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY3RkQyMUE3Q0RDRUU4RDE2NjU5NTVFRThCRDJGN0QwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDc3NTE2OTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQyNTI0NDAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyMzFCQkE0QTdGNEE0OEY1NTkyRDE3MTE2MTBGNkRDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDc3NTE3MDB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQyNTI0NDAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVBMzY2RDk3NDc3RTgxMUJDMzY4ODMwODlGMDA0RjI2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDc3NTE3MDB9XSwibmV4dFByZUtleUlkIjo2MywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik91NldWSGFMUWhtNldBTUxKUmNuY3ciLCJwaG9uZUlkIjoiMGQ0Y2VlZGUtOTQ3OS00MTVhLThjYjMtZDM4MmY4NmI2OTgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpFY296ZEExLzFrVzQ1OUlpZ040eFpNLzd0bz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1FUUGUyWkhFZUhEeExITDQ0aklWOENCMEdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXlMMC9jREVJM3lxSzRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM1VoMnFWWFB1VlJ2ekdMc25DM3BaNzdvd2s5M2RYQ1ZobzlYNFovbDd3QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOC9VTEJ1UEtpbGFPVnpEd3RqTlE0b0pVeUJvK1c1QzQvNHFYaVBJcVkxWDE2OXpnMGUrck1vcnAzR0VsTmp1d1BTMWErVExYSnM3L1BWdGgweW43Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6Im5yKzQ5Y3pVTUtSRGhmZFp0RE5SdUYvS25JcGxLZmpIVGgwTms4aVQyMGlsbzlVK2J3STdlVlUxTHdYNVV0a2dNY08vMVhMRnFETzFBOUwzbU9QdGhRPT0ifSwibWUiOnsiaWQiOiI5NDc0MjUyNDQwMjo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1EIEJPVCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MjUyNDQwMjo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQxSWRxbFZ6N2xVYjh4aTdKd3Q2V2UrNk1KUGQzVndsWWFQVitHZjVlOEEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDc3NTg1MTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXZ0In0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Darshana' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
