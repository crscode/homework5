// Select everything
const dateElement = document.getElementById('date');
const saveElements = document.getElementsByClassName('save');
const contentElements = document.getElementsByClassName('content');
// select all content fields
const nineAM = document.getElementById('9am');
const tenAM = document.getElementById('10am');
const elevenAM = document.getElementById('11am');
const twelvePM = document.getElementById('12pm');
const onePM = document.getElementById('1pm');
const twoPM = document.getElementById('2pm');
const threePM = document.getElementById('3pm');
const fourPM = document.getElementById('4pm');
const fivePM = document.getElementById('5pm');

const saveNine = document.getElementById('saveNine');
const saveNineBlock = () => {
  let nineAMText = nineAM.value;
  localStorage.setItem("nine", nineAMText);
  console.log(localStorage.getItem("nine"));
}
saveNine.addEventListener("click", saveNineBlock);

const saveTen = document.getElementById('saveTen');
const saveTenBlock = () => {
  let tenAMText = tenAM.value;
  localStorage.setItem("ten", tenAMText);
  console.log(localStorage.getItem("ten"));
}
saveTen.addEventListener("click", saveTenBlock);

const saveEleven = document.getElementById('saveEleven');
const saveElevenBlock = () => {
  let elevenAMText = elevenAM.value;
  localStorage.setItem("eleven", elevenAMText);
  console.log(localStorage.getItem("eleven"));
}
saveEleven.addEventListener("click", saveElevenBlock);

const saveTwelve = document.getElementById('saveTwelve');
const saveTwelveBlock = () => {
  let twelvePMText = twelvePM.value;
  localStorage.setItem("twelve", twelvePMText);
}
saveTwelve.addEventListener("click", saveTwelveBlock);

const saveOne = document.getElementById('saveOne');
const saveOneBlock = () => {
  let onePMText = onePM.value;
  localStorage.setItem("one", onePMText);
  console.log(localStorage.getItem("one"));
}
saveOne.addEventListener("click", saveOneBlock);

const saveTwo = document.getElementById('saveTwo');
const saveTwoBlock = () => {
  let twoPMText = twoPM.value;
  localStorage.setItem("two", twoPMText);
  console.log(localStorage.getItem("two"));
}
saveTwo.addEventListener("click", saveTwoBlock);

const saveThree = document.getElementById('saveThree');
const saveThreeBlock = () => {
  let threePMText = threePM.value;
  localStorage.setItem("three", threePMText);
  console.log(localStorage.getItem("three"));
}
saveThree.addEventListener("click", saveThreeBlock);

const saveFour = document.getElementById('saveFour');
const saveFourBlock = () => {
  let fourPMText = fourPM.value;
  localStorage.setItem("four", fourPMText);
  console.log(localStorage.getItem("four"));
}
saveFour.addEventListener("click", saveFourBlock);

const saveFive = document.getElementById('saveFive');
const saveFiveBlock = () => {
  let fivePMText = fivePM.value;
  localStorage.setItem("five", fivePMText);
  console.log(localStorage.getItem("five"));
}
saveFive.addEventListener("click", saveFiveBlock);


let toDoList = [];

const initPlanner = () => {
    updateContent();
    getDateAndTime();
    checkTimes();
}

// function to display date and time at top of page
const getDateAndTime = () => {
  let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
  dateElement.innerHTML = dateAndTime;
}

const updateContent = () => {
  nineAM.innerHTML = localStorage.getItem("nine");
  tenAM.innerHTML = localStorage.getItem("ten");
  elevenAM.innerHTML = localStorage.getItem("eleven");
  twelvePM.innerHTML = localStorage.getItem("twelve");
  onePM.innerHTML = localStorage.getItem("one");
  twoPM.innerHTML = localStorage.getItem("two");
  threePM.innerHTML = localStorage.getItem("three");
  fourPM.innerHTML = localStorage.getItem("four");
  fivePM.innerHTML = localStorage.getItem("five");
}

const checkTimes = () => {
  let currentTime = moment().hour();
  if (currentTime >= 9 && currentTime < 10) {
    nineAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 10 && currentTime < 11) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 11 && currentTime < 12) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 12 && currentTime < 13) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 13 && currentTime < 14) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 14 && currentTime < 15) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#fa6c14";
  }
  else if (currentTime >= 15 && currentTime < 16) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 16 && currentTime < 17) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "#fa6c14";
  }
  else if (currentTime >= 17 && currentTime < 18) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "lightgrey";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 18) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "lightgrey";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "lightgrey";
    fivePM.setAttribute("readonly", true);
  }

}

initPlanner();
