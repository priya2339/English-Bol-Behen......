// ============================================================
// CONFIG — INHE APNE HISAB SE BADALO
// ============================================================

// Apni deployed Apps Script Web App ka URL yaha paste karo
// (Deploy > Manage deployments > Web app URL)
// const WEB_APP_URL = "";

// // Har student ka apna login code (Name -> Code)
// const STUDENTS = {
//   "Fanija": "F00",
//   "Pooja": "P0",
//   "Anchal Gupta": "P01",
//   "Renu Patel": "P02",
//   "Bhawna Chauhan": "P03",
//   "Tikeshwari Sanwara": "P04",
//   "Payal Nagwanshi": "P05",
//   "Anurekha Nishad": "P06",
//   "Saniya Gupta": "P07",
//   "Reema Pradhan": "P08",
//   "Neelkumari Tirkey": "P09",
//   "Kavita Sahu": "P10",
//   "Yashika Bhowmick": "P11",
//   "Priya Kumari": "P12",
//   "Fulkumari Chouhan": "P13",
//   "Saniya Barik": "P14",
//   "Muskan Namdev": "P15",
//   "Preeti Gupta": "P16",
//   "Neelam Nishad": "P17",
//   "Rajshri Mishra": "P18",
//   "Anjali Chouhan": "P19",
//   "Shaili Nayak": "P20",
//   "Shanaj Khatun": "P21",
//   "Gandhari Mehar": "P22",
//   "Sanjana Nishad": "P23",
//   "Laxmi Rathia": "P24",
//   "Mamta Nishad": "P25",
//   "Ariba Parween": "P26",
//   "Mangleshwari Rathia": "P27",
//   "Akriti Sa": "P28",
//   "Hemlata Sahu": "P29",
//   "Uma Nishad": "P30",
//   "Madhuri Sahu": "P31",
//   "Anisha Gupta": "P32",
//   "Chanchal Sao": "P33",
//   "Sunita Sarthi": "P34",
//   "Dipeeka Sarthi": "P35",
//   "Manju Sahu": "P36",
//   "Arti Bishal": "P37",
//   "Aanchal Mahant": "P38",
//   "Shruti Talukdar": "P39",
//   "Babli Sidar": "P40",
//   "Jyoti Malakar": "P41",
//   "Shradha Kerketta": "P42",
//   "Khushi Kumari Singh": "P43",
//   "Priti Pradhan": "P44",
//   "Akanksha Prajapati": "P45",
//   "Doleshwari Sao": "P46",
//   "Rashmi Jaiswal": "P47",
//   "Anamika Pal": "P48",
//   "Khushboo Nishad": "P49",
//   "Tara Bhagat": "P50",
//   "Rani Singh": "P51",
//   "Jyoti Sav": "P52",
//   "Vanshika Ratre": "P53",
//   "Navnita Patail": "P54",
//   "Seema Chandra": "P55",
//   "Snehlata Ekka": "P56",
//   "Payal Kweat": "P57",
//   "Hema Sao": "P58",
//   "Pushpa Bishal": "P59",
//   "Preeti Patel": "P60",
//   "Monika Shrivas": "P61",
//   "Anita Sao": "P62",
//   "Aarti Sarthi": "P63",
//   "Karina Yadav": "P64",
//   "Pinki Sarthi": "P65",
//   "Jyoti Sahu": "P66",
//   "Pallawi Pal": "P67",
//   "Shreya Patkar": "P68",
//   "Satyabhama Mahant": "P69",
//   "Muskan Choudhary": "P70",
//   "Lata Patail": "P71",
//   "Sanju Sahu": "P72",
//   "Rakhi Bairagi": "P73",
//   "Neetu Patel": "P74",
//   "Surajamti Gupta": "P75",
//   "Prabha Rathia": "P76",
//   "Pallavi Pathak": "P77",
//   "Tanu Sarthi": "P78",
//   "Sakshi Singh": "P79",
//   "Madhuri Yadav": "P80",
//   "Mahendri Patel": "P81",
//   "Veena Choudhary": "P82",
//   "Ume Salma": "P83",
//   "Bharti Chaturvedi": "P84",
//   "Ruchi Sarthi": "P85",
//   "Pooja Paikra": "P86",
//   "Kusum Yadav": "P87",
//   "Pratima Mahant": "P88",
//   "Harshika Behra": "P89",
//   "Kavita Panada": "P90",
//   "Pooja Nayak": "P91",
//   "Varsha Nirmalkar": "P92",
//   "Kamla Mehar": "P93",
//   "Manisha Sao": "P94",
//   "Muskan Sahu": "P95",
//   "Deepika Dewangan": "P96",
//   "Masoom Sao": "P97",
//   "Reena Gopal": "P98",
//   "Divya Dewangan": "P99",
//   "Manisha Banjara": "P100",
//   "Mandvi Gupta": "P101",
//   "Duleshwari Patel": "P102",
//   "Kritika Yadav": "P103",
//   "Minakshi Rathore": "P104",
//   "Rakhi Gupta": "P105",
//   "Reshmi Sao": "P106",
//   "Roshni Chouhan": "P107",
//   "Guruwari Sahu": "P108",
//   "Bhumika Ratre": "P109",
//   "Hemkumari Sahu": "P110",
//   "Sanjana Yadav": "P111",
//   "Riya Pradhan": "P112",
//   "Aabha Gupta": "P113",
//   "Prakashini Sao": "P114",
//   "Vidya Sahu": "P115",
//   "Laxmi Sao": "P116",
//   "Khushi Sahu": "P117",
//   "Tapashwani Sahu": "P118",
//   "Usha Kaiwarty": "P119",
//   "Reena Saral": "P120",
//   "Tripti Sao": "P121",
//   "Pooja Gupta": "P122",
//   "Bharti Pradhan": "P123",
//   "Kajal Kenvat": "P124",
//   "Neha Chouhan": "P125",
//   "Shilpa Gupta": "P126",
//   "Rashmi Namdev": "P127",
//   "Hemlata Dansena": "P128",
//   "Anshika Sahu": "P129",
//   "Tomeshwari Verma": "P130",
//   "Ankita Gupta": "P131",
//   "Seeman Bareth": "P132",
//   "Varsha Pradhan": "P133",
//   "Manisha Sao2": "P134",
//   "Divya Sahu": "P135",
//   "Archana Gupta": "P136",
//   "Tisha Gupta": "P137",
//   "Alisha Pradhan": "P138",
//   "Nikeeta Mahant": "P139"
// };


