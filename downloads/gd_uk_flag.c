#include <stdio.h>
#include <stdlib.h>
#include <gd.h>

int main() {
    // 設定國旗的寬度和高度
    int width = 600;
    int height = 300;

    // 初始化gd圖形物件
    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 設定顏色
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 206, 17, 38);
    int blue = gdImageColorAllocate(img, 0, 32, 91);

    // 填滿背景色
    gdImageFilledRectangle(img, 0, 0, width, height, white);

    // 畫出紅色十字
    int crossWidth = 40;
    int crossHeight = 150;
    int crossThickness = 20;

    // 水平條
    gdImageFilledRectangle(img, (width - crossWidth) / 2, (height - crossThickness) / 2,
                           (width + crossWidth) / 2, (height + crossThickness) / 2, red);

    // 垂直條
    gdImageFilledRectangle(img, (width - crossThickness) / 2, (height - crossHeight) / 2,
                           (width + crossThickness) / 2, (height + crossHeight) / 2, red);

    // 保存圖片到檔案
    FILE *outputFile = fopen("uk_flag.png", "wb");
    gdImagePng(img, outputFile);
    fclose(outputFile);

    // 釋放記憶體
    gdImageDestroy(img);

    return 0;
}