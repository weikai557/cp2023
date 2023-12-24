var tipuesearch = {"pages": [{'title': 'w2', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w2-w5', 'text': 'w2 \n 說明安裝 Apps, 如何設定網路, 查驗是否正確連網 \n 說明如何利用近端可攜系統執行 C 程式, 如何利用 ChatGPT 進行對話 \n 說明如何利用 Replit 協助編輯網頁內容 \n 說明如何 connect Replit to Github, 如何建立個人網站並利用 Replit 啟動編輯網站 \n w3 \n 有關電腦輔助設計室網路設定說明 \n 處理 .replit 與 replit.nix 中的舊 Python 設定問題 \n 說明如何為 site-個人github帳號 倉儲設定 Github Pages \n 採用 Github Classroom 建立作業倉儲的問題: \n 2023/09/26 在 1a w3 課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責. \n w4-w5 \n 第四與第五週任務: \n 各學員自行建立線上考試帳號 \n 依據 \xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n 登入 Github 後, 以\xa0 https://github.com/mdecycu/cmsite \xa0作為 Template 建立 cp2023 倉儲 \n 在 Replit IDE 上啟動 cp2023 內容編輯網站, 並將改版內容推送至 Github \n 在同時登入 Github 與 Replit 的情況下, 將 Replit 帳號 connect 至 Github 帳號 \n 利用 import 將 cp2023 倉儲導入 Replit \n 設定 .replit 為 python3 main.py \n 根據 cp2023 倉儲中的 README.md 在 Shell 區執行 git submodule 與 pip install \n 以 Run 執行 main.py 啟動倉儲內容編輯網頁 \n 利用 密碼產生程式 將所選定的管理者密碼字串存入 Tool - Secrets 頁面中的 config 變數 (若無 config 環境變數設定, 動態網站登入管理者密碼將交由倉儲中的 config/config 字串進行驗證) \n 重新啟倉儲內容編輯網頁後, 以新管理者密碼登入後改版並 Convert 為靜態內容後, 在 Git 頁面中將改版內容推至 Github \n 在 Replit cp2023 專案中設定 C 程式與 Gnuplot 執行環境, 完成 上課內容中的練習 \n replit.nix \xa0 納入 gnuplot 套件 \n w5 1b cp2023 與 Replit C 程式執行環境說明影片.mp4 \n 設定過程使用的參考網站:\xa0 https://scrum-1.github.io/cp2023/content/w5.html \xa0 \n 設定過程使用的 Repl: \xa0 https://replit.com/@scrum1/cp2023 \xa0(包含 \xa0 replit.nix \xa0 設定檔案) \n 蒐集牛頓第二運動定律、mass-spring-damper 系統、Euler\'s Method 數值分析相關資料 \n 將 \xa0 euler_gnuplot_msd_ex1.c \xa0放入 downloads 目錄中, 以 cc\xa0euler_gnuplot_msd_ex1.c -o euler_gnuplot_msd_ex1 產生\xa0euler_gnuplot_msd_ex1 可執行檔案後, 以 ./euler_gnuplot_msd_ex1 執行 \n 最後可以在 images 目錄中得到 \xa0 motion_plot.png \xa0 模擬結果 \n jsliu_c_programming.pdf \xa0 (需要下載密碼) \n Introduction to C \xa0(經由校園網路或 VPN 下載) \n 指定 Github Classroom 作業: 取得 \xa0 https://github.com/mdecp2023 \xa0 帳號下的 "site-個人github帳號" 倉儲 (用於學員簡報以及期中期末評分用) \n \xa0 改由學員自行利用 \xa0 https://github.com/mdecycu/cmsite \xa0 倉儲作為 template, 建立名稱為 cp2023 的評分倉儲 . \n 近端執行: \n SciTE 與 Tiny C Compiler 若要設定為 Tools - Compile 之後產生可執行檔案 a.out, cpp.properties 設定檔案必須修改如下: \n ccopts=-pedantic -Os\n#cc=g++ $(ccopts) -c $(FileNameExt) -o $(FileName).o\n#ccc=gcc $(ccopts) -c $(FileNameExt) -o $(FileName).o\ncc=tcc.exe -run \nccc=tcc.exe -o a.out\n \nmake.command=make\n#command.compile.*.c=$(ccc) -std=c99\ncommand.compile.*.c=$(ccc) $(FileNameExt)\ncommand.build.*.c=$(make.command)\ncommand.build.*.h=$(make.command)\ncommand.clean.*.c=$(make.command) clean\ncommand.clean.*.h=$(make.command) clean\n# use tcc to run .c program\n#command.go.*.c=./$(FileName)\ncommand.go.*.c=$(cc) $(FileNameExt) \n 雲端執行: \n 範例: \xa0 https://replit.com/@wcms/cjavascriptpython \n 將位於個人 Github 帳號下的 cp2023 倉儲 (建議以 \xa0 https://github.com/mdecycu/cmsite \xa0 作為 template) import 進入 Replit, 以 git submodule update --init 取下子模組, 然後以 pip install flask flask_cors bs4 lxml pelican markdown gevent 安裝啟動編輯網站所需模組後, 將 config/config 密碼編碼移至 Secrets 頁面中的 config 變數後啟動. \n 修改 replit.nix 如下, 表示要安裝 gnuplot 套件: \n { pkgs }: {\n  deps = [\n    pkgs.gnuplot\n  ];\n} \n 之後將所練習的 C 程式置於 downloads 目錄中, 其執行影像結果存入 images 後, 分別在網頁中引用. \n Exercises: \n 請從\xa0 jsliu_c_programming.pdf \xa0 (需要下載密碼)與\xa0 Introduction to C \xa0(經由校園網路或 VPN 下載)電子書中各擷取 10 個 C 程式範例, 分別: \n \n 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Go 類編譯方式執行. \n 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Compile 編譯連結後取得 a.out, 然後在命令列中以 a.out 執行. \n 在 Replit 全球資訊網 IDE 環境中的 Shell 頁面, 以 cc ex1.c 產生可執行檔案 a.out, 並以 ./a.out 執行, 或者以 cc ex1.c -o ex1 指定編譯連結後的可執行檔案名稱為 ex1 後, 以 ./ex1 執行. \n \n 最後將所選擇的 C 程式範例執行過程與相關說明內容, 整理在 個人 github 帳號下的 cp2023 倉儲網頁 中的 c_ex 頁面中. \n 參考: \n Introduction to the C programming Language ( 1 , \xa0 2 , \xa0 3 , or \xa0 download with password ) \n 使用者輸入兩個整數後相加的 C 程式範例: \n /* Read in two integers , add them and display the answer */\n#define _CRT_SECURE_NO_WARNINGS\n#include<stdio.h>\nint main()\n{\nint this_is_a_number1, this_is_a_number2, total;\nprintf("Please enter an integer number:\\n ");\n/* read number in */\nif (scanf("%d", &this_is_a_number1) == 1) {\n      printf("%d", this_is_a_number1);\n    } else {\n        printf("Failed to read integer.\\n");\n    }\n \nprintf("You entered %d\\n", this_is_a_number1);\nprintf("Please enter another number: \\n");\nif (scanf("%d", &this_is_a_number2) == 1) {\n      printf("%d", this_is_a_number1);\n    } else {\n      printf("Failed to read integer.\\n");\n    }\nprintf("You entered %d\\n", this_is_a_number2);\ntotal = this_is_a_number1 + this_is_a_number2;/* add two numbers */\nprintf("total is %d\\n", total);\nreturn 0;\n} \n', 'tags': '', 'url': 'w2-w5.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n clear \n cd downloads \n cc gnuplot_ex1.c \n ./a.out \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '/ https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_roc_flag(img);\n \n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n   \n}\n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n clear \n cd downloads \n cc gd_roc_flag.c \n ./a.out \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\nint width = 800;\nint height = (int)(width / 1.9);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_usa_flag(img);\n\nFILE *outputFile = fopen("./../images/usa_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打开输出文件时出错。\\n");\nreturn 1;\n}\n\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\n\nreturn 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 国旗颜色\nred = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\nblue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\nint stripe_height = height / 13;\nint stripe_width = width;\nint star_size = (int)(0.0308 * height); // 星星大小\n\nfor (int y = 0; y < height; y += stripe_height) {\nif (y / stripe_height % 2 == 0) {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n} else {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n}\n}\n\ngdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\nint star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\nint star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\nint star_start_x = (int)(0.125 * height); // 星星的起始X位置\nint star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\nfor (int row = 0; row < 9; row++) {\nint starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n// 计算2、4、6和8排星星的偏移量\nint offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\nfor (int star = 0; star < starsPerRow; star++) {\nint x = star_start_x + star * star_spacing_x + offset_x;\n\n// 旋转角度（以弧度为单位）\ndouble rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\nint y = star_start_y + row * star_spacing_y;\ndraw_star(img, x, y, star_size, white, rotation_angle);\n}\n}\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\ngdPoint points[10];\n\nfor (int i = 0; i < 10; i++) {\ndouble angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\nint radius = (i % 2 == 0) ? size : size / 2;\npoints[i].x = x + radius * cos(angle);\npoints[i].y = y + radius * sin(angle);\n}\n\n// 用指定的颜色填充星星\ngdImageFilledPolygon(img, points, 10, color);\n} \n clear \n cd downloads \n cc gd_usa_flag.c \n ./a.out \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n clear \n cd downloads \n cc japan.c -lgd -lm \n ./a.out \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n cc chinese.c -lgd -lm \n ./a.out \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n \nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n \n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    // 绘制英国国旗\n    draw_uk_flag(img);\n \n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \n \n \nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n \n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n \n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n \n \n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n \n    int x1, y1, x2, y2, x3, y3;\n \n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n \n \n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n \n  int x1, y1, x2, y2, x3, y3;\n \n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n \n \n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  }\n \n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n \n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n \n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n#define WIDTH 900\n#define HEIGHT 600\n#define FILENAME "south_korea_flag.png"\n \nint main() {\n    gdImagePtr im;\n    FILE *pngout;\n    int white, black, red, blue;\n \n    im = gdImageCreate(WIDTH, HEIGHT);\n \n    white = gdImageColorAllocate(im, 255, 255, 255);\n    black = gdImageColorAllocate(im, 0, 0, 0);\n    red = gdImageColorAllocate(im, 205, 0, 0);\n    blue = gdImageColorAllocate(im, 0, 56, 168);\n \n    // Background (white)\n    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT , white);\n \n    // Blue Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 210, 30, red, gdArc);\n \n    // Red Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 30, 210, blue, gdArc);\n \n  int circleX = 385;    // 圓心的 X 座標\n  int circleY = 262.5;   // 圓心的 Y 座標\n  int circleRadius = 75;     \n \n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX, circleY, circleRadius * 2, circleRadius * 2, red);\n \n  int circleX2 = 515;    // 圓心的 X 座標\n \n int circleY2 = 337.5;\n \n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX2, circleY2, circleRadius * 2, circleRadius * 2, blue);\n \n  {\n \n \n  // 起點和終點位置\n \n  int startX = 340;    \n  // 線的起點 X 座標\n \n  int startY = 90;   \n  // 線的起點 Y 座標\n \n  int endX = 200;     \n  // 線的終點 X 座標\n \n  int endY = 260;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY -10, endX -35, endY -10, black);\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY -20, endX -70, endY -20, black);\n \n  int startX2 = 213;    \n  // 線的起點 X 座標\n \n  int startY2 = 270;   \n  // 線的起點 Y 座標\n \n  int endX2 = 133;     \n  // 線的終點 X 座標\n \n  int endY2 = 210;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX2 +3, startY2, endX2 +3, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -17, startY2 +9 , endX2 -17, endY2 +9 , white);\n \n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +115, startY2 -145, endX2 +115, endY2 -145, white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 -155, endX2 +120, endY2 -155, white);\n \n  gdImageSetThickness(im, lineWidth +12);\ngdImageLine(im, startX2 +145, startY2 -155, endX2 +145, endY2 -155, white);\n}\n  {\n    // 起點和終點位置\n \n  int startX = 330;    \n  // 線的起點 X 座標\n \n  int startY = 520;   \n  // 線的起點 Y 座標\n \n  int endX = 190;     \n  // 線的終點 X 座標\n \n  int endY = 350;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n \n  int startX2 = 213;    \n  // 線的起點 X 座標\n \n  int startY2 = 330;   \n  // 線的起點 Y 座標\n \n  int endX2 = 133;     \n  // 線的終點 X 座標\n \n  int endY2 = 390;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n \n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n \n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n \n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n \n  }\n \n  {\n    // 起點和終點位置\n \n  int startX = 564;    \n  // 線的起點 X 座標\n \n  int startY = 520;   \n  // 線的起點 Y 座標\n \n  int endX = 704;     \n  // 線的終點 X 座標\n \n  int endY = 350;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY +20, endX +70, endY +20, black);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY +10, endX +35, endY +10, black);\n \ngdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 400, 734, 490, white);\n \n  int startX2 = 553;    \n  // 線的起點 X 座標\n \n  int startY2 = 330;   \n  // 線的起點 Y 座標\n \n  int endX2 = 633;     \n  // 線的終點 X 座標\n \n  int endY2 = 390;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +139, startY2, endX2 +139, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 -9 , endX2 +157, endY2 -9 , white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 +155, endX2 +25, endY2 +155, white);\n \n  gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -3, startY2 +170, endX2 , endY2 +170, white);\n  }\n  {\n    // 起點和終點位置\n \n  int startX = 330;    \n  // 線的起點 X 座標\n \n  int startY = 520;   \n  // 線的起點 Y 座標\n \n  int endX = 190;     \n  // 線的終點 X 座標\n \n  int endY = 350;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n \n  int startX2 = 213;    \n  // 線的起點 X 座標\n \n  int startY2 = 330;   \n  // 線的起點 Y 座標\n \n  int endX2 = 133;     \n  // 線的終點 X 座標\n \n  int endY2 = 390;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n \n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n \n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n \n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n \n  }\n  {\n    // 起點和終點位置\n \n  int startX = 564;    \n  // 線的起點 X 座標\n \n  int startY = 97;   \n  // 線的起點 Y 座標\n \n  int endX = 704;     \n  // 線的終點 X 座標\n \n  int endY = 267;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY -20, endX +70, endY -20, black);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n \n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 212, 734, 118, white);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY -10, endX +35, endY -10, black);\n \n  int startX2 = 553;    \n  // 線的起點 X 座標\n \n  int startY2 = 277;   \n  // 線的起點 Y 座標\n \n  int endX2 = 633;     \n  // 線的終點 X 座標\n \n  int endY2 = 217;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +134, startY2, endX2 +134, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 +9 , endX2 +157, endY2 +9 , white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 -155, endX2 +25, endY2 -155, white);\n \n    gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -5, startY2 -155, endX2 -5, endY2 -155, white);\n \n  }\n \n    // Save image\nFILE *outputFile = fopen("./../images/korea_flag.png", "wb");\nif (outputFile == NULL) {\n    fprintf(stderr, "Error opening the output file.\\n");\n    return 1;\n}\n  gdImagePngEx(im, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(im);\n      return 0;\n  } \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '線上簡報、網誌與多媒體影片製作工具: \n Leo Editor \xa0 ( 討論群組 ) 為大綱管理系統, 可以當作程式開發的 IDE (Integrated Development Environment) 使用, 可用來編輯 reveal.js 簡報檔案中的 html 與 markdown, 也可用來編輯 Pelican 網誌 markdown 與轉檔, 並且在電腦輔助設計與分析過程中, 可以用來解讀 CoppeliaSim XML 格式檔案. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n Wink \xa0 為操作流程影片製作套件, 可以在電腦操作過程, 儲存關鍵頁面與滑鼠點擊區域後, 加上輔助文字說明後製作成 mp4 影片檔. \n ShareX \xa0 為螢幕畫面取像或錄影套件, 可以擷取電腦畫面任一區域存為影像檔, 或者結合語音說明與滑鼠操作錄製說明影片. \n OBS \xa0 為電腦廣播製作系統, 可以結合各種語音、圖像與影片製作出多元的電腦操作說明影片. \n Wink 與 ShareX 都需要 \xa0 ffmpeq.exe .', 'tags': '', 'url': 'w10.html'}, {'title': 'w12', 'text': ' #include <stdio.h>\n\nint main()\n{\n\nprintf("hello world\\n");\n} \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '雖然我還是不太會這個東西，但是我學會了用replit創倉儲，現在我遇到了一個困難，用進端ipv6好難。', 'tags': '', 'url': 'w13.html'}, {'title': 'phython', 'text': '\n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n \n \n  add 1 to 100 結束 \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n  add 1 to 100 part2 開始  \n \n \n \n \n  add 1 to 100 part2 結束 \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n', 'tags': '', 'url': 'phython.html'}, {'title': 'about', 'text': '41223139黃維凱 \n 網站: https://weikai557.github.io/cp2023 \n 倉儲:https://github.com/weikai557/cp2023 \n  程式執行 ouput 區  \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n', 'tags': '', 'url': 'about.html'}]};