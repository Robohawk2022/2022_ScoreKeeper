const L = 0, H = 1
const None = 0, Low = 1, Mid = 2, High = 3, Traversal = 4

let ms = document.getElementById("match_select")

let Current_Index = -1
let MatchList = []
let BtnList = []
try {
    MatchList = JSON.parse(localStorage.getItem("Matches_2022"));
    if (MatchList == null) MatchList = []
}
catch {
    MatchList = [];
}

for (let i = 0; i < MatchList.length; ++i) {
    let btn = document.createElement("button")
    btn.classList.add("btn")
    btn.classList.add("m_10")
    btn.textContent = MatchList[i].matchnum
    if (MatchList[i].result != null) btn.classList.add("bg_g")
    btn.num = i;
    btn.addEventListener("click", Set_Match, false);
    ms.appendChild(btn);
    BtnList.push(btn)
}

let rr = document.getElementById("rr")
rr.onclick = function link_to() {
    if (Current_Index != -1)
        if (!confirm("You are editting a match. Are you sure to return to dashboard?")) return
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

let bpf = document.getElementById("bpf")
let bptf = document.getElementById("bptf")
let rpf = document.getElementById("rpf")
let rptf = document.getElementById("rptf")

bpf.addEventListener("change", function () { Modified_Red() })
bptf.addEventListener("change", function () { Modified_Red() })
rpf.addEventListener("change", function () { Modified_Blue() })
rptf.addEventListener("change", function () { Modified_Blue() })

let blue_score = document.getElementById("blue_score")


ba_L1.addEventListener("click", function () { Modified_Blue() })
ba_L2.addEventListener("click", function () { Modified_Blue() })
ba_L3.addEventListener("click", function () { Modified_Blue() })
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
    total += (Number(rpf.value) * 4)
    total += (Number(rptf.value) * 8)
    blue_score.textContent = String(total)
}

let ra_L1 = document.getElementById("ra_L1") // 2
let ra_L2 = document.getElementById("ra_L2") // 2
let ra_L3 = document.getElementById("ra_L3") // 2

let ra_LH = document.getElementById("ra_LH") // 2
let ra_HH = document.getElementById("ra_HH") // 4

let rt_LH = document.getElementById("rt_LH") // 1
let rt_HH = document.getElementById("rt_HH") // 2

let rt_nh1 = document.getElementById("rt_nh1") // 0
let rt_nh2 = document.getElementById("rt_nh2") // 0
let rt_nh3 = document.getElementById("rt_nh3") // 0

let rt_lh1 = document.getElementById("rt_lh1") // 4
let rt_lh2 = document.getElementById("rt_lh2") // 4
let rt_lh3 = document.getElementById("rt_lh3") // 4

let rt_mh1 = document.getElementById("rt_mh1") // 6
let rt_mh2 = document.getElementById("rt_mh2") // 6
let rt_mh3 = document.getElementById("rt_mh3") // 6

let rt_hh1 = document.getElementById("rt_hh1") // 10
let rt_hh2 = document.getElementById("rt_hh2") // 10
let rt_hh3 = document.getElementById("rt_hh3") // 10

let rt_th1 = document.getElementById("rt_th1") // 16
let rt_th2 = document.getElementById("rt_th2") // 16
let rt_th3 = document.getElementById("rt_th3") // 16

let red_score = document.getElementById("red_score")

ra_L1.addEventListener("click", function () { Modified_Red() })
ra_L2.addEventListener("click", function () { Modified_Red() })
ra_L3.addEventListener("click", function () { Modified_Red() })
ra_LH.addEventListener("change", function () { Modified_Red() })
ra_HH.addEventListener("change", function () { Modified_Red() })
rt_LH.addEventListener("change", function () { Modified_Red() })
rt_HH.addEventListener("change", function () { Modified_Red() })
rt_nh1.addEventListener("change", function () { Modified_Red() })
rt_nh2.addEventListener("change", function () { Modified_Red() })
rt_nh3.addEventListener("change", function () { Modified_Red() })
rt_lh1.addEventListener("change", function () { Modified_Red() })
rt_lh2.addEventListener("change", function () { Modified_Red() })
rt_lh3.addEventListener("change", function () { Modified_Red() })
rt_mh1.addEventListener("change", function () { Modified_Red() })
rt_mh2.addEventListener("change", function () { Modified_Red() })
rt_mh3.addEventListener("change", function () { Modified_Red() })
rt_hh1.addEventListener("change", function () { Modified_Red() })
rt_hh2.addEventListener("change", function () { Modified_Red() })
rt_hh3.addEventListener("change", function () { Modified_Red() })
rt_th1.addEventListener("change", function () { Modified_Red() })
rt_th2.addEventListener("change", function () { Modified_Red() })
rt_th3.addEventListener("change", function () { Modified_Red() })

