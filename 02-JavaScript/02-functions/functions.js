// JavaScript source code
function calculatePower()
{
    let base = Number(document.getElementById('base').value);
    let exponent = Number(document.getElementById('exponent').value);
    document.getElementById('power').value = Power(base, exponent);
}

function Power(base, exponent)
{
    return base ** exponent;
}

function SwitchBackground()
{
    let switchButton = document.getElementById('switchBackground');
    //console.log(switchButton.attributes.src.nodeValue);
    //switchButton.attributes.src.nodeValue = switchButton.attributes.src.nodeValue == 'img/moon.png' ? 'img/sun.png' : 'img/moon.png';
    //if (switchButton.attributes.src.nodeValue == 'img/moon.png')
    //{
    //    switchButton.attributes.src.nodeValue = 'img/sun.png';
    //    document.body.style.background = "#262626";
    //    document.body.style.color = "white";
    //}
    //else
    //{
    //    switchButton.attributes.src.nodeValue = 'img/moon.png';
    //    document.body.style.background = "linear-gradient(to right, #999999 50%, #a6a6a6 100%)";
    //    document.body.style.color = "black";
    //}
    let delay = Number(document.getElementById("delay").value);
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    document.getElementById('switchBackground').style.transition = `background-image ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}