let rr = document.getElementById("rr")
rr.onclick = function link_to() {
    location.href = "./MainDashBoard.html";
}

let MatchList = []
try {
    MatchList = JSON.parse(localStorage.getItem("Matches_2022"));
    if (MatchList == null) MatchList = []
}
catch {
    MatchList = [];
}

let ResultTable = document.getElementById("ResultTable");
row_len = ResultTable.rows.length;
// Fill Table
let count = 0;
for (let match of MatchList) {
    // New Row
    let row = ResultTable.insertRow();

    // Set Match Number
    let td = document.createElement("td");
    td.classList.add("tb")
    td.classList.add("border1")
    let tag = document.createTextNode(match.matchnum);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Blue1
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(match.b1);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Blue2
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(match.b2);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Blue3
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(match.b3);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Red1
    td = document.createElement("td");
    td.classList.add("border1")
    tag = document.createTextNode(match.r1);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Red2
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(match.r2);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Red3
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(match.r3);
    td.appendChild(tag);
    row.appendChild(td);

    // Set Score Result
    td = document.createElement("td")
    td.classList.add("border1")
    let text = "- : -"
    if (match.result != null) {
        let red_score = Caculate_Score(match.result.red)
        let blue_score = Caculate_Score(match.result.blue)
        red_score += (Number(match.result.blue.penalty.fuol) * 4)
        red_score += (Number(match.result.blue.penalty.tech_fuol) * 8)
        blue_score += (Number(match.result.red.penalty.fuol) * 4)
        blue_score += (Number(match.result.red.penalty.tech_fuol) * 8)
        text = String(blue_score) + " : " + String(red_score)
        if (red_score > blue_score) td.classList.add("bg_r")
        else if (red_score < blue_score) td.classList.add("bg_b")
        else td.classList.add("bg_g")
    }
    tag = document.createTextNode(text);
    td.appendChild(tag);
    row.appendChild(td);

    count += 1;
}

function Caculate_Score(result) {
    let total = 0
    if (result.auto.leave_tarmac[0]) total += 2
    if (result.auto.leave_tarmac[1]) total += 2
    if (result.auto.leave_tarmac[2]) total += 2
    total += (Number(result.auto.score_cargo[0]) * 2)
    total += (Number(result.auto.score_cargo[1]) * 4)
    total += (Number(result.tele.score_cargo[0]) * 1)
    total += (Number(result.tele.score_cargo[1]) * 2)
    if (result.tele.hung_r1[1]) total += 4
    if (result.tele.hung_r2[1]) total += 4
    if (result.tele.hung_r3[1]) total += 4
    if (result.tele.hung_r1[2]) total += 6
    if (result.tele.hung_r2[2]) total += 6
    if (result.tele.hung_r3[2]) total += 6
    if (result.tele.hung_r1[3]) total += 10
    if (result.tele.hung_r2[3]) total += 10
    if (result.tele.hung_r3[3]) total += 10
    if (result.tele.hung_r1[4]) total += 15
    if (result.tele.hung_r2[4]) total += 15
    if (result.tele.hung_r3[4]) total += 15
    return total
}
