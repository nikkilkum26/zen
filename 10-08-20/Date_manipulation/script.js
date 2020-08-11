var mainDiv = document.createElement("div");
var patch = document.createElement("div");
patch.setAttribute(
  "style",
  "padding-top:20px; text-align:center; background-color: #9e8fb2;background-image: linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%); margin-top:50px; height: 500px;"
);

var heading = document.createElement("h1");
heading.innerText = "Age Calculator";
patch.appendChild(heading);
var message = document.createElement("p");
message.innerText = "The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, days, hours, minutes, and seconds and Milliseconds";
patch.appendChild(message);

var dateElement = document.createElement("input");
dateElement.setAttribute("type", "date");
dateElement.id = "dob";
dateElement.name = "dob";

dateElement.classList.add("input-elem");
patch.appendChild(dateElement);

var sepreate = document.createElement("div");
sepreate.setAttribute("style", "text-align:center;margin-top:50px");
var button = document.createElement("button");
button.innerText = "Display Age";
button.setAttribute("class", "btn btn-light");
button.setAttribute("onclick", "dateCalculation()");
sepreate.appendChild(button);
patch.appendChild(sepreate);

var displayData = document.createElement("div");
displayData.id = "display-data";

function dateCalculation() {
  var input = document.getElementById("dob").value;

  if (Date.parse(input)) {
    var inputDate = new Date(input);
    var currentDate = new Date();

    var milliSecondDiff =
      parseInt(currentDate.getTime()) - parseInt(inputDate.getTime());
    var secondDiff = mathFloor(milliSecondDiff, 1000);
    var minuteDiff = mathFloor(secondDiff, 60);
    var hrDiff = mathFloor(minuteDiff, 60);
    var dayDiff = mathFloor(hrDiff, 24);
    var monthDiff = getMonthDifference(inputDate, currentDate);
    var yearDiff = getYear(inputDate, currentDate);

    displayData.innerHTML = `
                Given input date is ${inputDate} <br>
                Year(s) : ${yearDiff}<br>
                Month(s): ${monthDiff}<br>
                Day(s) : ${dayDiff}<br>
                Hous(s) : ${hrDiff}<br>
                Minute(s) : ${minuteDiff}<br>
                Second(s) : ${secondDiff}<br>
                Milli second(s) : ${milliSecondDiff}<br>
                `;
  } else {
    displayData.innerText = "Please select Date";
  }
  patch.appendChild(displayData);
}

function mathFloor(value1, value2) {
  return Math.floor(value1 / value2);
}

function getYear(value1, value2) {
  var date1 = new Date(value1);
  var date2 = new Date(value2);
  return date2.getFullYear() - date1.getFullYear();
}

function getMonthDifference(value1, value2) {
  var year = getYear(value1, value2);
  var month = year * 12 + (value2.getMonth() - value1.getMonth());
  return month;
}
mainDiv.appendChild(patch);
document.body.appendChild(mainDiv);