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
        let blue_score = match.result.blue.data.MP + match.result.red.data.Penalty
        let red_score = match.result.red.data.MP + match.result.blue.data.Penalty
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
