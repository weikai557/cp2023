var tipuesearch = {"pages": [{'title': 'w2', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w2-w5', 'text': 'w2 \n 說明安裝 Apps, 如何設定網路, 查驗是否正確連網 \n 說明如何利用近端可攜系統執行 C 程式, 如何利用 ChatGPT 進行對話 \n 說明如何利用 Replit 協助編輯網頁內容 \n 說明如何 connect Replit to Github, 如何建立個人網站並利用 Replit 啟動編輯網站 \n w3 \n 有關電腦輔助設計室網路設定說明 \n 處理 .replit 與 replit.nix 中的舊 Python 設定問題 \n 說明如何為 site-個人github帳號 倉儲設定 Github Pages \n 採用 Github Classroom 建立作業倉儲的問題: \n 2023/09/26 在 1a w3 課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責. \n w4-w5 \n 第四與第五週任務: \n 各學員自行建立線上考試帳號 \n 依據 \xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n 登入 Github 後, 以\xa0 https://github.com/mdecycu/cmsite \xa0作為 Template 建立 cp2023 倉儲 \n 在 Replit IDE 上啟動 cp2023 內容編輯網站, 並將改版內容推送至 Github \n 在同時登入 Github 與 Replit 的情況下, 將 Replit 帳號 connect 至 Github 帳號 \n 利用 import 將 cp2023 倉儲導入 Replit \n 設定 .replit 為 python3 main.py \n 根據 cp2023 倉儲中的 README.md 在 Shell 區執行 git submodule 與 pip install \n 以 Run 執行 main.py 啟動倉儲內容編輯網頁 \n 利用 密碼產生程式 將所選定的管理者密碼字串存入 Tool - Secrets 頁面中的 config 變數 (若無 config 環境變數設定, 動態網站登入管理者密碼將交由倉儲中的 config/config 字串進行驗證) \n 重新啟倉儲內容編輯網頁後, 以新管理者密碼登入後改版並 Convert 為靜態內容後, 在 Git 頁面中將改版內容推至 Github \n 在 Replit cp2023 專案中設定 C 程式與 Gnuplot 執行環境, 完成 上課內容中的練習 \n replit.nix \xa0 納入 gnuplot 套件 \n w5 1b cp2023 與 Replit C 程式執行環境說明影片.mp4 \n 設定過程使用的參考網站:\xa0 https://scrum-1.github.io/cp2023/content/w5.html \xa0 \n 設定過程使用的 Repl: \xa0 https://replit.com/@scrum1/cp2023 \xa0(包含 \xa0 replit.nix \xa0 設定檔案) \n 蒐集牛頓第二運動定律、mass-spring-damper 系統、Euler\'s Method 數值分析相關資料 \n 將 \xa0 euler_gnuplot_msd_ex1.c \xa0放入 downloads 目錄中, 以 cc\xa0euler_gnuplot_msd_ex1.c -o euler_gnuplot_msd_ex1 產生\xa0euler_gnuplot_msd_ex1 可執行檔案後, 以 ./euler_gnuplot_msd_ex1 執行 \n 最後可以在 images 目錄中得到 \xa0 motion_plot.png \xa0 模擬結果 \n jsliu_c_programming.pdf \xa0 (需要下載密碼) \n Introduction to C \xa0(經由校園網路或 VPN 下載) \n 指定 Github Classroom 作業: 取得 \xa0 https://github.com/mdecp2023 \xa0 帳號下的 "site-個人github帳號" 倉儲 (用於學員簡報以及期中期末評分用) \n \xa0 改由學員自行利用 \xa0 https://github.com/mdecycu/cmsite \xa0 倉儲作為 template, 建立名稱為 cp2023 的評分倉儲 . \n 近端執行: \n SciTE 與 Tiny C Compiler 若要設定為 Tools - Compile 之後產生可執行檔案 a.out, cpp.properties 設定檔案必須修改如下: \n ccopts=-pedantic -Os\n#cc=g++ $(ccopts) -c $(FileNameExt) -o $(FileName).o\n#ccc=gcc $(ccopts) -c $(FileNameExt) -o $(FileName).o\ncc=tcc.exe -run \nccc=tcc.exe -o a.out\n \nmake.command=make\n#command.compile.*.c=$(ccc) -std=c99\ncommand.compile.*.c=$(ccc) $(FileNameExt)\ncommand.build.*.c=$(make.command)\ncommand.build.*.h=$(make.command)\ncommand.clean.*.c=$(make.command) clean\ncommand.clean.*.h=$(make.command) clean\n# use tcc to run .c program\n#command.go.*.c=./$(FileName)\ncommand.go.*.c=$(cc) $(FileNameExt) \n 雲端執行: \n 範例: \xa0 https://replit.com/@wcms/cjavascriptpython \n 將位於個人 Github 帳號下的 cp2023 倉儲 (建議以 \xa0 https://github.com/mdecycu/cmsite \xa0 作為 template) import 進入 Replit, 以 git submodule update --init 取下子模組, 然後以 pip install flask flask_cors bs4 lxml pelican markdown gevent 安裝啟動編輯網站所需模組後, 將 config/config 密碼編碼移至 Secrets 頁面中的 config 變數後啟動. \n 修改 replit.nix 如下, 表示要安裝 gnuplot 套件: \n { pkgs }: {\n  deps = [\n    pkgs.gnuplot\n  ];\n} \n 之後將所練習的 C 程式置於 downloads 目錄中, 其執行影像結果存入 images 後, 分別在網頁中引用. \n Exercises: \n 請從\xa0 jsliu_c_programming.pdf \xa0 (需要下載密碼)與\xa0 Introduction to C \xa0(經由校園網路或 VPN 下載)電子書中各擷取 10 個 C 程式範例, 分別: \n \n 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Go 類編譯方式執行. \n 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Compile 編譯連結後取得 a.out, 然後在命令列中以 a.out 執行. \n 在 Replit 全球資訊網 IDE 環境中的 Shell 頁面, 以 cc ex1.c 產生可執行檔案 a.out, 並以 ./a.out 執行, 或者以 cc ex1.c -o ex1 指定編譯連結後的可執行檔案名稱為 ex1 後, 以 ./ex1 執行. \n \n 最後將所選擇的 C 程式範例執行過程與相關說明內容, 整理在 個人 github 帳號下的 cp2023 倉儲網頁 中的 c_ex 頁面中. \n 參考: \n Introduction to the C programming Language ( 1 , \xa0 2 , \xa0 3 , or \xa0 download with password ) \n 使用者輸入兩個整數後相加的 C 程式範例: \n /* Read in two integers , add them and display the answer */\n#define _CRT_SECURE_NO_WARNINGS\n#include<stdio.h>\nint main()\n{\nint this_is_a_number1, this_is_a_number2, total;\nprintf("Please enter an integer number:\\n ");\n/* read number in */\nif (scanf("%d", &this_is_a_number1) == 1) {\n      printf("%d", this_is_a_number1);\n    } else {\n        printf("Failed to read integer.\\n");\n    }\n \nprintf("You entered %d\\n", this_is_a_number1);\nprintf("Please enter another number: \\n");\nif (scanf("%d", &this_is_a_number2) == 1) {\n      printf("%d", this_is_a_number1);\n    } else {\n      printf("Failed to read integer.\\n");\n    }\nprintf("You entered %d\\n", this_is_a_number2);\ntotal = this_is_a_number1 + this_is_a_number2;/* add two numbers */\nprintf("total is %d\\n", total);\nreturn 0;\n} \n', 'tags': '', 'url': 'w2-w5.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n clear \n cd downloads \n cc gnuplot_ex1.c \n ./a.out \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '/ https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_roc_flag(img);\n \n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n   \n}\n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h> #include <gd.h> #include <math.h> \n void draw_usa_flag(gdImagePtr img); void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle); \n int main() { int width = 800; int height = (int)(width / 1.9); \n gdImagePtr img = gdImageCreateTrueColor(width, height); gdImageAlphaBlending(img, 0); \n draw_usa_flag(img); \n FILE *outputFile = fopen("./../images/usa_flag.png", "wb"); if (outputFile == NULL) { fprintf(stderr, "打开输出文件时出错。\\n"); return 1; } \n gdImagePngEx(img, outputFile, 9); fclose(outputFile); gdImageDestroy(img); \n return 0; } \n void draw_usa_flag(gdImagePtr img) { int width = gdImageSX(img); int height = gdImageSY(img); int red, white, blue; // 国旗颜色 red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹 white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹 blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形 \n int stripe_height = height / 13; int stripe_width = width; int star_size = (int)(0.0308 * height); // 星星大小 \n for (int y = 0; y < height; y += stripe_height) { if (y / stripe_height % 2 == 0) { gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red); } else { gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white); } } \n gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue); \n int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距 int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距 int star_start_x = (int)(0.125 * height); // 星星的起始X位置 int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置 \n for (int row = 0; row < 9; row++) { int starsPerRow = (row % 2 == 0) ? 6 : 5; \n // 计算2、4、6和8排星星的偏移量 int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0; \n for (int star = 0; star < starsPerRow; star++) { int x = star_start_x + star * star_spacing_x + offset_x; \n // 旋转角度（以弧度为单位） double rotation_angle = M_PI / 5; // 忘記多少度的旋转 \n int y = star_start_y + row * star_spacing_y; draw_star(img, x, y, star_size, white, rotation_angle); } } } \n void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) { gdPoint points[10]; \n for (int i = 0; i < 10; i++) { double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle; int radius = (i % 2 == 0) ? size : size / 2; points[i].x = x + radius * cos(angle); points[i].y = y + radius * sin(angle); } \n // 用指定的颜色填充星星 gdImageFilledPolygon(img, points, 10, color); } \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w12', 'text': ' #include <stdio.h>\n\nint main()\n{\n\nprintf("hello world\\n");\n} \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '雖然我還是不太會這個東西，但是我學會了用replit創倉儲，現在我遇到了一個困難，用進端ipv6好難。', 'tags': '', 'url': 'w13.html'}, {'title': 'phython', 'text': '\n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n \n \n  add 1 to 100 結束 \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n  add 1 to 100 part2 開始  \n \n \n \n \n  add 1 to 100 part2 結束 \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n', 'tags': '', 'url': 'phython.html'}, {'title': 'about', 'text': '41223139黃維凱 \n 網站: https://weikai557.github.io/cp2023 \n 倉儲:https://github.com/weikai557/cp2023 \n  程式執行 ouput 區  \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n', 'tags': '', 'url': 'about.html'}]};