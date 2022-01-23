let rr = document.getElementById("rr")
let snm = document.getElementById("snm")
let add_match = document.getElementById("Add")
let add_confirm = document.getElementById("add_confirm")
let iMatchnum = document.getElementById("Matchnum")
let iB1 = document.getElementById("B1")
let iB2 = document.getElementById("B2")
let iR1 = document.getElementById("R1")
let iR2 = document.getElementById("R2")

let MatchList = []
let d_none = true;
// try {
//     MatchList = JSON.parse(localStorage.getItem("Matches_2022"));
//     if (MatchList == null) MatchList = []
// }
// catch {
//     MatchList = [];
// }

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
    location.href = "./MainDashBoard.html";
    // localStorage.setItem("Matches_2022", JSON.stringify(MatchList));
}

add_confirm.onclick = function Edit() {
    let mnum = iMatchnum.value;
    let b1 = iB1.value;
    let b2 = iB2.value;
    let r1 = iR1.value;
    let r2 = iR2.value;
    if (mnum == "") {
        alert("Match Number is Empty.")
        return;
    }
    if (!isUnique(Number(mnum))) {
        alert("Match Number is repeated.")
        return;
    }
    if (b1 == "") {
        alert("\"Blue 1\" is Empty.")
        return;
    }
    if (b2 == "") {
        alert("\"Blue 2\" is Empty.")
        return;
    }
    if (r1 == "") {
        alert("\"Red 1\" is Empty.")
        return;
    }
    if (r2 == "") {
        alert("\"Red 2\" is Empty.")
        return;
    }
    MatchList.push(newMatch(mnum, b1, b2, r1, r2))
    sort_MatchList()
    console.log(MatchList)
    // if (newTeam_mode) {
    //     TeamList.push(newTeam(inum.value, iname.value))
    // }
    // else {
    //     TeamList[curIdx] = newTeam(inum.value, iname.value)
    //     newTeam_mode = true;
    // }
    // UpdateTeams()
    // add_team.classList.add("d_none")
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

// function inTeam(matchnum) {
//     for (let i = 0; i < MatchList.length; ++i) {
//         if (MatchList[i].matchnum == matchnum)
//             return false;
//     }
//     return true;
// }

function newMatch(matchnum, b1, b2, r1, r2) {
    let new_one = { "matchnum": matchnum, "b1": b1, "b2": b2, "r1": r1, "r2": r2 }
    return new_one
}