@echo off
chcp 65001 >nul
echo ========================================
echo   乒乓球网站图片下载脚本
echo ========================================
echo.

if not exist "images" mkdir images

echo 开始下载图片...
echo.

echo [1/13] 下载马龙图片...
curl -L -o "images/ma-long.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ma_Long_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg/400px-Ma_Long_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg"

echo [2/13] 下载樊振东图片...
curl -L -o "images/fan-zhendong.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fan_Zhendong_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg/400px-Fan_Zhendong_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg"

echo [3/13] 下载邓亚萍图片...
curl -L -o "images/deng-yaping.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Deng_Yaping_2012.jpg/400px-Deng_Yaping_2012.jpg"

echo [4/13] 下载张怡宁图片...
curl -L -o "images/zhang-yining.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Zhang_Yining_2009.jpg/400px-Zhang_Yining_2009.jpg"

echo [5/13] 下载容国团图片...
curl -L -o "images/rong-guotuan.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rong_Guotuan_1959.jpg/400px-Rong_Guotuan_1959.jpg"

echo [6/13] 下载刘国梁图片...
curl -L -o "images/liu-guoliang.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Liu_Guoliang_2013.jpg/400px-Liu_Guoliang_2013.jpg"

echo [7/13] 下载瓦尔德内尔图片...
curl -L -o "images/waldner.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jan-Ove_Waldner_2012.jpg/400px-Jan-Ove_Waldner_2012.jpg"

echo [8/13] 下载佩尔森图片...
curl -L -o "images/persson.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/J%C3%B6rgen_Persson_2012.jpg/400px-J%C3%B6rgen_Persson_2012.jpg"

echo [9/13] 下载水谷隼图片...
curl -L -o "images/mizutani.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mizutani_Jun_2012.jpg/400px-Mizutani_Jun_2012.jpg"

echo [10/13] 下载冯天薇图片...
curl -L -o "images/feng-tianwei.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Feng_Tianwei_2013.jpg/400px-Feng_Tianwei_2013.jpg"

echo [11/13] 下载奥运会比赛图片...
curl -L -o "images/olympics.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Table_tennis_at_the_2008_Summer_Olympics_-_Men%27s_singles_-_Gold_medal_match_-_Ma_Long_vs_Wang_Hao_-_02.jpg/640px-Table_tennis_at_the_2008_Summer_Olympics_-_Men%27s_singles_-_Gold_medal_match_-_Ma_Long_vs_Wang_Hao_-_02.jpg"

echo [12/13] 下载世锦赛图片...
curl -L -o "images/world-championships.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2018_World_Team_Table_Tennis_Championships_-_Men%27s_Final_-_01.jpg/640px-2018_World_Team_Table_Tennis_Championships_-_Men%27s_Final_-_01.jpg"

echo [13/13] 下载世界杯图片...
curl -L -o "images/world-cup.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Table_Tennis_World_Cup_2019_-_Men%27s_Singles_-_Final_-_01.jpg/640px-Table_Tennis_World_Cup_2019_-_Men%27s_Singles_-_Final_-_01.jpg"

echo.
echo ========================================
echo   下载完成！
echo ========================================
echo.
echo 图片已保存到 images 文件夹
dir images
echo.
pause
