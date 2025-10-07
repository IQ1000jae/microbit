OLED.init(128, 64)
for (let index = 0; index <= 100; index++) {
    OLED.drawLoading(index)
}
basic.pause(500)
OLED.clear()
basic.pause(500)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(3000)
    }
})
