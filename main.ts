if (input.lightLevel() > 60) {
    basic.showIcon(IconNames.Sad)
    pins.digitalWritePin(DigitalPin.P0, 1)
} else if (input.lightLevel() < 60) {
    basic.showIcon(IconNames.Asleep)
    pins.digitalWritePin(DigitalPin.P0, 0)
} else {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
