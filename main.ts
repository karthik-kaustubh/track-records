function Display_Update () {
    OLED12864_I2C.showNumber(
    0,
    0,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.left),
    1
    )
    OLED12864_I2C.showNumber(
    0,
    1,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.right),
    1
    )
    OLED12864_I2C.showNumber(
    0,
    2,
    OrientBit.getwheelDist(OrientBit.wheelSide.left),
    1
    )
    OLED12864_I2C.showNumber(
    0,
    3,
    OrientBit.getwheelDist(OrientBit.wheelSide.right),
    1
    )
    OLED12864_I2C.showNumber(
    0,
    4,
    control.millis() / 1000,
    1
    )
}
let right = 0
let left = 0
let speed = 30
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OrientBit.resetWheelRotCnt()
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
basic.forever(function () {
    left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (left == 0 && right == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else if (left == 1 && right == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        Display_Update()
    } else if (left == 1 && right == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (left == 0 && right == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorStop(maqueen.Motors.M1)
    }
    basic.pause(50)
})
