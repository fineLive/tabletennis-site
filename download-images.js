const https = require('https');
const fs = require('fs');
const path = require('path');

// 创建 images 文件夹
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

const images = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ma_Long_at_the_2023_World_Table_Tennis_Championships_Mens_Singles_cropped.jpg/400px-Ma_Long_at_the_2023_World_Table_Tennis_Championships_Mens_Singles_cropped.jpg', name: 'ma-long.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fan_Zhendong_at_the_2023_World_Table_Tennis_Championships_Mens_Singles_cropped.jpg/400px-Fan_Zhendong_at_the_2023_World_Table_Tennis_Championships_Mens_Singles_cropped.jpg', name: 'fan-zhendong.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Deng_Yaping_2012.jpg/400px-Deng_Yaping_2012.jpg', name: 'deng-yaping.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Zhang_Yining_2009.jpg/400px-Zhang_Yining_2009.jpg', name: 'zhang-yining.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rong_Guotuan_1959.jpg/400px-Rong_Guotuan_1959.jpg', name: 'rong-guotuan.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Liu_Guoliang_2013.jpg/400px-Liu_Guoliang_2013.jpg', name: 'liu-guoliang.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jan-Ove_Waldner_2012.jpg/400px-Jan-Ove_Waldner_2012.jpg', name: 'waldner.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jorgen_Persson_2012.jpg/400px-Jorgen_Persson_2012.jpg', name: 'persson.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mizutani_Jun_2012.jpg/400px-Mizutani_Jun_2012.jpg', name: 'mizutani.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Feng_Tianwei_2013.jpg/400px-Feng_Tianwei_2013.jpg', name: 'feng-tianwei.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Table_tennis_at_the_2008_Summer_Olympics_Mens_singles_Gold_medal_match_Ma_Long_vs_Wang_Hao_02.jpg/640px-Table_tennis_at_the_2008_Summer_Olympics_Mens_singles_Gold_medal_match_Ma_Long_vs_Wang_Hao_02.jpg', name: 'olympics.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2018_World_Team_Table_Tennis_Championships_Mens_Final_01.jpg/640px-2018_World_Team_Table_Tennis_Championships_Mens_Final_01.jpg', name: 'world-championships.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Table_Tennis_World_Cup_2019_Mens_Singles_Final_01.jpg/640px-Table_Tennis_World_Cup_2019_Mens_Singles_Final_01.jpg', name: 'world-cup.jpg' }
];

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(imagesDir, filename);
        const file = fs.createWriteStream(filePath);
        
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                downloadImage(response.headers.location, filename).then(resolve).catch(reject);
                return;
            }
            
            if (response.statusCode !== 200) {
                reject(new Error(`请求失败，状态码：${response.statusCode}`));
                return;
            }
            
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                console.log(`✓ 下载成功：${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => {});
            console.error(`✗ 下载失败：${filename}`, err.message);
            reject(err);
        });
    });
}

async function downloadAll() {
    console.log('========================================');
    console.log('  乒乓球网站图片下载脚本');
    console.log('========================================\n');
    
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        console.log(`[${i + 1}/${images.length}] 正在下载：${img.name}`);
        try {
            await downloadImage(img.url, img.name);
        } catch (err) {
            console.log(`  跳过：${img.name}`);
        }
    }
    
    console.log('\n========================================');
    console.log('  下载完成！');
    console.log('========================================');
    console.log(`\n图片已保存到：${imagesDir}`);
}

downloadAll();
