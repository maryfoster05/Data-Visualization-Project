let sel;
let cnv;
let table;
let currentRow;
let moneyStack;

function preload() {
  table = loadTable("data/final_category_by_year_df.csv", 'csv', 'header');
}

function setup() {
  cnv = createCanvas(windowWidth, 400);
  cnv.parent("myP5");

  moneyStack = new MoneyStack(10, 0, 10);

  initializeSelection();
  windowResized();
}

function draw() {
  background('blue');

  fill(255);
  text(currentRow.getString("Survey Year"), 20, 20);

  let w = currentRow.getString("Salary Difference") / 10000;
  // ellipse(width/2, height/2, w);

  moneyStack.display();
  moneyStack.update();
}

/////////////////////
// DROPDOWN
function initializeSelection() {
  sel = createSelect();
  sel.parent("dataDropdown");
  sel.option('Salary Comparison');
  sel.option('Recruiting Expenses Comparison');
  sel.option('Student Aid Comparion');
  sel.changed(mySelectEvent);

  currentColumn = table.getColumn(1);
}

function mySelectEvent() {
  let currentComparison = sel.value();

  if (currentComparison == "Salary Comparison") {
    currentColumn = table.getColumn(1);
    currentColumn = table.getColumn(1);
  }
  else if (currentYear == "Recruiting Expenses Comparison") {
    currentColumn = table.getColumn(3);
    currentColumn = table.getColumn(4);
  }
  else {
    currentColumn = table.getColumn(5);
    currentColumn = table.getColumn(6);
  }

  console.log(currentRow);
}
/////////////////////


// Chat GPT
function windowResized() {
  // When the window is resized, get the new dimensions of the parent div
  let canvasContainer = select("#myP5");
  let cW = canvasContainer.width;
  let cH = canvasContainer.height;
  resizeCanvas(cW, cH);
}