import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import './plugins/main-allfake.js';

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botnumber = '' //Ejemplo: +573138954963
global.confirmCode = ''

//• ↳𝑺𝑶𝑳𝑶 𝑫𝑬𝑺𝑨𝑹𝑹𝑶𝑳𝑳𝑨𝑫𝑶𝑹𝑬𝑺 𝑨𝑷𝑹𝑶𝑩𝑨𝑫𝑶𝑺
global.owner = [
  ['50248019799', '🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲-Soporte', true],
  ['51984368849', 'emer -soporte', true],
  ['18294868853', 'Dionebi', true],
  ['522219831926']
];

//• ↳𝑺𝑶𝑳𝑶 𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹𝑬𝑺!
global.mods = ['50248019799', '18294868853', '51984368849', '', '']

global.suittag = ['50248019799']
global.prems = []
 
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '3.0.0'
global.languaje = 'Español'
global.nameqr = 'akeno-Bot'
global.sessions = 'Akenosesion'
global.jadi = 'akenoJadiBot'

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 💌
global.packsticker = `♾ ━━━━━━━━\n├ ɓσƭ:\n├ ρяοριєταяιο:\n├ ƒєϲнα ∂є ϲяєαϲιόи:\n├ нοяα:\n♾━━━━━━━━`
global.packname = `Akeno himejima-𝐁𝐨𝐭-𝐌𝐃 `
global.author = `♾━━━━━━━━\nAkeno himejima-𝐁𝐨𝐭-𝐌𝐃 ⋆\n🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\nѕticker by ; Akeno himejima-𝐁𝐨𝐭-𝐌𝐃𓆪͟͞ `;
global.wm = 'Akeno himejima-𝐁𝐨𝐭-𝐌𝐃ⷭ𓆪͟͞ ';
global.igfg = '🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲'
global.botname = '〘Akeno himejima〙'
global.dev = ' 𝓟𝓞𝓦𝓔𝓡𝓓 𝓑𝓨 🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲'
global.textbot = '𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏'
global.gt = '𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏';
global.namechannel = '𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏'
global.welcom1 = 'Edita Con #setwelcome'
global.welcom2 = 'Edita Con #setbye'


//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.imagen1 = fs.readFileSync('./src/menus/Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/anime.jpg');
global.imagen3 = fs.readFileSync('./src/menus/Menu3.jpg');
global.imagen4 = fs.readFileSync('./src/menus/Menu.jpg');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./src/menus/Menu3.jpg');
global.imagen7 = fs.readFileSync('./src/menus/Menu5.jpg');
global.imagen8 = fs.readFileSync('./src/menus/Menu4.jpg')
global.imagen9 = fs.readFileSync('./src/menu_en.png')
global.imagen10 = fs.readFileSync('./src/nuevobot.jpg')
global.miniurl = fs.readFileSync('./src/Grupo.jpg');
global.logo2 = fs.readFileSync('./src/logo2.jpg')
global.logo3 = fs.readFileSync('./src/logo3.jpg')
global.catalogo = fs.readFileSync('./src/logo6.png')
global.logo4 = fs.readFileSync('./src/logo4.jpg')
global.logo5 = fs.readFileSync('./src/logo5.jpg')
global.logo7 = fs.readFileSync('./src/Logo7.png')
global.logo8 = fs.readFileSync('./src/Logo8.jpg')
global.rule = fs.readFileSync('./src/rule.jpg')
global.photoSity = [imagen8, imagen1, imagen4, imagen6]

//• ↳ ◜𝑭𝑨𝑲𝑬 𝑬𝑺𝑻𝑰𝑳𝑶◞ • 🪩
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'akeno', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏', jpegThumbnail: logo5 }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'akenobot', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '¤ akeno-Botᚐ', jpegThumbnail: logo5 }}};


global.ch = {
ch1: '120363341523880410@newsletter',
ch2: '120363341523880410@newsletter',
ch3: '120363341523880410@newsletter',
}

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp4 = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A' //Channel Team infinite
global.gp1 = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A' //Grupo 
global.gp2 = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A'//
global.comunidad1 = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A' //Comunidad 𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏
global.channel = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029VbB8ooKK5cD7K3akFP35' //Canal test
global.yt = 'https://youtube.com/@kakaroto-bot?si=dRYFi-dAw8H_mgGI' //Canal De Youtube
global.md = 'https://github.com/TOKIO5025' //Github Oficial
global.correo = 'albertodovi100@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A';

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🍭' + hour;

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363341523880410@newsletter", serverMessageId: 100, newsletterName: namechannel, }, }, }
//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\n 𝘼𝙠𝙚𝙣𝙤 𝙝𝙞𝙢𝙚𝙟𝙞𝙢𝙖-𝘽𝙊𝙏`;
global.nomorown = '50248019799';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./src/menus/Menu.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

//• ↳ ◜𝑨𝑷𝑰𝑺 𝑭𝑼𝑵𝑪𝑰𝑶𝑵◞ 👑
global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

