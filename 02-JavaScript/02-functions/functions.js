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
    document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

    document.getElementById("year").innerHTML = time.getFullYear();
    document.getElementById("month").innerHTML = addLeadingZero(time.getMonth() + 1);
    document.getElementById("day").innerHTML = addLeadingZero(time.getDate());

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

let countdownTimeout;
let duration = 0;
document.getElementById("btn-start").onclick = function startCountdownTimer()
{
    let targetDate = document.getElementById("target-date");
    let targetTime = document.getElementById("target-time");
    let btnStart = document.getElementById("btn-start");
    targetDate.disabled = targetTime.disabled = !targetDate.disabled;
    if (btnStart.value === "Start")
    {
        btnStart.value = "Stop";
        if (countdownTimeout)
        {
            clearTimeout(countdownTimeout);
        }
        if (duration <= 0)
        {
            let now = new Date();
            let targetDateTime = getTargetDateTime(targetDate, targetTime);
            duration = targetDateTime - now;
        }
        tickCountDown();
    }
    else
    {
        btnStart.value = "Start";
        if (countdownTimeout)
        {
            clearTimeout(countdownTimeout);
        }
    }
}
function getTargetDateTime(targetDate, targetTime)
{
    let targetDateObj = document.getElementById("target-date").valueAsDate;
    let targetTimeObj = document.getElementById("target-time").valueAsDate;

    // ������������� ������� � ������ �������� �����
    targetDateObj.setHours(targetDateObj.getHours() + targetDateObj.getTimezoneOffset() / 60);
    targetTimeObj.setHours(targetTimeObj.getHours() + targetTimeObj.getTimezoneOffset() / 60);

    // ������������� ���� � �������
    targetTimeObj.setFullYear(targetDateObj.getFullYear());
    targetTimeObj.setMonth(targetDateObj.getMonth());
    targetTimeObj.setDate(targetDateObj.getDate());

    return targetTimeObj;
}
function tickCountDown()
{
    if (!document.getElementById("target-time").disabled) return;

    //let now = new Date();
    //console.log(`now timezoneOffset:\t${now.getTimezoneOffset()}`);
    //Controls - ��� �������� ����������
    //let targetDateControl = document.getElementById("target-date");
    //let targetTimeControl = document.getElementById("target-time");
    //let targetDate = targetDateControl.valueAsDate;
    //let targetTime = targetTimeControl.valueAsDate;

    targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset() / 60);
    targetTime.setHours(targetTime.getHours() + targetTime.getTimezoneOffset() / 60);

    //�������� ���� � ������� ������� � ��������� ����:
    //targetTime.setFullYear(targetDate.getFullYear());
    //targetTime.setMonth(targetDate.getMonth());
    //targetTime.setDate(targetDate.getDate());

    // ����������� duration � ����, ������, �������:
    /*let duration = targetTime - now; */   //�������� ��� ����������� � ������� timestamp
    duration -= 100; // ��������� �� 100 �� (�������� �������)
    if (duration <= 0)
    {
        document.getElementById("hours-unit").innerHTML = "00";
        document.getElementById("minutes-unit").innerHTML = "00";
        document.getElementById("seconds-unit").innerHTML = "00";
        document.getElementById("btn-start").value = "Start";
        duration = 0;
        return;
    }

    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    //let days = Math.floor(duration / (1000 * 60 * 60 * 24));

    //������� � �����
    document.getElementById("hours-unit").innerHTML = addLeadingZero(hours);
    document.getElementById("minutes-unit").innerHTML = addLeadingZero(minutes);
    document.getElementById("seconds-unit").innerHTML = addLeadingZero(seconds);

    //���������� ���������� ������� �� ��������� ����:
    document.getElementById("duration").innerHTML = duration;
    document.getElementById("timestamp").innerHTML = Math.trunc(duration / 1000);
    //let timestamp = Math.trunc(duration / 1000);
    //document.getElementById("timestamp").innerHTML = timestamp;

    //���������� ������� ����/����� � ���������� �� ��������:
    //document.getElementById("target-date-value").innerHTML = targetDate;
    //document.getElementById("target-time-value").innerHTML = targetTime;

    console.log(`targetTime timezoneOffset:\t${now.getTimezoneOffset()}`);

    if (document.getElementById("btn-start").value === "Stop")
    {
        setTimeout(tickCountDown, 100);
    }
}
