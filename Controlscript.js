// let ms = document.getElementById("match_select")
let rr = document.getElementById("rr")
rr.onclick = function link_to() {
    location.href = "./MainDashBoard.html";
}

let ba_L1 = document.getElementById("ba_L1") // 2
let ba_L2 = document.getElementById("ba_L2") // 2
let ba_L3 = document.getElementById("ba_L3") // 2

let ba_LH = document.getElementById("ba_LH") // 2
let ba_HH = document.getElementById("ba_HH") // 4

let bt_LH = document.getElementById("bt_LH") // 1
let bt_HH = document.getElementById("bt_HH") // 2

let bt_nh1 = document.getElementById("bt_nh1") // 0
let bt_nh2 = document.getElementById("bt_nh2") // 0
let bt_nh3 = document.getElementById("bt_nh3") // 0

let bt_lh1 = document.getElementById("bt_lh1") // 4
let bt_lh2 = document.getElementById("bt_lh2") // 4
let bt_lh3 = document.getElementById("bt_lh3") // 4

let bt_mh1 = document.getElementById("bt_mh1") // 6
let bt_mh2 = document.getElementById("bt_mh2") // 6
let bt_mh3 = document.getElementById("bt_mh3") // 6

let bt_hh1 = document.getElementById("bt_hh1") // 10
let bt_hh2 = document.getElementById("bt_hh2") // 10
let bt_hh3 = document.getElementById("bt_hh3") // 10

let bt_th1 = document.getElementById("bt_th1") // 16
let bt_th2 = document.getElementById("bt_th2") // 16
let bt_th3 = document.getElementById("bt_th3") // 16

let blue_score = document.getElementById("blue_score")


ba_L1.addEventListener("click", function () { Modified_Blue() })
ba_L2.addEventListener("click", function () { Modified_Blue() })
ba_L2.addEventListener("click", function () { Modified_Blue() })
ba_LH.addEventListener("change", function () { Modified_Blue() })
ba_HH.addEventListener("change", function () { Modified_Blue() })
bt_LH.addEventListener("change", function () { Modified_Blue() })
bt_HH.addEventListener("change", function () { Modified_Blue() })
bt_nh1.addEventListener("change", function () { Modified_Blue() })
bt_nh2.addEventListener("change", function () { Modified_Blue() })
bt_nh3.addEventListener("change", function () { Modified_Blue() })
bt_lh1.addEventListener("change", function () { Modified_Blue() })
bt_lh2.addEventListener("change", function () { Modified_Blue() })
bt_lh3.addEventListener("change", function () { Modified_Blue() })
bt_mh1.addEventListener("change", function () { Modified_Blue() })
bt_mh2.addEventListener("change", function () { Modified_Blue() })
bt_mh3.addEventListener("change", function () { Modified_Blue() })
bt_hh1.addEventListener("change", function () { Modified_Blue() })
bt_hh2.addEventListener("change", function () { Modified_Blue() })
bt_hh3.addEventListener("change", function () { Modified_Blue() })
bt_th1.addEventListener("change", function () { Modified_Blue() })
bt_th2.addEventListener("change", function () { Modified_Blue() })
bt_th3.addEventListener("change", function () { Modified_Blue() })

function Modified_Blue() {
    let total = 0
    if (ba_L1.checked) total += 2
    if (ba_L2.checked) total += 2
    if (ba_L3.checked) total += 2
    total += (Number(ba_LH.value) * 2)
    total += (Number(ba_HH.value) * 4)
    total += (Number(bt_LH.value) * 1)
    total += (Number(bt_HH.value) * 2)
    if (bt_lh1.checked) total += 4
    if (bt_lh2.checked) total += 4
    if (bt_lh3.checked) total += 4
    if (bt_mh1.checked) total += 6
    if (bt_mh2.checked) total += 6
    if (bt_mh3.checked) total += 6
    if (bt_hh1.checked) total += 10
    if (bt_hh2.checked) total += 10
    if (bt_hh3.checked) total += 10
    if (bt_th1.checked) total += 16
    if (bt_th2.checked) total += 16
    if (bt_th3.checked) total += 16
    blue_score.textContent = String(total)
}


