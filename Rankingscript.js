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

let TeamList = []
try {
    TeamList = JSON.parse(localStorage.getItem("Teams_2022"));
    if (TeamList == null) TeamList = []
}
catch {
    TeamList = [];
}

let rank_list = []

for (let team of TeamList) {
    let tnum = team.number
    let total_data = { num: tnum, RP: 0, MP: 0, HP: 0, Auto: 0, W: 0, L: 0, T: 0, match_num: 0 }
    for (let match of MatchList) {
        if (match.result == null) continue;
        let my_data, op_data
        if (match.b1 == tnum || match.b2 == tnum || match.b3 == tnum) {
            my_data = match.result.blue.data
            op_data = match.result.red.data
        }
        else if (match.r1 == tnum || match.r2 == tnum || match.r3 == tnum) {
            my_data = match.result.red.data
            op_data = match.result.blue.data
        }
        else continue
        let my_score = my_data.MP + op_data.Penalty
        let op_score = op_data.MP + my_data.Penalty
        if (my_score < op_score) total_data.L += 1
        else if (my_score > op_score) total_data.W += 1
        else total_data.T += 1
        total_data.RP += my_data.add_RP
        total_data.MP += my_data.MP
        total_data.HP += my_data.HP
        total_data.Auto += my_data.Auto
        total_data.match_num += 1
    }
    total_data.RP += (total_data.W * 2 + total_data.T)

    rank_list.push(total_data)
}

sort_RankList()

function sort_RankList() {
    rank_list.sort((a, b) => {
        if (a.match_num == 0) {
            if (b.match_num == 0)
                return a.num - b.num
            else return 1
        }
        else {
            if (b.match_num == 0)
                return -1
        }
        if (a.RP / a.match_num == b.RP / b.match_num) {
            if (a.MP / a.match_num == b.MP / b.match_num) {
                if (a.HP / a.match_num == b.HP / b.match_num) {
                    if (a.Auto / a.match_num == b.Auto / b.match_num) {
                        return Math.floor(Math.random() * 2) * 2 - 1;
                    }
                    return b.Auto / b.match_num - a.Auto / a.match_num
                }
                return b.HP / b.match_num - a.HP / a.match_num
            }
            return b.MP / b.match_num - a.MP / a.match_num
        }
        return b.RP / b.match_num - a.RP / a.match_num
    });
}

let ResultTable = document.getElementById("ResultTable");
// Fill Table
let r_n = 0
for (let rank of rank_list) {
    // New Row
    let row = ResultTable.insertRow();
    r_n += 1

    // Set Rank #
    let td = document.createElement("td");
    td.classList.add("tb")
    td.classList.add("border1")
    let tag = document.createTextNode(String(r_n));
    td.appendChild(tag);
    row.appendChild(td);

    // Set Team Number
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(rank.num);
    td.appendChild(tag);
    row.appendChild(td);

    // Set RS
    td = document.createElement("td")
    td.classList.add("border1")
    if (rank.match_num == 0) tag = document.createTextNode("0");
    else tag = document.createTextNode(String((rank.RP / rank.match_num).toFixed(2)));
    td.appendChild(tag);
    row.appendChild(td);

    // Set AMP
    td = document.createElement("td")
    td.classList.add("border1")
    if (rank.match_num == 0) tag = document.createTextNode("0");
    else tag = document.createTextNode(String((rank.MP / rank.match_num).toFixed(2)));
    td.appendChild(tag);
    row.appendChild(td);

    // Set AHP
    td = document.createElement("td")
    td.classList.add("border1")
    if (rank.match_num == 0) tag = document.createTextNode("0");
    else tag = document.createTextNode(String((rank.HP / rank.match_num).toFixed(2)));
    td.appendChild(tag);
    row.appendChild(td);

    // Set Auto
    td = document.createElement("td");
    td.classList.add("border1")
    if (rank.match_num == 0) tag = document.createTextNode("0");
    else tag = document.createTextNode(String((rank.Auto / rank.match_num).toFixed(2)));
    td.appendChild(tag);
    row.appendChild(td);

    // Set W-L-T
    td = document.createElement("td")
    td.classList.add("border1")
    tag = document.createTextNode(String(rank.W) + "-" + String(rank.L) + "-" + String(rank.T));
    td.appendChild(tag);
    row.appendChild(td);
}
