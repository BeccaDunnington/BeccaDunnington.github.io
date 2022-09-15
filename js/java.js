window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        
        if (!task) {
            alert("Enter text to add a task");
            return;
        } else {
            console.log("success");
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el)

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";

        const task_complete_el = document.createElement("button");
        task_complete_el.classList.add("complete")
        task_complete_el.innerText = "Complete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_complete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_complete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });

    const pre_task_edit_el1 = document.querySelector("#edit1");
    const pre_task_input_el1 = document.querySelector("#text1");

    pre_task_edit_el1.addEventListener('click', () => {
        if (pre_task_edit_el1.innerText.toLowerCase() == "edit") {
            pre_task_input_el1.removeAttribute("readonly");
            pre_task_input_el1.focus();
            pre_task_edit_el1.innerText = "Save";
        } else {
            pre_task_input_el1.setAttribute("readonly", "readonly");
            pre_task_edit_el1.innerText = "Edit";
        }
    });

    const pre_task_complete_el1 = document.querySelector("#complete1");
    const pre_task_el1 = document.querySelector("#task1")
    pre_task_complete_el1.addEventListener('click', () => {
        list_el.removeChild(pre_task_el1);
    });

    const pre_task_edit_el2 = document.querySelector("#edit2");
    const pre_task_input_el2 = document.querySelector("#text2");

    pre_task_edit_el2.addEventListener('click', () => {
        if (pre_task_edit_el2.innerText.toLowerCase() == "edit") {
            pre_task_input_el2.removeAttribute("readonly");
            pre_task_input_el2.focus();
            pre_task_edit_el2.innerText = "Save";
        } else {
            pre_task_input_el2.setAttribute("readonly", "readonly");
            pre_task_edit_el2.innerText = "Edit";
        }
    });

    const pre_task_complete_el2 = document.querySelector("#complete2");
    const pre_task_el2 = document.querySelector("#task2")
    pre_task_complete_el2.addEventListener('click', () => {
        list_el.removeChild(pre_task_el2);
    });

    const pre_task_edit_el3 = document.querySelector("#edit3");
    const pre_task_input_el3 = document.querySelector("#text3");

    pre_task_edit_el3.addEventListener('click', () => {
        if (pre_task_edit_el3.innerText.toLowerCase() == "edit") {
            pre_task_input_el3.removeAttribute("readonly");
            pre_task_input_el3.focus();
            pre_task_edit_el3.innerText = "Save";
        } else {
            pre_task_input_el3.setAttribute("readonly", "readonly");
            pre_task_edit_el3.innerText = "Edit";
        }
    });

    const pre_task_complete_el3 = document.querySelector("#complete3");
    const pre_task_el3 = document.querySelector("#task3")
    pre_task_complete_el3.addEventListener('click', () => {
        list_el.removeChild(pre_task_el3);
    });

    const pre_task_edit_el4 = document.querySelector("#edit4");
    const pre_task_input_el4 = document.querySelector("#text4");

    pre_task_edit_el4.addEventListener('click', () => {
        if (pre_task_edit_el4.innerText.toLowerCase() == "edit") {
            pre_task_input_el4.removeAttribute("readonly");
            pre_task_input_el4.focus();
            pre_task_edit_el4.innerText = "Save";
        } else {
            pre_task_input_el4.setAttribute("readonly", "readonly");
            pre_task_edit_el4.innerText = "Edit";
        }
    });

    const pre_task_complete_el4 = document.querySelector("#complete4");
    const pre_task_el4 = document.querySelector("#task4")
    pre_task_complete_el4.addEventListener('click', () => {
        list_el.removeChild(pre_task_el4);
    });
});