
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const XTroid = require('../events');
const DEL = "Delet all messages from you"



 XTroid.addCMD({pattern: 'del', fromMe: true, desc: DEL}, (async (message, match) => {

    await message.sendMessage('```Deleting all Message...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```⛟All deleted....```');
}));
