var table, submitButton;
//select the table
table = $("#pixelCanvas");
//select the submit button
submitButton = $(":submit");

function makeGrid() {
  // Your code goes here!
  //remove existing grid
  table.children().remove();
  // Select size input
  var Height = $("#inputHeight").val();
  var Width = $("#inputWeight").val();
  // insert rows and columns into the table
  for (var i = 0; i < Height; i++) {
    table.append("<tr></tr>");
    var tr = $("tr");
    for (var x = 0; x < Width; x++) {
      tr.last().append("<td></td>");
    }
  }
  var td = $("td");
  //Select color input
  var pickColor = $("#colorPicker");
  //when each td is clicked,set background of to value from pickColor 
  td.click(function () {
    $(this).css("background-color", pickColor.val());
  });
  //when each td is doubleclicked,set background of to white
  td.dblclick(function () {
    $(this).css("background-color", "#ffffff");
  });
}

// When size is submitted by the user, call makeGrid()
submitButton.click(function (e) {
  e.preventDefault();
  makeGrid();
});