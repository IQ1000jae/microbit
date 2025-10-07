OLED.init(128, 64)
for (let index = 0; index <= 100; index++) {
    OLED.drawLoading(index)
}
basic.pause(500)
OLED.clear()
basic.pause(500)
OLED.writeStringNewLine("Waiting...")
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 20) {
        OLED.clear()
        OLED.writeStringNewLine("Working...")
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(3000)
        OLED.clear()
        OLED.writeStringNewLine("Waiting...")
    }
})
