let userName = "";

function nextPage() {
    userName = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;

    if (userName === "" || gender === "") {
        alert("Enter details");
        return;
    }

    document.getElementById("home").classList.remove("active");
    document.getElementById("female").classList.remove("active");
    document.getElementById("male").classList.remove("active");

    if (gender === "female") {
        document.getElementById("female").classList.add("active");
        document.getElementById("femaleHello").innerHTML = "Hello " + userName + " 💗";
    } else {
        document.getElementById("male").classList.add("active");
        document.getElementById("maleHello").innerHTML = "Hello " + userName + " 💙";
    }
}

function calculateScore(values) {
    let score = 0;

    if (values.sleep === "4 Hours") score += 30;
    else if (values.sleep === "6 Hours") score += 20;
    else score += 10;

    if (values.work === "10+ Hours") score += 30;
    else if (values.work === "8 Hours") score += 20;
    else score += 10;

    if (values.screen === "6+ Hours") score += 25;
    else if (values.screen === "3-5 Hours") score += 15;
    else score += 5;

    if (values.break === "1") score += 20;
    else score += 10;

    if (values.activity === "Never") score += 25;
    else if (values.activity === "Rarely") score += 15;
    else score += 5;

    return Math.min(score, 100);
}

function showResult(gender) {

    let values = {};

    if (gender === "female") {
        values = {
            sleep: document.getElementById("f_sleep").value,
            work: document.getElementById("f_work").value,
            screen: document.getElementById("f_screen").value,
            break: document.getElementById("f_break").value,
            activity: document.getElementById("f_activity").value
        };
    } else {
        values = {
            sleep: document.getElementById("m_sleep").value,
            work: document.getElementById("m_work").value,
            screen: document.getElementById("m_screen").value,
            break: document.getElementById("m_break").value,
            activity: document.getElementById("m_activity").value
        };
    }

    let score = calculateScore(values);

    document.getElementById("female").classList.remove("active");
    document.getElementById("male").classList.remove("active");
    document.getElementById("result").classList.add("active");

    document.getElementById("resultHello").innerText = "Hello " + userName + " ✨";
    document.getElementById("progress").style.width = score + "%";
    document.getElementById("percentage").innerText = score + "% Stress";

    if (score < 40) {
        document.getElementById("status").innerText = "LOW 😊";
        document.getElementById("reasons").innerText = "Balanced lifestyle";
        document.getElementById("suggestions").innerText = "Keep it up!";
    } 
    else if (score < 70) {
        document.getElementById("status").innerText = "MEDIUM 😐";
        document.getElementById("reasons").innerText = "Irregular habits";
        document.getElementById("suggestions").innerText = "Improve sleep & breaks";
    } 
    else {
        document.getElementById("status").innerText = "HIGH 😣";
        document.getElementById("reasons").innerText = "High workload + low rest";
        document.getElementById("suggestions").innerText = "Take rest & reduce screen time";
    }
}