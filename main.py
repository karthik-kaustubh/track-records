speed = 40

def on_forever():
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed - 40)
        maqueen.motor_stop(maqueen.Motors.ALL)
        basic.pause(100)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        basic.pause(75)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed - 40)
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed)
        basic.pause(75)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed - 40)
        basic.pause(75)
basic.forever(on_forever)
