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

        div.classList.add("buttons-container-edit-delete");

        div.append(buttonEdit);
        div.append(buttonDelete);

        const containerButtonsSaveCancel = document.createElement("div");
        const buttonSave = document.createElement("button");
        const buttonCancel = document.createElement("button");

        buttonSave.innerText = "Salvar";
        buttonCancel.innerText = "Cancelar";

        buttonSave.classList.add("button-save");
        buttonCancel.classList.add("button-cancel");

        containerButtonsSaveCancel.append(buttonSave);
        containerButtonsSaveCancel.append(buttonCancel);
        containerButtonsSaveCancel.classList.add("buttons-container-save-cancel","buttons-hide");

        item.append(input);
        item.append(div);
        item.append(containerButtonsSaveCancel);

        buttonEdit.addEventListener("click", () => {
            const input = buttonEdit.parentNode.parentNode.getElementsByTagName("input")[0];
            input.disabled = false;

            const endInput = input.value.length;
            input.setSelectionRange(endInput, endInput);
            input.focus();

        
            const buttonsSaveCancel = buttonEdit.parentNode.parentNode.
            getElementsByClassName("buttons-container-save-cancel")[0];

            buttonsSaveCancel.classList.remove("buttons-hide");
            buttonEdit.parentNode.classList.add("buttons-hide");

            const contentItem = input.value;
            
            const buttonsCancel = buttonsSaveCancel.
            getElementsByClassName("button-cancel")[0];

            buttonsCancel.addEventListener("click", () => {
                input.value = contentItem;
                input.disabled = true;

                buttonsSaveCancel.classList.add("buttons-hide");
                buttonEdit.parentNode.classList.remove("buttons-hide");
                })
        })

        buttonSave.addEventListener("click", () => {

            const input =
            buttonSave.parentNode.parentNode.getElementsByTagName("input")[0];
            input.disabled = true;

            const buttonsEditDelete = buttonSave.parentNode.parentNode.
            getElementsByClassName("buttons-container-edit-delete")[0];

            buttonSave.parentNode.classList.add("buttons-hide");
            buttonsEditDelete.classList.remove("buttons-hide");
        })

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

    const buttonEdit = document.getElementsByClassName("button-edit");
    for(let button of buttonEdit){
        button.addEventListener("click", () => {
            const input = button.parentNode.parentNode.getElementsByTagName("input")[0];
            input.disabled = false;

            const endInput = input.value.length;
            input.setSelectionRange(endInput, endInput);
            input.focus();

        
            const buttonsSaveCancel = button.parentNode.parentNode.
            getElementsByClassName("buttons-container-save-cancel")[0];

            buttonsSaveCancel.classList.remove("buttons-hide");
            button.parentNode.classList.add("buttons-hide");

            const contentItem = input.value;
            
            const buttonCancel = buttonsSaveCancel.
            getElementsByClassName("button-cancel")[0];

            buttonCancel.addEventListener("click", () => {
                input.value = contentItem;
                input.disabled = true;

                buttonsSaveCancel.classList.add("buttons-hide");
                button.parentNode.classList.remove("buttons-hide");
            } )
        })
    }

    const buttonSave = document.getElementsByClassName("button-save");
    for(let button of buttonSave){
        button.addEventListener("click", () => {

            const input =
            button.parentNode.parentNode.getElementsByTagName("input")[0];
            input.disabled = true;

            const buttonsEditDelete = button.parentNode.parentNode.
            getElementsByClassName("buttons-container-edit-delete")[0];

            button.parentNode.classList.add("buttons-hide");
            buttonsEditDelete.classList.remove("buttons-hide");
        })
    }
});