// // ============================================================
// // STATE
// // ============================================================

// // Search suggestions isi local list se aayengi - server call ki
// // zarurat nahi.
// const allStudentNames = Object.keys(STUDENTS);

// let currentStudent = null;


// // ============================================================
// // ELEMENT REFERENCES
// // ============================================================

// const loginPage = document.getElementById("loginPage");
// const penaltyPage = document.getElementById("penaltyPage");
// const deductionModal = document.getElementById("deductionModal");

// const searchInput = document.getElementById("searchInput");
// const suggestionsBox = document.getElementById("suggestions");
// const codeInput = document.getElementById("codeInput");
// const errorEl = document.getElementById("error");

// const infoEl = document.getElementById("info");

// const deductionNameInput = document.getElementById("deductionName");
// const deductedByInput = document.getElementById("deductedBy");
// const reasonInput = document.getElementById("reason");
// const consequenceInput = document.getElementById("consequence");


// // ============================================================
// // INITIAL UI STATE
// // ============================================================

// function showLoginPage() {
//   loginPage.style.display = "block";
//   penaltyPage.style.display = "none";
//   deductionModal.style.display = "none";
// }

// function showPenaltyPage() {
//   loginPage.style.display = "none";
//   penaltyPage.style.display = "block";
//   deductionModal.style.display = "none";
// }

// // Page load hote hi login page dikhao, baaki hide
// showLoginPage();


// // ============================================================
// // SEARCH SUGGESTIONS
// // ============================================================

// searchInput.addEventListener("input", function () {

//   const query = searchInput.value.trim().toLowerCase();

//   suggestionsBox.innerHTML = "";

//   if (!query) {
//     return;
//   }

//   const matches = allStudentNames.filter(function (name) {
//     return name.toLowerCase().includes(query);
//   });

//   matches.slice(0, 8).forEach(function (name) {

//     const item = document.createElement("div");
//     item.className = "suggestion-item";
//     item.textContent = name;

//     item.addEventListener("click", function () {
//       searchInput.value = name;
//       suggestionsBox.innerHTML = "";
//       codeInput.focus();
//     });

