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
let yMax = 0;


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

    moneyStacks.push(new MoneyStack(i * width/4 + 100, 20, mens, 10000, "mens"));
    moneyStacks.push(new MoneyStack(i * width/4 + 200, 20, womens, 10000, "womens"));
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
  mySelectEvent();
  xAxis();
  yAxis();
  yVal();
}

function xAxis(){
  for (let i = 0; i < 3; i++){
    textSize(18)
    fill(0);
    textAlign(CENTER);
    text(2019 + i, i * width/4 + 150 + i * 25, height - 30);
  }
  textSize(20);
  text('Date (by Year)', width/4 + 175, height - 5);
  }

function yAxis(){
  if (currentComparison == "Salary Comparison" || currentComparison == "Recruiting Expenses Comparison") {
    textSize(20);
    // rotate(90);
    text("Money spent (in $10,000s)", 300 , height - 50);
  }

  else{
    textSize(20);
    text("Money spent (in $100,000s)", 300 , height - 50);
  }

  // for (let y = 0; y < yMax; y += 1000) {

  // }
}

function yVal() {
  let y =  map(mouseY, 0, height, 100, 0);

  fill(0);
  text(round(y), mouseX, mouseY);
  line(0, mouseY, width, mouseY);
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