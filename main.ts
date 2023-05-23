input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    steps = 0
    basic.showNumber(steps)
})
let steps = 0
basic.clearScreen()
steps = 0
basic.showNumber(steps)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    }
})
