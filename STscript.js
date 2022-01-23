let rr = document.getElementById("rr")
let se = document.getElementById("se")
let add_confirm = document.getElementById("add_confirm")
let add_team = document.getElementById("Add")
let inum = document.getElementById("setNum")
let iname = document.getElementById("setName")

rr.onclick = function link_to() {
    location.href = "./MainDashBoard.html";
}

snt.onclick = function Show_Region() {

    add_team.classList.remove("d_none")
    inum.value = ""
    iname.value = ""
}

se.onclick = function Edit() {
    add_team.classList.add("d_none")
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
    add_team.classList.add("d_none")
}