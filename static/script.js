// ref to p
place = document.querySelector("#p-place");
noun = document.querySelector("#p-noun");
verb = document.querySelector("#p-verb");
adjective = document.querySelector("#p-adjective");
pluralNoun = document.querySelector("#p-plural_noun");

// ref to input fields
placeInput = document.querySelector(".place");
nounInput = document.querySelector(".noun");
verbInput = document.querySelector(".verb");
adjectiveInput = document.querySelector(".adjective");
pluralNounInput = document.querySelector(".plural_noun");

// ref to input span
sPlace = document.querySelector(".error-place");
sNoun = document.querySelector(".error-noun");
sVerb = document.querySelector(".error-verb");
sAdjective = document.querySelector(".error-adjective");
sPluralNoun = document.querySelector(".error-plural_noun");

form = document.querySelector(".question-form");

message = "Field cannot be emptied and must be at least 4 characters long.";

form.addEventListener("submit", function (evt) {

    if (placeInput.value == "" || placeInput.value.length < 3) {
        evt.preventDefault();
        sPlace.innerHTML = message;
        placeInput.focus();
    }
    else if (nounInput.value == "" || nounInput.value.length < 3) {
        evt.preventDefault();
        sNoun.innerHTML = message;
        nounInput.focus();
    }
    else if (verbInput.value == "" || verbInput.value.length < 3) {
        evt.preventDefault();
        sVerb.innerHTML = message;
        verbInput.focus();
    }
    else if (adjectiveInput.value == "" || adjectiveInput.value.length < 3) {
        evt.preventDefault();
        sAdjective.innerHTML = message;
        nounInput.focus();
    }
    else if (pluralNounInput.value == "" || pluralNounInput.value.length < 3) {
        evt.preventDefault();
        sPluralNoun.innerHTML = message;
        pluralNounInput.focus();
    }

});
