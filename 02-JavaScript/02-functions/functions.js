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
document.addEventListener("mousemove", function (event)
{
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
}
);
function setImage()
{
    let filename = document.getElementById("image-file");
    //console.log(filename);
    //let splitted_filename = filename.split('\\');
    //console.log(splitted_filename[splitted_filename.length - 1]);
    //document.getElementById("photo").src = splitted_filename[splitted_filename.length - 1];
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("photo").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
document.body.onload = function tick_timer()
{
    let time = new Date();
    document.getElementById("full-time").innerHTML = time;
    document.getElementById("hours").innerHTML =   addLeadingZero(time.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

    document.getElementById("year").innerHTML = time.getFullYear();
    document.getElementById("month").innerHTML = addLeadingZero(time.getMonth()+1);
    document.getElementById("day").innerHTML =   addLeadingZero(time.getDate());

    document.getElementById("weekday").innerHTML = time.toLocaleDateString('ru', { weekday: 'long' });

    //if (document.getElementById("show-date").checked)
    //{

    //    document.getElementById("current-date").style.visibility = "visible";
    //}
    //else
    //{
    //    document.getElementById("current-date").style.visibility = "hidden";
    //}
    //setTimeout(function, delay) �������� ������� 'function' � ��������� 'delay'

    document.getElementById("current-date").style.visibility =
        document.getElementById("show-date").checked ? "visible" : "hidden";
    document.getElementById("weekday").style.visibility =
        document.getElementById("show-weekday").checked ? "visible" : "hidden";
    setTimeout(tick_timer, 100);
}

function addLeadingZero(number)
{
    return number < 10 ? '0' + number : number;
}