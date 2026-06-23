const number_bank = [];
const odds_bank = [];
const evens_bank = [];


function add_number(n) {
    number_bank.push(n);
    render();
}

function sort1_number() {
    let shifted_num = 0;
    const odds = document.querySelector("#odds");
    const evens = document.querySelector("#evens");

    shifted_num = number_bank.shift();

    if (shifted_num % 2 === 0) {
        evens_bank.push(shifted_num);
    } else {
        odds_bank.push(shifted_num);
    }
    render();
}

function sort_all() {
    for (let i = 0; i < number_bank.length; i++) {
        if (number_bank[i] % 2 === 0) {
            evens_bank.push(number_bank[i]);
            delete number_bank[i];
        } else {
            odds_bank.push(number_bank[i]);
            delete number_bank[i];
        }
    }
    render();
}

function BankofNumbers() {
    const bank = document.createElement("h1");
    bank.textContent = number_bank.join(" ");
    console.log(number_bank);
    return bank;

}

function Numbers(type) {
    const odds = document.createElement("h1");
    const evens = document.createElement("h1");

    if (type === "odds") {
        odds.textContent = odds_bank.join(" ");
        return odds;
    } else if (type === "evens") {
        evens.textContent = evens_bank.join(" ");
        return evens;
    }
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
    app.querySelector("Numbers#odds").replaceWith(Numbers("odds"));
    app.querySelector("Numbers#evens").replaceWith(Numbers("evens"));
}

render();

