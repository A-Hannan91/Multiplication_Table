var table = prompt("Enter any No");
// document.write(`${table} x 1 = `, table * 1 + "<br>");
// document.write(`${table} x 2 = `, table * 2 + "<br>");
// document.write(`${table} x 3 = `, table * 3 + "<br>");
// document.write(`${table} x 4 = `, table * 4 + "<br>");
// document.write(`${table} x 5 = `, table * 5 + "<br>");
// document.write(`${table} x 6 = `, table * 6 + "<br>");
// document.write(`${table} x 7 = `, table * 7 + "<br>");
// document.write(`${table} x 8 = `, table * 8 + "<br>");
// document.write(`${table} x 9 = `, table * 9 + "<br>");
// document.write(`${table} x 10 = `, table * 10 + "<br>");
// document.write(`${table} x 11 = `, table * 11 + "<br>");
// document.write(`${table} x 12 = `, table * 12 + "<br>");
// document.write(`${table} x 13 = `, table * 13 + "<br>");
// document.write(`${table} x 14 = `, table * 14 + "<br>");
// document.write(`${table} x 15 = `, table * 15 + "<br>");
// document.write(`${table} x 16 = `, table * 16 + "<br>");
// document.write(`${table} x 17 = `, table * 17 + "<br>");
// document.write(`${table} x 18 = `, table * 18 + "<br>");
// document.write(`${table} x 19 = `, table * 19 + "<br>");
// document.write(`${table} x 20 = `, table * 20 + "<br>");

// while (table <= 20) {
//   document.write(`${table} x 1 = `, table * 1 + "<br>");
//   document.write(`${table} x 2 = `, table * 2 + "<br>");
//   document.write(`${table} x 3 = `, table * 3 + "<br>");
//   document.write(`${table} x 4 = `, table * 4 + "<br>");
//   document.write(`${table} x 5 = `, table * 5 + "<br>");
//   document.write(`${table} x 6 = `, table * 6 + "<br>");
//   document.write(`${table} x 7 = `, table * 7 + "<br>");
//   document.write(`${table} x 8 = `, table * 8 + "<br>");
//   document.write(`${table} x 9 = `, table * 9 + "<br>");
//   document.write(`${table} x 10 = `, table * 10 + "<br>");
//   table++;
// }

// if (table >= 21) {
//     document.write("Please Write the value under 20");
// } else {
//   document.write("The End");
// }

if (table !== null && !isNaN(table)) {
  table = parseInt(table);

  for (let i = table; i <= 20; i++) {
    document.write("<h3>" + "Table of " + i + "</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Multiplier</th><th>Result</th></tr>");
    for (let j = 1; j <= 10; j++) {
      let result = i * j;
      document.write(
        "<tr><td>" + i + " x " + j + "</td><td>" + result + "</td></tr>"
      );
    }
    document.write("</table>");
  }
} else {
  document.write("Please Write the value under 20");
}

// let inputNumber = prompt("Koi bhi number enter karein:");

// // Input ki validation
// if (inputNumber !== null && !isNaN(inputNumber)) {
//     inputNumber = parseInt(inputNumber);

//     for (let i = inputNumber; i <= 20; i++) {
//         document.write("<h2>" + i + " ke liye Table</h2>");
//         document.write("<table border='1'>");
//         document.write("<tr><th>Multiplier</th><th>Result</th></tr>");

//         for (let j = 1; j <= 10; j++) {
//             let result = i * j;
//             document.write("<tr><td>" + i + " x " + j + "</td><td>" + result + "</td></tr>");
//         }

//         document.write("</table>");
//     }
// } else {
//     alert("Please enter a valid number.");
