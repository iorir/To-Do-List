let tdList = document.querySelector("#tdList");
let input = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let toDoArray = JSON.parse(localStorage.getItem("tdos")) || [];

const toggleItems = (e) => {
  let checkedItem = document.querySelector(`#checkedItem${e}`);
  let checkedSVG = document.querySelector(`#checkedSVG${e}`);
  let checkedItemText = document.querySelector(`#checkedItemText${e}`);
  checkedItem.classList.toggle("lightB");
  checkedItem.classList.toggle("text-dark");
  checkedItem.classList.toggle("text-white");
  checkedSVG.classList.toggle("invisible");
  checkedSVG.classList.toggle("visible");
  checkedItemText.classList.toggle("text-dark");
  checkedItemText.classList.toggle("text-white");
  if (toDoArray[e].isChecked === "false") {
    toDoArray[e].isChecked = "true";
    localStorage.setItem("tdos", JSON.stringify(toDoArray));
  } else {
    toDoArray[e].isChecked = "false";
    localStorage.setItem("tdos", JSON.stringify(toDoArray));
  }
};
const addFunction = () => {
  if (input.value === "") {
    alert("You didn't type anything");
  } else {
    toDoArray.push({ job: input.value, isChecked: "false" });
    localStorage.setItem("tdos", JSON.stringify(toDoArray));
    tdList.innerHTML = "";
    toDoArray.map((item, index) => {
      if (item.isChecked === "false") {
        tdList.innerHTML += `<div class="d-flex list-group-item  text-decoration justify-content-between text-dark" id="checkedItem${index}">
        <div class="flex-fill" onClick="toggleItems(${index})" >
          <i class="bi invisible bi-check-lg" id="checkedSVG${index}"></i>
          <a
            href="#"
            id="checkedItemText${index}"
            class="flex-fill ms-2 text-decoration-none text-dark"
            
            >${item.job}</a>
        </div>
        <i class="bi bi-x-lg" onClick="deleteItem(${index})"></i>
      </div>`;
      } else {
        tdList.innerHTML += `<div class="d-flex list-group-item  text-decoration justify-content-between text-white lightB" id="checkedItem${index}">
        <div class="flex-fill" onClick="toggleItems(${index})" >
          <i class="bi visible bi-check-lg" id="checkedSVG${index}"></i>
          <a
            href="#"
            id="checkedItemText${index}"
            class="flex-fill ms-2 text-decoration-none text-white"
            
            >${item.job}</a>
        </div>
        <i class="bi bi-x-lg" onClick="deleteItem(${index})"></i>
      </div>`;
      }
    });
  }
};

addButton.addEventListener("click", () => {
  addFunction();
});

if (toDoArray) {
  toDoArray.map((item, index) => {
    if (item.isChecked === "false") {
      tdList.innerHTML += `<div class="d-flex list-group-item  text-decoration justify-content-between text-dark" id="checkedItem${index}">
          <div class="flex-fill" onClick="toggleItems(${index})" >
            <i class="bi invisible bi-check-lg" id="checkedSVG${index}"></i>
            <a
              href="#"
              id="checkedItemText${index}"
              class="flex-fill ms-2 text-decoration-none text-dark"
              
              >${item.job}</a>
          </div>
          <i class="bi bi-x-lg" onClick="deleteItem(${index})"></i>
        </div>`;
    } else {
      tdList.innerHTML += `<div class="d-flex list-group-item  text-decoration justify-content-between text-white lightB" id="checkedItem${index}">
          <div class="flex-fill" onClick="toggleItems(${index})" >
            <i class="bi visible bi-check-lg" id="checkedSVG${index}"></i>
            <a
              href="#"
              id="checkedItemText${index}"
              class="flex-fill ms-2 text-decoration-none text-white"
              
              
              >${item.job}</a>
          </div>
          <i class="bi bi-x-lg" onClick="deleteItem(${index})"></i>
        </div>`;
    }
  });
}

const deleteItem = (index) => {
 
    tdList.innerHTML="";
    toDoArray.splice(index, 1);
    localStorage.setItem("tdos", JSON.stringify(toDoArray));

  toDoArray.map((item, index) => {
    if (item.isChecked === "false") {
      tdList.innerHTML += `<div class="d-flex list-group-item  text-decoration justify-content-between text-dark" id="checkedItem${index}">
              <div class="flex-fill" onClick="toggleItems(${index})" >
                <i class="bi invisible bi-check-lg" id="checkedSVG${index}"></i>
                <a
                  href="#"
                  id="checkedItemText${index}"
                  class="flex-fill ms-2 text-decoration-none text-dark"
                  
                  >${item.job}</a>
              </div>
              <i class="bi bi-x-lg" onClick="deleteItem(${index})"></i>
            </div>`;
    } else {
      tdList.innerHTML += `<div class="d-flex list-group-item  text-decoration justify-content-between text-white lightB" id="checkedItem${index}">
              <div class="flex-fill" onClick="toggleItems(${index})" >
                <i class="bi visible bi-check-lg" id="checkedSVG${index}"></i>
                <a
                  href="#"
                  id="checkedItemText${index}"
                  class="flex-fill ms-2 text-decoration-none text-white"
                  
                  
                  >${item.job}</a>
              </div>
              <i class="bi bi-x-lg" onClick="deleteItem(${index})"></i>
            </div>`;
    }
  });
};
