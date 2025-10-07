OLED12864_I2C.init(60)
basic.pause(500)
OLED12864_I2C.clear()
basic.pause(500)
OLED12864_I2C.showString(
2,
1.5,
"Waiting...",
1
)
basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 20) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        2,
        1.5,
        "Working...",
        1
        )
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(3000)
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        2,
        1.5,
        "Waiting...",
        1
        )
    }
})
