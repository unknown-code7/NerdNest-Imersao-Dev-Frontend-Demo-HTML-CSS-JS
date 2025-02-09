const Facebook = document.getElementsByTagName("button")[0]
const LinkedIn = document.getElementsByTagName("button")[1]
const Instagram = document.getElementsByTagName("button")[2]
const X = document.getElementsByTagName("button")[3]

Facebook.onclick = function() {
    window.open("https://www.facebook.com/jordao.unknowncode", "_blank")
}

Facebook.onmouseenter = function() {
    Facebook.style.background = "#00ffffce"
}

Facebook.onmouseout = function() {
    Facebook.style.background = "aqua"
}

LinkedIn.onclick = function() {
    window.open("https://www.linkedin.com/in/jord%C3%A3o-paulo-654566336/", "_blank")
}

LinkedIn.onmouseenter = function() {
    LinkedIn.style.background = "#00ffffce"
}

LinkedIn.onmouseout = function() {
    LinkedIn.style.background = "aqua"
}

Instagram.onclick = function() {
    window.open("https://www.instagram.com/unknown.code2/", "_blank")
}

Instagram.onmouseenter = function() {
    Instagram.style.background = "#00ffffce"
}

Instagram.onmouseout = function() {
    Instagram.style.background = "aqua"
}

X.onclick = function() {
    window.open("https://x.com/UnknownCode007", "_blank")
}

X.onmouseenter = function() {
    X.style.background = "#00ffffce"
}

X.onmouseout = function() {
    X.style.background = "aqua"
}
