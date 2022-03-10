/*
SILAHKAN DI RECODE ADIK²
KALO ADA YG ERROR SY TDK RESPON
*/
const { WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')
const starts = async (dha = new WAConnection()) => {
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const moment = require("moment-timezone")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const set = JSON.parse(fs.readFileSync('./src/setting2.json'))
//const welcome = require('./message/group')
baterai = 'TIDAK TERDETEKSI'
charging = 'TIDAK TERDETEKSI'

  // ====== TIME
  if(time2 < "23:59:00"){
  var tampilUcapan = '🌃Malam Kak'}
  if(time2 < "19:00:00"){
  var tampilUcapan = '🌇Petang Kak'}
  if(time2 < "18:00:00"){
  var tampilUcapan = '🌁️Sore Kak'}
  if(time2 < "15:00:00"){
  var tampilUcapan = '🌅Siang Kak'}
  if(time2 < "11:00:00"){
  var tampilUcapan = '🌄Pagi Kak'}
  if(time2 < "05:00:00"){
  var tampilUcapan = '🌃Malam Kak'}

  //nocache
  require('./index.js')
  nocache('../index.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
  require('./src/setting2.json')
  nocache('../src/setting2.json', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
  require('./src/settingsymbol.json')
  nocache('../src/settingsymbol.json', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))


    // START CONNECTION
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync(`${set.NamaBot}`, {
	font: 'Cola',
	horizontalLayout: 'default',
	vertivalLayout: 'default',
	width: 80,
	whitespaceBreak: false
	}), 'white'))
	console.log(color('\n> WELCOME USER ','silver'), color(`Script Bot Using JavaScript And Nodejs`,'white'))
	console.log(color('\n> About Creator : ','silver'), color(`Name : Atsair Adi\nAge : 14th\nClass : 3Smp\nYoutube : xyoraofficial\nWhatsApp : 6282393072006`,'yellow'))
	console.log(color('\n> Motivasi : ','silver'), color(`"Dalami Apa Yang Udah Jadi Hobi Mu\nKarena TUHAN YANG MAHA ESA Menciptakan Manusia Dengan Kelebihannya Masing Masing\nSemangat🌚"`,'cyan'))
	dha.browserDescription = ["Conect", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
	console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('Scan Anjg Jan Bengong'))
	})

	// Menghubungkan
	fs.existsSync(`./sesi.json`) && dha.loadAuthInfo(`./sesi.json`)
	dha.on('connecting', () => {
	console.log(color('[ PROSES ]', 'yellow'), color('Loading....'))})
    //connect
	dha.on('open', () => {
	console.log(color('[ SELESAI ]', 'white'), color('Succes Connect'))})
	// session
    await dha.connect({timeoutMs: 30*1000})
	fs.writeFileSync('./sesi.json', JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
	global.batteryLevelStr = json[2][0][1].value
	global.batterylevel = parseInt(batteryLevelStr)
	baterai = batterylevel
	if (json[2][0][1].live == 'true') charging = true
	if (json[2][0][1].live == 'false') charging = false
	console.log(json[2][0][1])
	console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
	const batteryLevelStr = json[2][0][1].value
	const batterylevel = parseInt(batteryLevelStr)
	global.batrei.push(batterylevel)
	})
	
  // welcome
  dha.on("group-participants-update", async (anu) => {
  try {
  mem = anu.participants[0]
  console.log(anu)
  try {
  pic = await dha.getProfilePicture(mem)
  } catch (e) {
  pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  try {
  pp_grup = await dha.getProfilePicture(anu.jid)
  } catch (e) {
  pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  
  // SAAT BOT YANG MASUK DI GRUB 
 
  if (anu.action == 'add' && mem.includes(dha.user.jid)) {
  dha.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
  }
  if (anu.action == 'add' && mem.includes(dha.user.jid)) {
  dha.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
  }

  // SAAT MEMBER LAIN YANG MASUK
  if (anu.action == 'add' && !mem.includes(dha.user.jid)) {
  groupMet = await dha.groupMetadata(anu.jid)
  groupMembers = groupMet.participants
  mdata = await dha.groupMetadata(anu.jid)
  memeg = mdata.participants.length
  num = anu.participants[0]
  groupName = mdata.subject
  let v = dha.contacts[num] || { notify: num.replace(/@.+/, '') }
  anu_user = v.vname || v.notify || num.split('@')[0]
  teks = `Welcome *@${mem.split('@')[0]}*\n*Welcome in group* : _${mdata.subject}_\n*Intro Biar Kenal*\n*Nama :*\n*Umur :* \n*Hobi :*\n*Gender :*\n*Numberr :* ${mem.replace('@s.whatsapp.net', '')}\n*Semoga Kamu Nyaman*`
  buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pic}&bg=https://ibb.co/x1snmmg`) 
  dha.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `*Made With ${set.NamaOwner}*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')}
  // MEMBER KELUAR
  if (anu.action == 'remove' && !mem.includes(dha.user.jid)) {
  mdata = await dha.groupMetadata(anu.jid)
  num = anu.participants[0]
  let w = dha.contacts[num] || { notify: num.replace(/@.+/, '') }
  anu_user = w.vname || w.notify || num.split('@')[0]
  memeg = mdata.participants.length
  out = `@${num.split('@')[0]} Leave In *${mdata.subject}*`
  buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pic}&bg=https://ibb.co/x1snmmg`)
  dha.sendMessage(mdata.id, { contentText: `${out}`, footerText: `*Made With ${set.NamaOwner}*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')}
  // PENAIKAN JABATAN
  if (anu.action == 'promote') {
  mdata = await dha.groupMetadata(anu.jid)
  fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Yeriko;;;\nFN:Yeriko\nitem1.TEL;waid=6285866295942:6285866295942\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
  num = anu.participants[0]
  teks = `*P R O M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
  dha.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
  console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
  } 
  // PENURUNAN JABATAN
  if (anu.action == 'demote') {
  mdata = await dha.groupMetadata(anu.jid)
  fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Yeriko;;;\nFN:Yeriko\nitem1.TEL;waid=6285866295942:6285866295942\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
  num = anu.participants[0]
  teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
  dha.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
  console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
  }
  } catch (e) {
  console.log("Error : %s", color(e, "red"));}})


  // GRUP UPDATE
  dha.on('group-update', async (anu) => {
  // Fake
  fkontakk = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285697725326-1604595598@g.us' } : {})},message: {"contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2; WHATSAPP BOT;;;\nFN:MARK\nitem1.TEL;waid=0:+0\nitem1.X-ABLabel:Mobile\nEND:VCARD"}}}
  metdata = await dha.groupMetadata(anu.jid)

  if(anu.announce == 'false'){
  teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
  dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
  console.log(`- [ Group Opened ] - In ${metdata.subject}`)}

  else if(anu.announce == 'true'){
  teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
  dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
  console.log(`- [ Group Closed ] - In ${metdata.subject}`)}

  else if(!anu.desc == ''){
  tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
  teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
  dha.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
  console.log(`- [ Group Description Change ] - In ${metdata.subject}`)}

  else if(anu.restrict == 'false'){
  teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
  dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
  console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)}
  else if(anu.restrict == 'true'){
  teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
  dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
  console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)}
  })
  // START INDEX
  dha.on('chat-update', async (message) => {require('./index.js')(dha, message)})}
  starts()