async function fetchUserName() {
    try {
        const response = await fetch("/_api/web/currentuser", {
            headers: { "Accept": "application/json;odata=verbose" }
        });

        if (response.ok) {
            const data = await response.json();
            const userName = data.d.Title;
            document.getElementById("personalGreeting").innerText = "Hej, " + userName + "!";
        
            document.getElementById("personalGreeting").classList.add("loaded");
        } else {
            document.getElementById("personalGreeting").innerText = "Hej, velkommen!";
        }
    } catch (error) {
        document.getElementById("personalGreeting").innerText = "Hej, velkommen!";
    }
}

fetchUserName();

// Function to set warning text
function setWarningText(line1, line2) {
    const warningTextElement = document.getElementById("warningText");
    const warningTextLine1 = document.getElementById("warningTextLine1");
    const warningTextLine2 = document.getElementById("warningTextLine2");

    if (line1 || line2) {
        warningTextLine1.innerText = line1;
        warningTextLine2.innerText = line2;
        warningTextElement.style.display = "block";
    } else {
        warningTextElement.style.display = "none";
    }
}

setWarningText("", ""); // No warning
setWarningText("Vigtigt! SeeSafe sikkerhed", "Rasmus Stuhr har ikke deltaget i torsdags loldle (Tilføjet for at fremvise et vigtigt problem, ville ikke vises normalt)"); // Uncomment to show a warning