function Modified_Red() {
    let total = 0
    if (ra_L1.checked) total += 2
    if (ra_L2.checked) total += 2
    if (ra_L3.checked) total += 2
    total += (Number(ra_LH.value) * 2)
    total += (Number(ra_HH.value) * 4)
    total += (Number(rt_LH.value) * 1)
    total += (Number(rt_HH.value) * 2)
    if (rt_lh1.checked) total += 4
    if (rt_lh2.checked) total += 4
    if (rt_lh3.checked) total += 4
    if (rt_mh1.checked) total += 6
    if (rt_mh2.checked) total += 6
    if (rt_mh3.checked) total += 6
    if (rt_hh1.checked) total += 10
    if (rt_hh2.checked) total += 10
    if (rt_hh3.checked) total += 10
    if (rt_th1.checked) total += 16
    if (rt_th2.checked) total += 16
    if (rt_th3.checked) total += 16
    total += (Number(bpf.value) * 4)
    total += (Number(bptf.value) * 8)
    red_score.textContent = String(total)
}

let B1 = document.getElementById("B1")
let B2 = document.getElementById("B2")
let B3 = document.getElementById("B3")
let R1 = document.getElementById("R1")
let R2 = document.getElementById("R2")
let R3 = document.getElementById("R3")

function Set_Match(event) {
    let idx = event.currentTarget.num;
    if (Current_Index == idx) {
        alert("Already select this match!")
        return
    }
    if (MatchList[idx].result != null) {
        if (!confirm("Match #" + String(MatchList[idx].matchnum) + " have summitted.\nAre you sure to edit again?"))
            return
    }
    if (Current_Index != -1) {
        if (!confirm("Match #" + String(MatchList[Current_Index].matchnum) + " is not summitted yet.\nAre you sure to exit now?"))
            return
    }
    Current_Index = idx
    set_Default()
    if (MatchList[idx].result != null) {
        let result = MatchList[idx].result

        ba_L1.checked = result.blue.auto.leave_tarmac[0]
        ba_L2.checked = result.blue.auto.leave_tarmac[1]
        ba_L3.checked = result.blue.auto.leave_tarmac[2]
        ba_LH.value = result.blue.auto.score_cargo[L]
        ba_HH.value = result.blue.auto.score_cargo[H]
        bt_LH.value = result.blue.tele.score_cargo[L]
        bt_HH.value = result.blue.tele.score_cargo[H]
        bt_nh1.checked = result.blue.tele.hung_r1[None]
        bt_nh2.checked = result.blue.tele.hung_r2[None]
        bt_nh3.checked = result.blue.tele.hung_r3[None]
        bt_lh1.checked = result.blue.tele.hung_r1[Low]
        bt_lh2.checked = result.blue.tele.hung_r2[Low]
        bt_lh3.checked = result.blue.tele.hung_r3[Low]
        bt_mh1.checked = result.blue.tele.hung_r1[Mid]
        bt_mh2.checked = result.blue.tele.hung_r2[Mid]
        bt_mh3.checked = result.blue.tele.hung_r3[Mid]
        bt_hh1.checked = result.blue.tele.hung_r1[High]
        bt_hh2.checked = result.blue.tele.hung_r2[High]
        bt_hh3.checked = result.blue.tele.hung_r3[High]
        bt_th1.checked = result.blue.tele.hung_r1[Traversal]
        bt_th2.checked = result.blue.tele.hung_r2[Traversal]
        bt_th3.checked = result.blue.tele.hung_r3[Traversal]
        bpf.value = result.blue.penalty.fuol
        bptf.value = result.blue.penalty.tech_fuol

        ra_L1.checked = result.red.auto.leave_tarmac[0]
        ra_L2.checked = result.red.auto.leave_tarmac[1]
        ra_L3.checked = result.red.auto.leave_tarmac[2]
        ra_LH.value = result.red.auto.score_cargo[L]
        ra_HH.value = result.red.auto.score_cargo[H]
        rt_LH.value = result.red.tele.score_cargo[L]
        rt_HH.value = result.red.tele.score_cargo[H]
        rt_nh1.checked = result.red.tele.hung_r1[None]
        rt_nh2.checked = result.red.tele.hung_r2[None]
        rt_nh3.checked = result.red.tele.hung_r3[None]
        rt_lh1.checked = result.red.tele.hung_r1[Low]
        rt_lh2.checked = result.red.tele.hung_r2[Low]
        rt_lh3.checked = result.red.tele.hung_r3[Low]
        rt_mh1.checked = result.red.tele.hung_r1[Mid]
        rt_mh2.checked = result.red.tele.hung_r2[Mid]
        rt_mh3.checked = result.red.tele.hung_r3[Mid]
        rt_hh1.checked = result.red.tele.hung_r1[High]
        rt_hh2.checked = result.red.tele.hung_r2[High]
        rt_hh3.checked = result.red.tele.hung_r3[High]
        rt_th1.checked = result.red.tele.hung_r1[Traversal]
        rt_th2.checked = result.red.tele.hung_r2[Traversal]
        rt_th3.checked = result.red.tele.hung_r3[Traversal]
        rpf.value = result.red.penalty.fuol
        rptf.value = result.red.penalty.tech_fuol
        Modified_Blue()
        Modified_Red()
    }
}

