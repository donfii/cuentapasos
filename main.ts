input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(metros)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    steps = 0
})
let metros = 0
let steps = 0
basic.clearScreen()
steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 1500) {
        steps += 0.5
        basic.showNumber(steps)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        steps += 2
        basic.showNumber(steps)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 1500) {
        steps += 1
        basic.showNumber(steps)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 1500) {
        metros += 2.5
        basic.showNumber(steps)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 1500) {
        metros += 1.75
        basic.showNumber(steps)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        metros += 2
        basic.showNumber(steps)
    }
})
