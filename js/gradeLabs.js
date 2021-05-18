// A teacher has created a gradeLabs function that verifies if student programming labs work. This function
// loops over an array of JavaScript objects that should contain a student property and runLab property. The
// runLab property is expected to be a function containing the student's code. The runLab function is called
// and the result is compared to the expected result. If the result and expected results don't match, then the lab is
// considered a failure.

// The gradeLabs function works for the majority of cases. However, what happens if a student named their
// function incorrectly? Run gradeLabs and pass it studentLabs2 as defined below.

function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    try {
      let lab = labs[i];
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    } catch (err) {
      throw new Error("Error thrown");
      // console.log(err.message);
    }
  }
}

let studentLabs = [
  {
    student: "Carly",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Erica",
    runLab: function (num) {
      return num * num;
    },
  },
];

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

gradeLabs(studentLabs2);
// gradeLabs(studentLabs);
