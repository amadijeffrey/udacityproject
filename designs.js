//select the table
const table = $("#pixelCanvas");
//select the submit button
const submitButton = $(":submit");

function makeGrid() {
  //remove existing grid
  table.children().remove();
  // Select size input
  let Height = $("#inputHeight").val();
  let Width = $("#inputWeight").val();
  // insert rows and columns into the table
  for (let i = 0; i < Height; i++) {
    table.append("<tr></tr>");
    let tr = $("tr");
    for (let x = 0; x < Width; x++) {
      tr.last().append("<td></td>");
    }
  }
  let td = $("td");
  //Select color input
  let pickColor = $("#colorPicker");
  //when each td is clicked,set background of to value from pickColor
  td.click(function() {
    $(this).css("background-color", pickColor.val());
  });
  //when each td is doubleclicked,set background of to white
  td.dblclick(function() {
    $(this).css("background-color", "#ffffff");
  });
}

// When size is submitted by the user, call makeGrid()
submitButton.click(function(e) {
  //prevent page reload on submit
  e.preventDefault();
  makeGrid();
});
