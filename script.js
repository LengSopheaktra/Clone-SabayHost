// Support
function togglePopup() {
  const popup = document.getElementById("popup-chat");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

let reginCheck1 = document.getElementById("reginCheck1");
let reginCheck2 = document.getElementById("reginCheck2");
let reginCheck3 = document.getElementById("reginCheck3");
let reginCheck4 = document.getElementById("reginCheck4");
let reginCheck5 = document.getElementById("reginCheck5");
let reginCheck6 = document.getElementById("reginCheck6");

let rsRegin = 0;
function reginCheck(n) {
  reginCheck1.checked = false;
  reginCheck2.checked = false;
  reginCheck3.checked = false;
  reginCheck4.checked = false;
  reginCheck5.checked = false;
  reginCheck6.checked = false;

  if (n == "1") {
    reginCheck1.checked = true;
    rsRegin = reginCheck1.value;
  } else if (n == "2") {
    reginCheck2.checked = true;
    rsRegin = reginCheck2.value;
  } else if (n == "3") {
    reginCheck3.checked = true;
    rsRegin = reginCheck3.value;
  } else if (n == "4") {
    reginCheck4.checked = true;
    rsRegin = reginCheck4.value;
  } else if (n == "5") {
    reginCheck5.checked = true;
    rsRegin = reginCheck5.value;
  } else if (n == "6") {
    reginCheck6.checked = true;
    rsRegin = reginCheck6.value;
  }
  document.getElementById("inputRegin").innerText = rsRegin;

  console.log(rsRegin);
}

let StorageCheck1 = document.getElementById("StorageCheck1");
let StorageCheck2 = document.getElementById("StorageCheck2");
let StorageCheck3 = document.getElementById("StorageCheck3");
let rsStorege = 0;

function StorageCheck(n) {
  StorageCheck1.checked = false;
  StorageCheck2.checked = false;
  StorageCheck3.checked = false;
  if (n == "1") {
    StorageCheck1.checked = true;
    rsStorege = StorageCheck1.value;
  } else if (n == "2") {
    StorageCheck2.checked = true;
    rsStorege = StorageCheck2.value;
  } else if (n == "3") {
    StorageCheck3.checked = true;
    rsStorege = StorageCheck3.value;
  }
  document.getElementById("inputStorage").innerText = rsStorege;
}

let termCheck1 = document.getElementById("termCheck1");
let termCheck2 = document.getElementById("termCheck2");
let termCheck3 = document.getElementById("termCheck3");

let rsTerm = 0;
let month = 0;

function termCheck(n) {
  termCheck1.checked = false;
  termCheck2.checked = false;
  termCheck3.checked = false;

  if (n == 1) {
    termCheck1.checked = true;
    rsTerm = termCheck1.value;
    document.getElementById("inputTerm").innerText = 692.94;
    month = 692.94;
  } else if (n == 2) {
    termCheck2.checked = true;
    rsTerm = termCheck2.value;
    document.getElementById("inputTerm").innerText = 1385.88;
    month = 1385.88;
  } else {
    termCheck3.checked = true;
    rsTerm = termCheck3.value;
    document.getElementById("inputTerm").innerText = 2771.76;
    month = 2771.76;
  }

  document.getElementById("month-id").innerText = rsTerm;
  // console.log(month);
  // console.log(rsTerm);
}

let imageClick1 = document.getElementById("imageCheck1");
let imageClick2 = document.getElementById("imageCheck2");
let imageClick3 = document.getElementById("imageCheck3");
let imageClick4 = document.getElementById("imageCheck4");
let imageClick5 = document.getElementById("imageCheck5");

let rsImage = 0;
function imageClick(n) {
  imageClick1.checked = false;
  imageClick2.checked = false;
  imageClick3.checked = false;
  imageClick4.checked = false;
  imageClick5.checked = false;

  if (n == 1) {
    imageClick1.checked = true;
    rsImage = imageClick1.value;
  } else if (n == 2) {
    imageClick2.checked = true;
    rsImage = imageClick2.value;
  } else if (n == 3) {
    imageClick3.checked = true;
    rsImage = imageClick3.value;
  } else if (n == 4) {
    imageClick4.checked = true;
    rsImage = imageClick4.value;
  } else if (n == 5) {
    imageClick5.checked = true;
    rsImage = imageClick5.value;
  }
  document.getElementById("inputImage").innerText = rsImage;
}

let networkCheck1 = document.getElementById("networkCheck1");
let networkCheck2 = document.getElementById("networkCheck2");
let networkCheck3 = document.getElementById("networkCheck3");
let rsNetwork = 0;

function networkCheck(n) {
  networkCheck1.checked = false;
  networkCheck2.checked = false;
  networkCheck3.checked = false;

  if (n == 1) {
    networkCheck1.checked = true;
    rsNetwork = networkCheck1.value;
  } else if (n == 2) {
    networkCheck2.checked = true;
    rsNetwork = networkCheck2.value;
  } else if (n == 3) {
    networkCheck3.checked = true;
    rsNetwork = networkCheck3.value;
  }
  document.getElementById("inputNetwork").innerText = rsNetwork;
}
let SetupFee = 2.27;

function Calculate() {
  let Calculate =
    parseFloat(rsRegin) +
    parseFloat(rsStorege) +
    parseFloat(month) +
    parseFloat(rsImage) +
    parseFloat(rsNetwork) +
    parseFloat(SetupFee);

  document.getElementById("CalRs").innerText = Calculate.toFixed(2);
}

// Loign
const container = document.querySelector(".container10");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
