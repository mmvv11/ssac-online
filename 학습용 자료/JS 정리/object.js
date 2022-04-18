const inputs = document.querySelectorAll("input");
for (input of inputs) {
  input.addEventListener("click", function (event) {
    alert("clicked");
  });
}

const itemList = document.querySelector("ul.item-list");

const newItem = `
<li>
    <input type="checkbox" id="item3">
    <label for="item3">새로운 아이템</label>
</li>
`;

itemList.innerHTML = itemList.innerHTML + newItem;