//     suggestionsBox.appendChild(item);
//   });
// });

// // Kahi aur click karne pe suggestions band ho jaye
// document.addEventListener("click", function (e) {
//   if (e.target !== searchInput) {
//     suggestionsBox.innerHTML = "";
//   }
// });


// // ============================================================
// // FIND STUDENT NAME (case-insensitive exact match against STUDENTS)
// // ============================================================

// function findStudentKey(typedName) {

//   const target = typedName.trim().toLowerCase();

//   const match = allStudentNames.find(function (name) {
//     return name.toLowerCase() === target;
//   });

//   return match || null;
// }


// // ============================================================
// // LOGIN
// // ============================================================

// function login() {

//   errorEl.textContent = "";

//   const typedName = searchInput.value.trim();
//   const code = codeInput.value.trim();

//   if (!typedName) {
//     errorEl.textContent = "Please select or type a student name.";
//     return;
//   }

//   if (!code) {
//     errorEl.textContent = "Please enter the code.";
//     return;
//   }

//   const matchedName = findStudentKey(typedName);

//   if (!matchedName) {
//     errorEl.textContent = "Student not found. Select a name from the list.";
//     return;
//   }

//   if (STUDENTS[matchedName] !== code) {
//     errorEl.textContent = "Incorrect code.";
//     return;
//   }

//   errorEl.textContent = "Loading...";

//   fetch(WEB_APP_URL + "?action=getStudentData&name=" + encodeURIComponent(matchedName))
//     .then(function (res) { return res.json(); })
//     .then(function (data) {

//       if (!data.success) {
//         errorEl.textContent = data.error || "Something went wrong.";
//         return;
//       }

//       currentStudent = data;
//       errorEl.textContent = "";

//       renderStudentInfo();
//       showPenaltyPage();
//     })
//     .catch(function (err) {
//       errorEl.textContent = "Network error. Check WEB_APP_URL in script.js.";
//       console.error(err);
//     });
// }


// // ============================================================
// // RENDER STUDENT INFO
// // ============================================================

// function renderStudentInfo() {

//   if (!currentStudent) {
//     infoEl.innerHTML = "";
//     return;
//   }

//   infoEl.innerHTML =
//     "<h3>" + currentStudent.name + "</h3>" +
//     "<p>Remaining Points: <strong>" + currentStudent.points + "</strong></p>" +
//     "<p>Today's Count: <strong>" + currentStudent.count + "</strong></p>" +
//     "<p>Monthly Total: <strong>" + currentStudent.monthlyTotal + "</strong></p>";
// }


// // ============================================================
// // LOGOUT
// // ============================================================

// function logout() {

//   currentStudent = null;

//   searchInput.value = "";
//   codeInput.value = "";
//   errorEl.textContent = "";
//   infoEl.innerHTML = "";

//   showLoginPage();
// }


// // ============================================================
// // DEDUCTION MODAL
// // ============================================================

// function openDeductionForm() {

//   if (!currentStudent) {
//     return;
//   }

//   deductionNameInput.value = currentStudent.name;
//   deductedByInput.value = "";
//   reasonInput.value = "";
//   consequenceInput.value = "";

//   deductionModal.style.display = "flex";
// }

// function closeDeductionForm() {
//   deductionModal.style.display = "none";
// }


// // ============================================================
// // CONFIRM DEDUCTION
// // ============================================================

// function confirmDeduction() {

//   const deductedBy = deductedByInput.value.trim();
//   const reason = reasonInput.value.trim();
//   const consequence = consequenceInput.value.trim();

//   if (!deductedBy) {
//     alert("Please enter who is deducting the points.");
//     return;
//   }

//   if (!reason) {
//     alert("Please enter why points are being cut.");
//     return;
//   }

//   if (!consequence) {
//     alert("Please enter the consequence.");
//     return;
//   }

//   const deductBtn = document.querySelector(".deduct-btn");
//   deductBtn.disabled = true;
//   deductBtn.textContent = "Saving...";

//   fetch(WEB_APP_URL, {
//     method: "POST",
//     headers: { "Content-Type": "text/plain" },
//     body: JSON.stringify({
//       action: "deductPoints",
//       name: currentStudent.name,
//       deductedBy: deductedBy,
//       reason: reason,
//       consequence: consequence
//     })
//   })
//     .then(function (res) { return res.json(); })
//     .then(function (data) {

