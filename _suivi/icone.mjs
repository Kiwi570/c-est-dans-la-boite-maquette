import sharp from 'sharp';
const logo = await sharp('recu/site/logo.png').resize({ height: 160 }).toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#F7F3EC' } }).composite([{ input: logo, gravity: 'center' }]).png().toFile('assets/images/apple-touch-icon.png');
console.log('ok');
