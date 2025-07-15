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
    console.log(switchButton.attributes.src.nodeValue);
    //switchButton.attributes.src.nodeValue = switchButton.attributes.src.nodeValue == 'img/moon.png' ? 'img/sun.png' : 'img/moon.png';
    if (switchButton.attributes.src.nodeValue == 'img/moon.png')
    {
        switchButton.attributes.src.nodeValue = 'img/sun.png';
        document.body.style.backgroundColor = "#262626";
        document.body.style.color = "white";
    }
    else 
    {
        switchButton.attributes.src.nodeValue = 'img/moon.png';
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}