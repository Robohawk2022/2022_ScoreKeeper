let rr = document.getElementById("rr")
let snm = document.getElementById("snm")
let add_match = document.getElementById("Add")
let add_confirm = document.getElementById("add_confirm")
let iMatchnum = document.getElementById("Matchnum")
let iB1 = document.getElementById("B1")
let iB2 = document.getElementById("B2")
let iR1 = document.getElementById("R1")
let iR2 = document.getElementById("R2")
let d_none = true
let newMatch_mode = true
let TeamList = []
let MatchList = []
let curIdx

try {
    TeamList = JSON.parse(localStorage.getItem("Teams_2022"));
    if (TeamList == null) TeamList = []
}
catch {
    TeamList = [];
}

try {
    MatchList = JSON.parse(localStorage.getItem("Matches_2022"));
    if (MatchList == null) MatchList = []
}
catch {
    MatchList = [];
}

UpdateMatches()

snm.onclick = function Show_Region() {
    if (d_none) {
        add_match.classList.remove("d_none")
        iMatchnum.value = ""
        iB1.value = ""
        iB2.value = ""
        iR1.value = ""
        iR2.value = ""
        d_none = false
    }
    else {
        d_none = true
        add_match.classList.add("d_none")
    }
}

rr.onclick = function link_to() {
    if (newMatch_mode == false) {
        if (!confirm("You are editing a team. Are you sure to return?")) return;
    }
    if (confirm("Save and reture?")) {
        localStorage.setItem("Matches_2022", JSON.stringify(MatchList));
        location.href = "./MainDashBoard.html";
    }
}

add_confirm.onclick = function Edit() {
    let mnum = iMatchnum.value;
    let b1 = iB1.value;
    let b2 = iB2.value;
    let r1 = iR1.value;
    let r2 = iR2.value;

    if (mnum == "") {
        alert("Match Number is Empty.")
        return
    }
    if (newMatch_mode && !isUnique(Number(mnum))) {
        alert("Match Number is repeated.")
        return
    }
    if (b1 == "") {
        alert("\"Blue 1\" is Empty.")
        return
    }
    if (!inTeamList(b1)) {
        alert("\"Blue 1\" is not in Team List.")
        return
    }
    if (b2 == "") {
        alert("\"Blue 2\" is Empty.")
        return
    }
    if (!inTeamList(b2)) {
        alert("\"Blue 2\" is not in Team List.")
        return
    }
    if (r1 == "") {
        alert("\"Red 1\" is Empty.")
        return
    }
    if (!inTeamList(r1)) {
        alert("\"Red 1\" is not in Team List.")
        return
    }
    if (r2 == "") {
        alert("\"Red 2\" is Empty.")
        return
    }
    if (!inTeamList(r2)) {
        alert("\"Red 2\" is not in Team List.")
        return
    }

    if (newMatch_mode) {
        MatchList.push(newMatch(mnum, b1, b2, r1, r2))
    }
    else {
        MatchList[curIdx] = newMatch(mnum, b1, b2, r1, r2)
        newMatch_mode = true;
    }
    sort_MatchList()
    console.log(MatchList)
    UpdateMatches()
    add_match.classList.add("d_none")
    d_none = true
}


function sort_MatchList() {
    MatchList.sort((a, b) => {
        return a.matchnum - b.matchnum;
    });
}

function isUnique(matchnum) {
    for (let i = 0; i < MatchList.length; ++i) {
        if (MatchList[i].matchnum == matchnum)
            return false;
    }
    return true;
}

function inTeamList(teamnum) {
    for (let i = 0; i < TeamList.length; ++i) {
        if (TeamList[i].number == teamnum)
            return true;
    }
    return false;
}

function newMatch(matchnum, b1, b2, r1, r2) {
    let new_one = { "matchnum": matchnum, "b1": b1, "b2": b2, "r1": r1, "r2": r2, "result": null }
    return new_one
}

function Delete_Button(event) {
    if (newMatch_mode == false) {
        alert("You are editing a match.")
        return
    }
    let num = event.currentTarget.num;
    if (confirm("Are you sure to delete Match #" + MatchList[num].matchnum)) {
        MatchList.splice(num, 1);
        UpdateMatches()
    }
}

function Edit_Button(event) {
    curIdx = event.currentTarget.num;
    if (d_none) {
        add_match.classList.remove("d_none")
        d_none = false
    }
    iMatchnum.value = MatchList[event.currentTarget.num].matchnum
    iB1.value = MatchList[event.currentTarget.num].b1
    iB2.value = MatchList[event.currentTarget.num].b2
    iR1.value = MatchList[event.currentTarget.num].r1
    iR2.value = MatchList[event.currentTarget.num].r2
    newMatch_mode = false
}

function UpdateMatches() {
    let Match_Table = document.getElementById("MatchTable");
    // Delete All
    row_len = Match_Table.rows.length;
    for (let i = 1; i < row_len; ++i) {
        Match_Table.deleteRow(1);
    }
    // Refill Table
    let count = 0;
    for (let match of MatchList) {
        // New Row
        let row = Match_Table.insertRow();

        // Set Match Number
        let td = document.createElement("td");
        td.classList.add("w10")
        td.classList.add("border1")
        let tag = document.createTextNode(match.matchnum);
        td.appendChild(tag);
        row.appendChild(td);

        // Set Blue1
        td = document.createElement("td");
        td.classList.add("w20")
        td.classList.add("border1")
        tag = document.createTextNode(match.b1);
        td.appendChild(tag);
        row.appendChild(td);

        // Set Blue2
        td = document.createElement("td");
        td.classList.add("w20")
        td.classList.add("border1")
        tag = document.createTextNode(match.b2);
        td.appendChild(tag);
        row.appendChild(td);

        // Set Red1
        td = document.createElement("td");
        td.classList.add("w20")
        td.classList.add("border1")
        tag = document.createTextNode(match.r1);
        td.appendChild(tag);
        row.appendChild(td);

        // Set Red2
        td = document.createElement("td");
        td.classList.add("w20")
        td.classList.add("border1")
        tag = document.createTextNode(match.r2);
        td.appendChild(tag);
        row.appendChild(td);

        // Add Edit btn
        td = document.createElement("td");
        td.classList.add("w5")
        td.classList.add("border1")
        tag = document.createElement("button");
        tag.style.cssText = 'width: 15px; height: 15px; background-color: yellow;'
        tag.num = count;
        tag.addEventListener("click", Edit_Button, false);
        td.appendChild(tag);
        row.appendChild(td);

        // Add Delete btn
        td = document.createElement("td");
        td.classList.add("w5")
        td.classList.add("border1")
        tag = document.createElement("button");
        tag.style.cssText = 'width: 15px; height: 15px; background-color: red;'
        tag.num = count;
        tag.addEventListener("click", Delete_Button, false);
        td.appendChild(tag);
        row.appendChild(td);

        count += 1;
    }

}