/** ************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🧬 Nivel',
      yenes: 'yenes',
      exp: '⚡ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '💰 Token',
      emerald: '💚 Esmeralda',
      stamina: '✨ Energía',
      role: '💪 Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Oro',
      trash: '🗑 Basura',
      crystal: '🔮 Cristal',
      intelligence: '🧠 Inteligencia',
      string: '🕸️ Cuerda',
      keygold: '🔑 Llave de Oro',
      keyiron: '🗝️ Llave de Hierro',
      emas: '🪅 Piñata',
      fishingrod: '🎣 Caña de Pescar',
      gems: '🍀 Gemas',
      magicwand: '⚕️ Varita Mágica',
      mana: '🪄 Hechizo',
      agility: '🤸‍♂️ Agilidad',
      darkcrystal: '♠️ Cristal Oscuro',
      iron: '⛓️ Hierro',
      rock: '🪨 Roca',
      potion: '🥤 Poción',
      superior: '💼 Superior',
      robo: '🚔 Robo',
      upgrader: '🧰 Aumentar Mejora',
      wood: '🪵 Madera',
      strength: '🦹‍ ♀️ Fuerza',
      arc: '🏹 Arco',
      armor: '🥼 Armadura',
      bow: '🏹 Super Arco',
      pickaxe: '⛏️ Pico',
      sword: '⚔️ Espada',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítico',
      legendary: '🎁 Caja Legendaria',
      petFood: '🍖 Alimento para Mascota',
      pet: '🍱 Caja para Mascota',
      bibitanggur: '🍇 Semilla de Uva',
      bibitapel: '🍎 Semilla de Manzana',
      bibitjeruk: '🍊 Semillas de naranja',
      bibitmangga: '🥭 Semilla de Mango',
      bibitpisang: '🍌 Semillas de Plátano',
      ayam: '🐓 Pollo',
      babi: '🐖 Puerco',
      Jabali: '🐗 Jabali',
      bull: '🐃 Toro',
      buaya: '🐊 Cocodrilo',
      cat: '🐈 Gato',
      centaur: '🐐 Centauro',
      chicken: '🐓 Pollo',
      cow: '🐄 Vaca',
      dog: '🐕 Perro',
      dragon: '🐉 Dragón',
      elephant: '🐘 Elefante',
      fox: '🦊 Zorro',
      giraffe: '🦒 Jirafa',
      griffin: '🦅 Ave',
      horse: '🐎 Caballo',
      kambing: '🐐 Cabra',
      kerbau: '🐃 Búfalo',
      lion: '🦁 León',
      money: '🪙 Coins',
      monyet: '🐒 Mono',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente',
      phonix: '🕊️ Fénix',
      rhinoceros: '🦏 Rinoceronte',
      wolf: '🐺 Lobo',
      tiger: '🐅 Tigre',
      cumi: '🦑 Calamar',
      udang: '🦐 Camarón',
      ikan: '🐟 Pez',
      fideos: '🍝 Fideos',
      ramuan: '🧪 Ingrediente NOVA',
      knife: '🔪 Cuchillo',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { // Solo emojis
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🧬',
      dragones: '🐉',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '💰',
      emerald: '💚',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',
      buaya: '🐊',
      cat: '🐈',
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅',
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      money: '🪙',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};
global.rpgshop = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emottt = {
      exp: '⚡ Experiencia',
      yenes: '💴 Yenes',
      diamond: '💎 Diamante',
      joincount: '💰 Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Joya',
      kyubi: '🌀 Magia',
      gold: '👑 Oro',
      money: '🪙 Coins',
      tiketcoin: '🎫 Yuki Tickers',
      stamina: '✨ Energía',
      potion: '🥤 Poción',
      aqua: '💧 Agua',
      trash: '🗑 Basura',
      wood: '🪵 Madera',
      rock: '🪨 Roca',
      batu: '🥌 Piedra',
      string: '🕸️ Cuerda',
      iron: '⛓️ Hierro',
      coal: '⚱️ Carbón',
      botol: '🍶 Botella',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartón',
      eleksirb: '💡 Electricidad',
      emasbatang: '〽️ Barra de Oro',
      emasbiasa: '🧭 Oro Común',
      rubah: '🦊🌫️ Zorro Grande',
      sampah: '🗑🌫️ Super Basura',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madera',
      sword: '⚔️ Espada',
      umpan: '🪱 Carnada',
      healtmonster: '💵 Billetes',
      emas: '🪅 Piñata',
      pancingan: '🪝 Gancho',
      pancing: '🎣 Caña de Pescar',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítica',
      pet: '📫 Caja de Mascotas', // ?
      gardenboxs: '💐 Caja de Jardinería', // ?
      legendary: '🎁 Caja Legendaria',
      anggur: '🍇 Uva',
      apel: '🍎 Manzana',
      jeruk: '🍊 Naranja',
      mangga: '🥭 Mango',
      pisang: '🍌 Platano',
      bibitanggur: '🌾🍇 Semillas de uva',
      bibitapel: '🌾🍎 Semillas de manzana',
      bibitjeruk: '🌾🍊 Semillas de naranja',
      bibitmangga: '🌾🥭 Semillas de Mango',
      bibitpisang: '🌾🍌 Semillas de plátano',
      centaur: '🐐 Centauro',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragón',
      fox: '🦊 Zorro',
      kuda: '🐎 Caballo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Perro',
      petFood: '🍖 Alimento para Mascota', // ?
      makanancentaur: '🐐🥩 Comida de Centauro',
      makanangriffin: '🦅🥩 Comida de Ave',
      makanankyubi: '🌀🥩 Comida Mágica',
      makanannaga: '🐉🥩 Comida de Dragón',
      makananpet: '🍱🥩 Alimentos de mascotas',
      makananphonix: '🕊️🥩 Comida de Fénix',
    };
    const results = Object.keys(emottt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }};
global.rpgshopp = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emotttt = {
      exp: '⚡',
      yenes: '💴',
      diamond: '💎+',
      joincount: '💰',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '🪙',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱',
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫', // ?
      gardenboxs: '💐', // ?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', // ?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩',
    };
    const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }};

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
