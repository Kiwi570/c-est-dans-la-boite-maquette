import sharp from 'sharp';
const [out, w, ...files] = process.argv.slice(2);
const W = +w, H = Math.round(W*1.5);
const cols = 5, rows = Math.ceil(files.length/cols);
const tiles = await Promise.all(files.map(f => sharp(f).resize(W, H, {fit:'contain', background:'#ddd'}).jpeg().toBuffer()));
await sharp({create:{width:cols*W, height:rows*H, channels:3, background:'#fff'}})
 .composite(tiles.map((t,i)=>({input:t, left:(i%cols)*W, top:Math.floor(i/cols)*H}))).jpeg({quality:80}).toFile(out);
