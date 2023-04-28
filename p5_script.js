let sel;
let cnv;
let table;
let moneyStack;
let moneyStacks = [];
let phoneStack;
let phoneStacks = [];
let booksStack;
let booksStacks = [];
let currentComparison = "Salary Comparison";

function preload() {
  table = loadTable("data/final_category_by_year_df.csv", 'csv', 'header');
  bookF = loadImage("assets/bookF.png");
  bookM = loadImage("assets/bookM.png");
  billF = loadImage("assets/billF.png");
  billM = loadImage("assets/billM.png");
  phoneF = loadImage("assets/phoneF.png");
  phoneM = loadImage("assets/phoneM.png");
}

function setup() {
  cnv = createCanvas(windowWidth, 400);
  cnv.parent("myP5");

  // Salary Comparison
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(1)[i];
    let womens  = table.getColumn(2)[i];

    moneyStacks.push(new MoneyStack(i * 200 + 70, 0, mens/20000, "mens"));
    moneyStacks.push(new MoneyStack(i * 200 + 160, 0, womens/20000, "womens"));
  }

  // Recruiting Expenses Comparison
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(3)[i];
    let womens  = table.getColumn(4)[i];

    phoneStacks.push(new PhoneStack(i * 200 + 70, 0, mens/20000, "mens"));
    phoneStacks.push(new PhoneStack(i * 200 + 160, 0, womens/20000, "womens"));
  }

  // Aid Comparison
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(5)[i];
    let womens  = table.getColumn(6)[i];

    booksStacks.push(new BooksStack(i * 200 + 70, 0, mens/100000, "mens"));
    booksStacks.push(new BooksStack(i * 200 + 160, 0, womens/100000, "womens"));
  }
  
  initializeSelection();
  windowResized();
}

function draw() {
  background('white');
  mySelectEvent();
  // xAxis();
  // yAxis();
  
}

function salaryComparison(){
  for (let i = 0; i < moneyStacks.length; i++){
    moneyStacks[i].display();
  }
  for (let i = 0; i < moneyStacks.length; i++){
    moneyStacks[i].update();
  }
}

function recruitingComparison(){
  for (let i = 0; i < phoneStacks.length; i++){
    phoneStacks[i].display();
  }
  for (let i = 0; i < phoneStacks.length; i++){
    phoneStacks[i].update();
  }
}

function aidComparison(){
  for (let i = 0; i < booksStacks.length; i++){
    booksStacks[i].display();
  }
  for (let i = 0; i < booksStacks.length; i++){
    booksStacks[i].update();
  }
}

// Dropdown
function initializeSelection() {
  sel = createSelect();
  sel.parent("dataDropdown");
  sel.option('Salary Comparison');
  sel.option('Recruiting Expenses Comparison');
  sel.option('Student Aid Comparion');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  currentComparison = sel.value();

  if (currentComparison == "Salary Comparison") {
    salaryComparison()
  }
  else if (currentComparison == "Recruiting Expenses Comparison") {
    recruitingComparison()
  }
  else {
     aidComparison()
  } 
}

// Chat GPT
function windowResized() {
  // When the window is resized, get the new dimensions of the parent div
  let canvasContainer = select("#myP5");
  let cW = canvasContainer.width;
  let cH = canvasContainer.height;
  resizeCanvas(cW, cH);
}