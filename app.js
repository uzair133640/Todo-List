var list = document.querySelector(".list");
var input = document.querySelector("#input");

var arr = [];

function renderList() {
    list.innerHTML = ""; // Clear previous list
    list.innerHTML = "<ol>";
    for (var i = 0; i < arr.length; i++) {
        list.innerHTML += `
            <li>
                <span>${arr[i]}</span>
                <div class="buttons">
                    <button class="edit" onclick="edit(${i})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="del" onclick="del(${i})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>
        `;
    }
    list.innerHTML += "</ol>";
}

function add() {
    if (input.value.trim()) {
        arr.push(input.value);
        input.value = "";
        renderList();
    }
}

function edit(index) {
    var newTask = prompt("Enter new task", arr[index]);
    if (newTask !== null && newTask.trim() !== "") {
        arr[index] = newTask;
        renderList();
    }
}

function del(index) {
    arr.splice(index, 1);
    renderList();
}
