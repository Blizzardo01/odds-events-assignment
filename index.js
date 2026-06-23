const number_bank = [];


function add_number(n) {
    number_bank.push(n);
    render();
}

function sort1_number() {

}

function sort_all() {

}

function BankofNumbers() {
    const bank = document.createElement("h1");
    bank.textContent = number_bank.join(" ");
    console.log(number_bank);
    return bank;

}

function Numbers(array, type) {


    return;
}




function BankForm() {
    const form = document.createElement("form");
    form.innerHTML = `
        <p>Add a number to the bank</p>
        <input name="number" type="number">
        <button type="submit" name="action" value="add">Add number</button>
        <button id="sort1_button name="action" value="sort1">Sort 1</button>
        <button id="sort_button" name="action" value="sort_all">Sort All</button>
    `;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const action = event.submitter.value;
        if (action === "add") {
            const data = new FormData(form);
            add_number(Number(data.get("number")));
        }

        if (action === "sort1") {
            sort1_number();
        }

        if (action === "sort_all") {
            sort_all();
        }
    });

    form.addEventListener("sort1", (event) => {
        event.preventDefault();

        sort1_number();
    })

    form.addEventListener("sort_all", (event) => {
        event.preventDefault();

        sort_all();
    })


    return form;

}


function render() {
    const app = document.querySelector("#app"); 
    app.innerHTML = `
    <h1>Odds and Evens</h1>
    <BankForm></BankForm>
    <BankofNumbers></BankofNumbers>
    <Numbers id="odds"></Numbers>
    <Numbers id="evens"></Numbers>
    `;
    app.querySelector("BankForm").replaceWith(BankForm());
    app.querySelector("BankofNumbers").replaceWith(BankofNumbers());
    app.querySelector("Numbers#odds").replaceWith(Numbers(number_bank, "odds"));
    app.querySelector("Numbers#evens").replaceWith(Numbers(number_bank, "evens"));
}

render();

