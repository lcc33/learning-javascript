// const checkResult = (event) => {
//   event.preventDefault();
//   let students = [
//     // Add more students here
//     {
//       studName: `elijah precious`,
//       num: 12345,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//     {
//       studName: `love caleb`,
//       num: 12346,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//     {
//       studName: `joy yusuf`,
//       num: 12347,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//     {
//       studName: `emma king`,
//       num: 12348,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//     {
//       studName: `ibrahim ali`,
//       num: 12349,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//     {
//       studName: `zenon musa`,
//       num: 12340,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//     {
//       studName: `hamza habib`,
//       num: 12344,
//       Math: 78,
//       english: 90,
//       physics: 80,
//       chemistry: 85,
//       biology: 79,
//     },
//   ];

//   const name = document.getElementById(`name`);
//   const formNo = document.getElementById(`formNo`);
//   const resultsDiv = document.getElementById(`result`);
//   const studentFound = students.filter(
//     (item) =>
//       item.studName === name.value.toLowerCase() &&
//       item.num === Number(formNo.value)
//   );

//   if (studentFound.length > 0) {
//     document.querySelector(`.score-container`).style.display = `none`;
//     document;
//     // resultsDiv.style.display = `flex`;
//     const student = studentFound[0];

//     let tableRows = "";
//     for (let key in student) {
//       if (key !== "studName" && key !== "num") {
//         tableRows += `<tr><td>${key}</td><td>${student[key]}</td></tr>`;
//       }
//     }
//     resultsDiv.innerHTML = `<h2>${student.studName}</h2>
//     <p>Form No: ${student.num}</p>
//     <table border="1">
//       <tr><th>Subject</th><th>Score</th></tr>
//       ${tableRows}
//     </table>
//   </div>`;
//   } else {
//     outputDiv.innerHTML = "";
//     alert("No student found");
//   }
// };
// document.getElementById(`root`).addEventListener(`submit`, checkResult);

const students = [
  {
    studName: "elijah precious",
    num: 12345,
    Math: 78,
    english: 90,
    physics: 80,
    chemistry: 85,
    biology: 79,
  },
  {
    studName: "love caleb",
    num: 12346,
    Math: 88,
    english: 92,
    physics: 85,
    chemistry: 86,
    biology: 81,
  },
  {
    studName: "joy yusuf",
    num: 12347,
    Math: 75,
    english: 85,
    physics: 78,
    chemistry: 80,
    biology: 76,
  },
  {
    studName: "emma king",
    num: 12348,
    Math: 82,
    english: 88,
    physics: 83,
    chemistry: 79,
    biology: 84,
  },
  {
    studName: "ibrahim ali",
    num: 12349,
    Math: 90,
    english: 91,
    physics: 89,
    chemistry: 92,
    biology: 88,
  },
  {
    studName: "zenon musa",
    num: 12340,
    Math: 74,
    english: 79,
    physics: 70,
    chemistry: 75,
    biology: 72,
  },
  {
    studName: "hamza habib",
    num: 12344,
    Math: 84,
    english: 87,
    physics: 82,
    chemistry: 83,
    biology: 80,
  },
];

const checkResult = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.toLowerCase().trim();
  const formNoInput = Number(document.getElementById("formNo").value.trim());
  const resultBox = document.getElementById("result");
  const resultName = resultBox.querySelector("h2");
  const resultForm = resultBox.querySelector("p");
  const resultTable = resultBox.querySelector("table");
  const form = document.getElementById(`root`);

  const studentFound = students.find(
    (student) => student.studName === nameInput && student.num === formNoInput
  );

  if (studentFound) {
    // Set name and form number
    resultName.textContent = studentFound.studName.toUpperCase();
    resultForm.textContent = `Form No: ${studentFound.num}`;

    // Generate subject rows
    let tableHTML = `
      <tr>
        <th>Subject</th>
        <th>Score</th>
      </tr>
    `;
    for (let key in studentFound) {
      if (key !== "studName" && key !== "num") {
        tableHTML += `<tr><td>${key}</td><td>${studentFound[key]}</td></tr>`;
      }
    }

    // Show table and result
    form.style.display = `none`;
    resultTable.innerHTML = tableHTML;
    resultBox.style.display = "block";
  } else {
    alert("No student found. Please check your name and form number.");
    resultBox.style.display = "none";
  }
};

document.getElementById("root").addEventListener("submit", checkResult);