//       deductBtn.disabled = false;
//       deductBtn.textContent = "Deduct 2 Points";

//       if (!data.success) {
//         alert(data.error || "Something went wrong.");
//         return;
//       }

//       currentStudent.points = data.points;
//       currentStudent.count = data.count;
//       currentStudent.monthlyTotal = data.monthlyTotal;

//       renderStudentInfo();
//       closeDeductionForm();
//     })
//     .catch(function (err) {
//       deductBtn.disabled = false;
//       deductBtn.textContent = "Deduct 2 Points";
//       alert("Network error. Check WEB_APP_URL in script.js.");
//       console.error(err);
//     });
// }










// ============================================================
// CONFIG — INHE APNE HISAB SE BADALO
// ============================================================

// Apni deployed Apps Script Web App ka URL yaha paste karo
// (Deploy > Manage deployments > Web app URL)
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyXz9X5SPsLfI9wbbFQwMCywr2jsZ9kmH74o4y6U0G_YxAxHWTpExf1rb4q5Ww2vlwB/exec";

// Har student ka apna login code (Name -> Code)
const STUDENTS = {
  "Fanija": "F00",
  "Pooja": "P0",
  "Anchal Gupta": "P01",
  "Renu Patel": "P02",
  "Bhawna Chauhan": "P03",
  "Tikeshwari Sanwara": "P04",
  "Payal Nagwanshi": "P05",
  "Anurekha Nishad": "P06",
  "Saniya Gupta": "P07",
  "Reema Pradhan": "P08",
  "Neelkumari Tirkey": "P09",
  "Kavita Sahu": "P10",
  "Yashika Bhowmick": "P11",
  "Priya Kumari": "P12",
  "Fulkumari Chouhan": "P13",
  "Saniya Barik": "P14",
  "Muskan Namdev": "P15",
  "Preeti Gupta": "P16",
  "Neelam Nishad": "P17",
  "Rajshri Mishra": "P18",
  "Anjali Chouhan": "P19",
  "Shaili Nayak": "P20",
  "Shanaj Khatun": "P21",
  "Gandhari Mehar": "P22",
  "Sanjana Nishad": "P23",
  "Laxmi Rathia": "P24",
  "Mamta Nishad": "P25",
  "Ariba Parween": "P26",
  "Mangleshwari Rathia": "P27",
  "Akriti Sa": "P28",
  "Hemlata Sahu": "P29",
  "Uma Nishad": "P30",
  "Madhuri Sahu": "P31",
  "Anisha Gupta": "P32",
  "Chanchal Sao": "P33",
  "Sunita Sarthi": "P34",
  "Dipeeka Sarthi": "P35",
  "Manju Sahu": "P36",
  "Arti Bishal": "P37",
  "Aanchal Mahant": "P38",
  "Shruti Talukdar": "P39",
  "Babli Sidar": "P40",
  "Jyoti Malakar": "P41",
  "Shradha Kerketta": "P42",
  "Khushi Kumari Singh": "P43",
  "Priti Pradhan": "P44",
  "Akanksha Prajapati": "P45",
  "Doleshwari Sao": "P46",
  "Rashmi Jaiswal": "P47",
  "Anamika Pal": "P48",
  "Khushboo Nishad": "P49",
  "Tara Bhagat": "P50",
  "Rani Singh": "P51",
  "Jyoti Sav": "P52",
  "Vanshika Ratre": "P53",
  "Navnita Patail": "P54",
  "Seema Chandra": "P55",
  "Snehlata Ekka": "P56",
  "Payal Kweat": "P57",
  "Hema Sao": "P58",
  "Pushpa Bishal": "P59",
  "Preeti Patel": "P60",
  "Monika Shrivas": "P61",
  "Anita Sao": "P62",
  "Aarti Sarthi": "P63",
  "Karina Yadav": "P64",
  "Pinki Sarthi": "P65",
  "Jyoti Sahu": "P66",
  "Pallawi Pal": "P67",
  "Shreya Patkar": "P68",
  "Satyabhama Mahant": "P69",
  "Muskan Choudhary": "P70",
  "Lata Patail": "P71",
  "Sanju Sahu": "P72",
  "Rakhi Bairagi": "P73",
  "Neetu Patel": "P74",
  "Surajamti Gupta": "P75",
  "Prabha Rathia": "P76",
  "Pallavi Pathak": "P77",
  "Tanu Sarthi": "P78",
  "Sakshi Singh": "P79",
  "Madhuri Yadav": "P80",
  "Mahendri Patel": "P81",
  "Veena Choudhary": "P82",
  "Ume Salma": "P83",
  "Bharti Chaturvedi": "P84",
  "Ruchi Sarthi": "P85",
  "Pooja Paikra": "P86",
  "Kusum Yadav": "P87",
  "Pratima Mahant": "P88",
  "Harshika Behra": "P89",
  "Kavita Panada": "P90",
  "Pooja Nayak": "P91",
  "Varsha Nirmalkar": "P92",
  "Kamla Mehar": "P93",
  "Manisha Sao": "P94",
  "Muskan Sahu": "P95",
  "Deepika Dewangan": "P96",
  "Masoom Sao": "P97",
  "Reena Gopal": "P98",
  "Divya Dewangan": "P99",
  "Manisha Banjara": "P100",
  "Mandvi Gupta": "P101",
  "Duleshwari Patel": "P102",
  "Kritika Yadav": "P103",
  "Minakshi Rathore": "P104",
  "Rakhi Gupta": "P105",
  "Reshmi Sao": "P106",
  "Roshni Chouhan": "P107",
  "Guruwari Sahu": "P108",
  "Bhumika Ratre": "P109",
  "Hemkumari Sahu": "P110",
  "Sanjana Yadav": "P111",
  "Riya Pradhan": "P112",
  "Aabha Gupta": "P113",
  "Prakashini Sao": "P114",
  "Vidya Sahu": "P115",
  "Laxmi Sao": "P116",
  "Khushi Sahu": "P117",
  "Tapashwani Sahu": "P118",
  "Usha Kaiwarty": "P119",
  "Reena Saral": "P120",
  "Tripti Sao": "P121",
  "Pooja Gupta": "P122",
  "Bharti Pradhan": "P123",
  "Kajal Kenvat": "P124",
  "Neha Chouhan": "P125",
  "Shilpa Gupta": "P126",
  "Rashmi Namdev": "P127",
  "Hemlata Dansena": "P128",
  "Anshika Sahu": "P129",
  "Tomeshwari Verma": "P130",
  "Ankita Gupta": "P131",
  "Seeman Bareth": "P132",
  "Varsha Pradhan": "P133",
  "Manisha Sao2": "P134",
  "Divya Sahu": "P135",
  "Archana Gupta": "P136",
  "Tisha Gupta": "P137",
  "Alisha Pradhan": "P138",
  "Nikeeta Mahant": "P139"
};


