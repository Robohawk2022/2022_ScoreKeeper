let rr = document.getElementById("rr")
let add_confirm = document.getElementById("add_confirm")
let add_team = document.getElementById("Add")
let inum = document.getElementById("setNum")
let iname = document.getElementById("setName")
let d_none = true
let newTeam_mode = true
let TeamList = []
let curIdx

try {
    TeamList = JSON.parse(localStorage.getItem("Teams_2022"));
    if (TeamList == null) TeamList = []
}
catch {
    TeamList = [];
}
UpdateTeams()


rr.onclick = function link_to() {
    if (newTeam_mode == false) {
        if (!confirm("You are editing a team. Are you sure to return?")) return;
    }
    if (confirm("Save and reture?")) {
        localStorage.setItem("Teams_2022", JSON.stringify(TeamList));
        location.href = "./MainDashBoard.html";
    }
}

snt.onclick = function Show_Region() {
    if (newTeam_mode == false) {
        alert("You are editing team.")
        return
    }
    if (d_none) {
        add_team.classList.remove("d_none")
        inum.value = ""
        iname.value = ""
        d_none = false
    }
    else {
        d_none = true
        add_team.classList.add("d_none")
    }
}

add_confirm.onclick = function Edit() {
    if (inum.value == "") {
        alert("Number is Empty.")
        return;
    }
    if (iname.value == "") {
        alert("Name is Empty.")
        return;
    }
    if (newTeam_mode) {
        TeamList.push(newTeam(inum.value, iname.value))
    }
    else {
        TeamList[curIdx] = newTeam(inum.value, iname.value)
        newTeam_mode = true;
    }
    UpdateTeams()
    add_team.classList.add("d_none")

}

function newTeam(number, name) {
    let new_one = { "number": number, "name": name }
    return new_one
}

function Delete_Button(event) {
    if (newTeam_mode == false) {
        alert("You are editing team.")
        return
    }
    let num = event.currentTarget.num;
    if (confirm("Are you sure to delete team #" + TeamList[num].number)) {
        TeamList.splice(num, 1);
        UpdateTeams()
    }
}

function Edit_Button(event) {
    add_team.classList.remove("d_none")
    newTeam_mode = false
    curIdx = event.currentTarget.num;
}

function UpdateTeams() {
    let Teams_Table = document.getElementById("TeamTable");
    // Delete All
    row_len = Teams_Table.rows.length;
    for (let i = 1; i < row_len; ++i) {
        Teams_Table.deleteRow(1);
    }
    // Refill Table
    let count = 0;
    for (let team of TeamList) {
        // New Row
        let row = Teams_Table.insertRow();

        // Set Number
        let td = document.createElement("td");
        td.classList.add("w40")
        td.classList.add("border1")
        let tag = document.createTextNode(team.number);
        td.appendChild(tag);
        row.appendChild(td);

        // Set Name
        td = document.createElement("td");
        td.classList.add("w40")
        td.classList.add("border1")
        tag = document.createTextNode(team.name);
        td.appendChild(tag);
        row.appendChild(td);

        // Add Edit btn
        td = document.createElement("td");
        td.classList.add("w10")
        td.classList.add("border1")
        tag = document.createElement("button");
        tag.style.cssText = 'width: 15px; height: 15px; background-color: yellow;'
        tag.num = count;
        tag.addEventListener("click", Edit_Button, false);
        td.appendChild(tag);
        row.appendChild(td);

        // Add Delete btn
        td = document.createElement("td");
        td.classList.add("w10")
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