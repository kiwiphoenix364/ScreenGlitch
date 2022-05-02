namespace ScreenGlitch {
//% block
//% block="Apply Blur Filter For 1 Frame Pixel Size $size"
export function SetBlurFilter(size: number) {
    let y = 0
    let x = 0
    let var1 = 0
    let var2 = 0
    let zLayer = 0
    let numwidth2 = size
    let numheight2 = size
    let buf = Buffer.create(120)
    let variable = scene.createRenderable(zLayer, (image: Image, camera: scene.Camera) => {
        image.drawRect(0, 0, 159, 119, 0)
        for (let index4 = 0; index4 < 120 / numheight2; index4++) {
            if (120 - y < size) {
                numheight2 = 120 - y
            }
            for (let index5 = 0; index5 < 160 / numwidth2; index5++) {
                if (160 - x < size) {
                    numwidth2 = 160 - x
                }
                image.drawLine(x, y, x, numheight2, image.getPixel(x + numwidth2 / 2, y + numheight2 / 2))
                if (image.getPixel(x, y) > 0) {
                    image.setPixel(x + 1, y, image.getPixel(x, y))
                }
                x += size
                numwidth2 = size
            }
            x = 0
            y += size
            numheight2 = size
        }
        y = 0
        image.setRows(x, buf)
    }


    )
    pause(20)
    variable.destroy()
}
}