// ============================================================
// STATE
// ============================================================

// Search suggestions isi local list se aayengi - server call ki
// zarurat nahi.
const allStudentNames = Object.keys(STUDENTS);

let currentStudent = null;


// ============================================================
// ELEMENT REFERENCES
// ============================================================

const loginPage = document.getElementById("loginPage");
const penaltyPage = document.getElementById("penaltyPage");
const deductionModal = document.getElementById("deductionModal");

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const codeInput = document.getElementById("codeInput");
const errorEl = document.getElementById("error");

const infoEl = document.getElementById("info");

const deductionNameInput = document.getElementById("deductionName");
const deductedByInput = document.getElementById("deductedBy");
const reasonInput = document.getElementById("reason");
const consequenceInput = document.getElementById("consequence");


// ============================================================
// INITIAL UI STATE
// ============================================================

function showLoginPage() {
  loginPage.style.display = "block";
  penaltyPage.style.display = "none";
  deductionModal.style.display = "none";
}

function showPenaltyPage() {
  loginPage.style.display = "none";
  penaltyPage.style.display = "block";
  deductionModal.style.display = "none";
}

// Page load hote hi login page dikhao, baaki hide
showLoginPage();


// ============================================================
// SEARCH SUGGESTIONS
// ============================================================

searchInput.addEventListener("input", function () {

  const query = searchInput.value.trim().toLowerCase();

  suggestionsBox.innerHTML = "";

  if (!query) {
    return;
  }

  const matches = allStudentNames.filter(function (name) {
    return name.toLowerCase().includes(query);
  });

  matches.slice(0, 8).forEach(function (name) {

    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.textContent = name;

    item.addEventListener("click", function () {
      searchInput.value = name;
      suggestionsBox.innerHTML = "";
      codeInput.focus();
    });

    suggestionsBox.appendChild(item);
  });
});

