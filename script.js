document.addEventListener("DOMContentLoaded", () => {
    const addItemInput = document.getElementById("input-add");

    const buttonAddItem = document.getElementsByClassName("button-add")[0];

    const listItens = document.getElementsByTagName("ul")[0];

    buttonAddItem.addEventListener("click", (event) => {
        event.preventDefault();
        addItem(addItemInput.value);
    });

    function addItem(text){
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

        div.append(buttonEdit);
        div.append(buttonDelete);

        item.append(input);
        item.append(div);
        listItens.append(item);
    };
});
