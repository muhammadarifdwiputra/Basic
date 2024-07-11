function showFirstNameFirst() {
            var fullNameElement = document.getElementById("fullName");
            var fullName = fullNameElement.innerText.trim(); // Trim whitespace
            var nameParts = fullName.split(" ");

            if (nameParts.length === 2) {
                fullNameElement.innerText = nameParts[1] + " " + nameParts[0];
    }
}


function showLastNameFirst() {
    var fullNameElement = document.getElementById("fullName");
    var fullName = fullNameElement.innerText;
    var nameParts = fullName.split(" ");

    if (nameParts.length === 2 && nameParts[1].indexOf(",") === -1) {
        var lastNameFirst = nameParts[1] + ", " + nameParts[0];
        fullNameElement.innerText = lastNameFirst;
    } else if (nameParts.length === 2 && nameParts[1].indexOf(",") !== -1) {
        var originalName = nameParts[1].replace(",", "") + " " + nameParts[0];
        fullNameElement.innerText = originalName;
    }
}
