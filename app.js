var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

var autobot ="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";

var decepticon ="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

window.onload = function() {

    chrs.forEach(e => {
        var elem = document.createElement("div");
        elem.innerHTML = e.number;
        elem.classList.add("character");

        var image = autobot;
        if (e.afl === "decepticon") {
            image = decepticon;
        }
        var chrVehicle = "";

        switch (e.vehicle) {
            case "truck":
                chrVehicle = "blue";
                break;
            case"tank":
                chrVehicle = "green";
                break;
            case "car":
                chrVehicle = "gold";
                break;
            case "plane":
                chrVehicle = "white";
        }

        elem.style.cssText = `background-color:${autobot, decepticon}`

        var charInfo = `<img src=${image} />
Name: ${e.name.toLocaleString()}<br>
Class: ${e.class.toUpperCase()}<br>
Vehicle: ${e.vehicle
            .toLowerCase()
            .fontcolor(chrVehicle)}`;

        elem.innerHTML = charInfo;

        elem.classList.add(e.afl);

        document.body.appendChild(elem);
    });



};