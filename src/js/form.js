const form = document.querySelector(".form");

form.addEventListener("submit", updateTheInputThatWillBeSent);
function updateTheInputThatWillBeSent() {
    const countryCode = form.querySelector("#country-code"),
        telephone = form.querySelector("#telephone-number");

    const number = `${countryCode.value}${telephone.value}`.replace(
        /[^0-9]/g,
        ""
    );

    const phone = form.querySelector("#phone");
    phone.value = number;
}

form.addEventListener("change", updateTheInputsWithTheAllowedCharacters);
function updateTheInputsWithTheAllowedCharacters(event) {
    let charactersToReplace;

    const input = event.target;
    switch (input.id) {
        case "country-code":
            charactersToReplace = /[^0-9+]/g;
            break;
        case "telephone-number":
            charactersToReplace = /[^0-9 ()-]/g;
            break;
    }
    const inputValue = input.value.replace(charactersToReplace, "");
    input.value = inputValue;
}