// Kahi aur click karne pe suggestions band ho jaye
document.addEventListener("click", function (e) {
  if (e.target !== searchInput) {
    suggestionsBox.innerHTML = "";
  }
});


// ============================================================
// FIND STUDENT NAME (case-insensitive exact match against STUDENTS)
// ============================================================

function findStudentKey(typedName) {

  const target = typedName.trim().toLowerCase();

  const match = allStudentNames.find(function (name) {
    return name.toLowerCase() === target;
  });

  return match || null;
}


// ============================================================
// LOGIN
// ============================================================

function login() {

  errorEl.textContent = "";

  const typedName = searchInput.value.trim();
  const code = codeInput.value.trim();

  if (!typedName) {
    errorEl.textContent = "Please select or type a student name.";
    return;
  }

  if (!code) {
    errorEl.textContent = "Please enter the code.";
    return;
  }

  const matchedName = findStudentKey(typedName);

  if (!matchedName) {
    errorEl.textContent = "Student not found. Select a name from the list.";
    return;
  }

  if (STUDENTS[matchedName] !== code) {
    errorEl.textContent = "Incorrect code.";
    return;
  }

  errorEl.textContent = "Loading...";

  fetch(WEB_APP_URL + "?action=getStudentData&name=" + encodeURIComponent(matchedName))
    .then(function (res) { return res.json(); })
    .then(function (data) {

      if (!data.success) {
        errorEl.textContent = data.error || "Something went wrong.";
        return;
      }

      currentStudent = data;
      errorEl.textContent = "";

      renderStudentInfo();
      showPenaltyPage();
    })
    .catch(function (err) {
      errorEl.textContent = "Network error. Check WEB_APP_URL in script.js.";
      console.error(err);
    });
}


// ============================================================
// RENDER STUDENT INFO
// ============================================================

function renderStudentInfo() {

  if (!currentStudent) {
    infoEl.innerHTML = "";
    return;
  }
}


// ============================================================
// LOGOUT
// ============================================================

function logout() {

  currentStudent = null;

  searchInput.value = "";
  codeInput.value = "";
  errorEl.textContent = "";
  infoEl.innerHTML = "";

  showLoginPage();
}


// ============================================================
// DEDUCTION MODAL
// ============================================================

function openDeductionForm() {

  if (!currentStudent) {
    return;
  }

  deductionNameInput.value = currentStudent.name;
  deductedByInput.value = "";
  reasonInput.value = "";
  consequenceInput.value = "";

  deductionModal.style.display = "flex";
}

function closeDeductionForm() {
  deductionModal.style.display = "none";
}


// ============================================================
// CONFIRM DEDUCTION
// ============================================================

function confirmDeduction() {

  const deductedBy = deductedByInput.value.trim();
  const reason = reasonInput.value.trim();
  const consequence = consequenceInput.value.trim();

  if (!deductedBy) {
    alert("Please enter who is deducting the points.");
    return;
  }

  if (!reason) {
    alert("Please enter why points are being cut.");
    return;
  }

  if (!consequence) {
    alert("Please enter the consequence.");
    return;
  }

  const deductBtn = document.querySelector(".deduct-btn");
  deductBtn.disabled = true;
  deductBtn.textContent = "Saving...";

  fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({
      action: "deductPoints",
      name: currentStudent.name,
      deductedBy: deductedBy,
      reason: reason,
      consequence: consequence
    })
  })
    .then(function (res) { return res.json(); })
    .then(function (data) {

      deductBtn.disabled = false;
      deductBtn.textContent = "Deduct 2 Points";

      if (!data.success) {
        alert(data.error || "Something went wrong.");
        return;
      }

      currentStudent.points = data.points;
      currentStudent.count = data.count;
      currentStudent.monthlyTotal = data.monthlyTotal;

      renderStudentInfo();
      closeDeductionForm();
    })
    .catch(function (err) {
      deductBtn.disabled = false;
      deductBtn.textContent = "Deduct 2 Points";
      alert("Network error. Check WEB_APP_URL in script.js.");
      console.error(err);
    });
}