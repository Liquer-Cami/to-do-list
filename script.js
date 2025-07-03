document.addEventListener("DOMContentLoaded", () => {
    const addItemInput = document.getElementById("input-add");

    const buttonAddItem = document.getElementsByClassName("button-add")[0];

    const listItens = document.getElementsByTagName("ul")[0];

    addItemInput.addEventListener("input", () => {
        if (addItemInput.value) {
            buttonAddItem.classList.remove("disable");
            buttonAddItem.disabled = false;
        } else {
            buttonAddItem.classList.add("disable");
            buttonAddItem.disabled = true;
        }
    });

    buttonAddItem.addEventListener("click", (event) => {
        event.preventDefault();
        addItem(addItemInput.value);
    });

    function addItem(text) {
        const item = document.createElement("li");
        const input = document.createElement("input");
        input.disabled = true;
        input.value = text;

        const div = document.createElement("div");
        const buttonEdit = document.createElement("button");
        const buttonDelete = document.createElement("button");

        buttonEdit.innerText = "Editar";
        buttonDelete.innerText = "Excluir";

        buttonEdit.classList.add("button-edit");
        buttonDelete.classList.add("button-delete");

        buttonDelete.addEventListener("click", () => {
            buttonDelete.parentNode.parentNode.remove();
        })

        div.classList.add("buttons-container");

        div.append(buttonEdit);
        div.append(buttonDelete);

        item.append(input);
        item.append(div);
        listItens.append(item);

        addItemInput.value = "";

        buttonAddItem.disabled = true;
        buttonAddItem.classList.add("disable");
    }

    const buttonDelete = document.getElementsByClassName("button-delete");

    for(let button of buttonDelete){
        button.addEventListener("click", () => {
            button.parentNode.parentNode.remove();
        })
    }
});
