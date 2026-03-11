# 乒乓球网站图片下载脚本
# 使用 PowerShell 下载所有图片到本地

$images = @(
    # 运动员图片
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ma_Long_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg/400px-Ma_Long_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg"; Name="ma-long.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fan_Zhendong_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg/400px-Fan_Zhendong_at_the_2023_World_Table_Tennis_Championships_%28Men%27s_Singles%29_%28cropped%29.jpg"; Name="fan-zhendong.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Deng_Yaping_2012.jpg/400px-Deng_Yaping_2012.jpg"; Name="deng-yaping.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Zhang_Yining_2009.jpg/400px-Zhang_Yining_2009.jpg"; Name="zhang-yining.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rong_Guotuan_1959.jpg/400px-Rong_Guotuan_1959.jpg"; Name="rong-guotuan.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Liu_Guoliang_2013.jpg/400px-Liu_Guoliang_2013.jpg"; Name="liu-guoliang.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jan-Ove_Waldner_2012.jpg/400px-Jan-Ove_Waldner_2012.jpg"; Name="waldner.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/J%C3%B6rgen_Persson_2012.jpg/400px-J%C3%B6rgen_Persson_2012.jpg"; Name="persson.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mizutani_Jun_2012.jpg/400px-Mizutani_Jun_2012.jpg"; Name="mizutani.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Feng_Tianwei_2013.jpg/400px-Feng_Tianwei_2013.jpg"; Name="feng-tianwei.jpg"},
    
    # 赛事图片
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Table_tennis_at_the_2008_Summer_Olympics_-_Men%27s_singles_-_Gold_medal_match_-_Ma_Long_vs_Wang_Hao_-_02.jpg/640px-Table_tennis_at_the_2008_Summer_Olympics_-_Men%27s_singles_-_Gold_medal_match_-_Ma_Long_vs_Wang_Hao_-_02.jpg"; Name="olympics.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2018_World_Team_Table_Tennis_Championships_-_Men%27s_Final_-_01.jpg/640px-2018_World_Team_Table_Tennis_Championships_-_Men%27s_Final_-_01.jpg"; Name="world-championships.jpg"},
    @{Url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Table_Tennis_World_Cup_2019_-_Men%27s_Singles_-_Final_-_01.jpg/640px-Table_Tennis_World_Cup_2019_-_Men%27s_Singles_-_Final_-_01.jpg"; Name="world-cup.jpg"}
)

$downloadPath = ".\images"

# 创建图片文件夹
if (!(Test-Path $downloadPath)) {
    New-Item -ItemType Directory -Path $downloadPath
}

Write-Host "开始下载图片..." -ForegroundColor Green

foreach ($image in $images) {
    $filePath = Join-Path $downloadPath $image.Name
    Write-Host "正在下载：$($image.Name)" -ForegroundColor Yellow
    
    try {
        # 使用 WebClient 下载
        $client = New-Object System.Net.WebClient
        $client.Headers.Add("User-Agent", "PowerShell Script")
        $client.DownloadFile($image.Url, $filePath)
        Write-Host "  ✓ 下载成功：$($image.Name)" -ForegroundColor Green
    }
    catch {
        Write-Host "  ✗ 下载失败：$($image.Name)" -ForegroundColor Red
        Write-Host "    错误：$($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n图片下载完成！" -ForegroundColor Green
Write-Host "下载路径：$((Resolve-Path $downloadPath).Path)" -ForegroundColor Cyan
