import $ from "jquery"
import "./css/index.css"
import "./less/index.less"
import imgObj from "./assets/Snipaste_2022-02-25_16-45-25.png"
import "./assets/font_aci1dwqtd2p/iconfont.css"
$("#myId>li:odd").css("color", "pink")
$("#myId>li:even").css("color", "green")
let imgThe = document.createElement("img")
imgThe.src = imgObj
document.body.appendChild(imgThe)

let myI = document.createElement("i")
myI.className = "iconfont .icon-kehurenling"
document.body.appendChild(myI)

const fn = () => { console.log(666); }
console.log(fn);