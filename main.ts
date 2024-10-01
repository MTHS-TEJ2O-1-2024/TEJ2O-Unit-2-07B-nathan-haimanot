/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan
 * Created on: Oct 2024
 * This program ...
*/

let cookieNumber = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function (){
    cookieNumber +=1
    basic.showNumber(cookieNumber)
input.onButtonPressed(Button.B, function (){
    cookieNumber = 0  
    basic.showNumber(cookieNumber)

})
})