function set_Default() {
    if (Current_Index == -1) {
        B1.textContent = B2.textContent = B3.textContent = "XXXXX"
        R1.textContent = R2.textContent = R3.textContent = "XXXXX"
    }
    else {
        B1.textContent = MatchList[Current_Index].b1
        B2.textContent = MatchList[Current_Index].b2
        B3.textContent = MatchList[Current_Index].b3
        R1.textContent = MatchList[Current_Index].r1
        R2.textContent = MatchList[Current_Index].r2
        R3.textContent = MatchList[Current_Index].r3
    }
    ba_L1.checked = ba_L2.checked = ba_L3.checked = false
    ba_LH.value = ba_HH.value = bt_LH.value = bt_HH.value = "0"
    bt_nh1.checked = bt_nh2.checked = bt_nh3.checked = true
    bt_lh1.checked = bt_lh2.checked = bt_lh3.checked = false
    bt_mh1.checked = bt_mh2.checked = bt_mh3.checked = false
    bt_hh1.checked = bt_hh2.checked = bt_hh3.checked = false
    bt_th1.checked = bt_th2.checked = bt_th3.checked = false
    bpf.value = bptf.value = "0"

    ra_L1.checked = ra_L2.checked = ra_L3.checked = false
    ra_LH.value = ra_HH.value = rt_LH.value = rt_HH.value = "0"
    rt_nh1.checked = rt_nh2.checked = rt_nh3.checked = true
    rt_lh1.checked = rt_lh2.checked = rt_lh3.checked = false
    rt_mh1.checked = rt_mh2.checked = rt_mh3.checked = false
    rt_hh1.checked = rt_hh2.checked = rt_hh3.checked = false
    rt_th1.checked = rt_th2.checked = rt_th3.checked = false
    rpf.value = rptf.value = "0"
    Modified_Blue()
    Modified_Red()
}

let Summit_btn = document.getElementById("summit")

Summit_btn.addEventListener("click", function () {
    if (Current_Index == -1) {
        alert("Select a match first")
        return
    }
    if (confirm("Summit Match # " + MatchList[Current_Index].matchnum + " ?")) {
        MatchList[Current_Index].result = getScoreResult();
        BtnList[Current_Index].classList.add("bg_g")
        localStorage.setItem("Matches_2022", JSON.stringify(MatchList));
        Current_Index = -1
        set_Default()
    }
})

let Delete_btn = document.getElementById("delete")

Delete_btn.addEventListener("click", function () {
    if (Current_Index == -1) {
        set_Default()
        return
    }
    if (confirm("Delete Match # " + MatchList[Current_Index].matchnum + " ?\nThis match status will set to \"Unmatch\" no matter it have summitted or not before")) {
        MatchList[Current_Index].result = null
        localStorage.setItem("Matches_2022", JSON.stringify(MatchList));
        BtnList[Current_Index].classList.remove("bg_g")
        Current_Index = -1
        set_Default()

    }
})

function getScoreResult() {
    return {
        "blue": {
            "auto": {
                "leave_tarmac": [ba_L1.checked, ba_L2.checked, ba_L3.checked],
                "score_cargo": [ba_LH.value, ba_HH.value]
            },
            "tele": {
                "score_cargo": [bt_LH.value, bt_HH.value],
                "hung_r1": [bt_nh1.checked, bt_lh1.checked, bt_mh1.checked, bt_hh1.checked, bt_th1.checked],
                "hung_r2": [bt_nh2.checked, bt_lh2.checked, bt_mh2.checked, bt_hh2.checked, bt_th2.checked],
                "hung_r3": [bt_nh3.checked, bt_lh3.checked, bt_mh3.checked, bt_hh3.checked, bt_th3.checked],
            },
            "penalty": {
                "fuol": bpf.value,
                "tech_fuol": bptf.value,
            }
        },
        "red": {
            "auto": {
                "leave_tarmac": [ra_L1.checked, ra_L2.checked, ra_L3.checked],
                "score_cargo": [ra_LH.value, ra_HH.value]
            },
            "tele": {
                "score_cargo": [rt_LH.value, rt_HH.value],
                "hung_r1": [rt_nh1.checked, rt_lh1.checked, rt_mh1.checked, rt_hh1.checked, rt_th1.checked],
                "hung_r2": [rt_nh2.checked, rt_lh2.checked, rt_mh2.checked, rt_hh2.checked, rt_th2.checked],
                "hung_r3": [rt_nh3.checked, rt_lh3.checked, rt_mh3.checked, rt_hh3.checked, rt_th3.checked],
            },
            "penalty": {
                "fuol": rpf.value,
                "tech_fuol": rptf.value,
            }
        }
    }
}