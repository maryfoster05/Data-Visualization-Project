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
let chart = new Chart(100, 30, 800, 375);


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
  cnv = createCanvas(windowWidth, 700);
  cnv.parent("myP5");
  chart.w = width;

  // Salary Comparison
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(1)[i];
    let womens  = table.getColumn(2)[i];

    moneyStacks.push(new MoneyStack(i * width/4 + chart.x, chart.y, mens, 10000, "mens"));
    moneyStacks.push(new MoneyStack(i * width/4 + chart.x+100, chart.y, womens, 10000, "womens"));
    console.log(round(mens/10000));
    console.log(round(womens/10000));
  }

  // Recruiting Expenses Comparison
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(3)[i];
    let womens  = table.getColumn(4)[i];

    phoneStacks.push(new PhoneStack(i * width/4 + 100, 0, mens, 10000, "mens"));
    phoneStacks.push(new PhoneStack(i * width/4 + 200, 0, womens, 10000, "womens"));
    
  }

  // Aid Comparison
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(5)[i];
    let womens  = table.getColumn(6)[i];

    booksStacks.push(new BooksStack(i * width/4 + 100, 0,  mens, 100000, "mens"));
    booksStacks.push(new BooksStack(i * width/4 + 200, 0, womens, 100000, "womens"));
  }
  
  initializeSelection();
  windowResized();
}

function draw() {
  background('white');

  chart.displayBackground();
  mySelectEvent();
  chart.displayAxes();
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