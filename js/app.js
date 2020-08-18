window.onload = function () {

    var rsvp = prompt("Would you like to go the shops (yes or no)?");
    var String3 = "You don't want to go shopping. Click the button below if you want to have another go."

    if (rsvp.toLowerCase() === "yes") {
        var spend = prompt("Great stuff! How much are you looking to spend?");
        var String1 = `You answered ${rsvp} - you want to go shopping.`;
        var String2 = `You said that you are looking to spend £${spend}.`;

        if (spend >= 30) {
            alert("Fantastic!");
        } else if (isNaN(spend)) {
            var spend = prompt("Please enter a number.");
            var String2 = `You said that you are looking to spend £${spend}.`;
            if (spend >= 30) {
                alert("Fantastic!");
            }
            if (spend < 30) {
                alert("Better be careful!");
            }

            else if (isNaN(spend)) {
                alert("You've not entered a number again. :(");
                var String2 = "You didn't enter an amount to spend.";
            }

        } else {
            alert("Better be careful!");
        }

        document.getElementById("p1").innerHTML = String1;
        document.getElementById("p2").innerHTML = String2;

    } else {
        alert("Nevermind.");
        document.getElementById("p3").innerHTML = String3;
    }

    console.log(rsvp);
    console.log(spend);

}