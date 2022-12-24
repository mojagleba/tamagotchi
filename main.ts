input.onButtonPressed(Button.A, function () {
    Kosc = 1
    Akcja = 1
})
input.onButtonPressed(Button.B, function () {
    Spacer = 1
    Akcja = 1
})
let Akcja = 0
let Kosc = 0
let Spacer = 0
let Zycie = 1
let Szczescie = 10
Spacer = 0
Kosc = 0
let Najedzenie = 0
Akcja = 0
loops.everyInterval(6000, function () {
    Szczescie += -1
    if (Najedzenie > 2) {
        Spacer += -1
    }
})
basic.forever(function () {
    while (Zycie == 1) {
        if (Akcja == 1) {
            if (Szczescie < 10 && Kosc == 1) {
                basic.showLeds(`
                    . # . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # # .
                    . # . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . # . . #
                    . . # # .
                    . # . . #
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . . #
                    . . # # .
                    . # . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # . . #
                    . . # # .
                    . # . . #
                    `)
                Szczescie += 1
                basic.showIcon(IconNames.Heart)
                basic.clearScreen()
                basic.pause(500)
                basic.showIcon(IconNames.Heart)
                basic.clearScreen()
                basic.pause(500)
                Najedzenie += 1
                Kosc = 0
                Akcja = 0
            }
            if (Spacer > 0) {
                basic.showLeds(`
                    . # . . .
                    # # . # .
                    # # . # .
                    . # # # .
                    . # . # .
                    `)
                basic.showLeds(`
                    # . . . .
                    # . # . .
                    # . # # .
                    # # # . .
                    # . # . .
                    `)
                basic.showLeds(`
                    # . . . .
                    # . # . #
                    # . # . .
                    # # # . .
                    # . # . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . # . . #
                    # # . . .
                    . # . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    # . . . .
                    # . . . #
                    # . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . #
                    `)
                Najedzenie = 0
                Spacer = 0
                Akcja = 0
            }
        } else {
            if (Szczescie == 10 || Szczescie > 10) {
                basic.showLeds(`
                    . # . . #
                    # # . # .
                    # # . . #
                    . # # # .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # . # .
                    # # . . #
                    # # . # .
                    . # # # .
                    . # . # .
                    `)
            }
            if (Szczescie < 10 && Szczescie >= 5) {
                basic.showLeds(`
                    . # . . .
                    # # . # .
                    # # . . #
                    . # # # .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # . . .
                    # # . . #
                    # # . # .
                    . # # # .
                    . # . # .
                    `)
            }
            if (Szczescie < 5 && Szczescie >= 1) {
                basic.showLeds(`
                    . # . . .
                    # # . . .
                    # # . . #
                    . # # # .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # . . .
                    # # . . .
                    # # . # .
                    . # # # .
                    . # . # .
                    `)
            }
            if (Szczescie < 0 || Szczescie == 0) {
                basic.showIcon(IconNames.No)
                basic.showIcon(IconNames.No)
                basic.showIcon(IconNames.Skull)
                basic.showIcon(IconNames.Skull)
                basic.showLeds(`
                    . # . . .
                    # # # . .
                    . # . . .
                    . # . # .
                    . # # # #
                    `)
                Zycie = 0
            }
            if (Spacer < 0) {
                basic.showLeds(`
                    . # . . .
                    # # . . .
                    # # . . .
                    . # # # .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # . . .
                    # # . . .
                    # # . . .
                    . # # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # . . .
                    # # . . .
                    # # . . .
                    . # # # .
                    . # . # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . . .
                    # # # . #
                    # . # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . # .
                    . # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    . # # # .
                    `)
                Najedzenie += -1
                Spacer = 0
                Akcja = 0
            }
        }
    }
})
