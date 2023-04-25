let sel;
let cnv;
let table;
let book;
let bill;
let phone;
let moneyStack;
let moneyStacks = [];
let phoneStack;
let phoneStacks = [];
let booksStack;
let booksStacks = [];

function preload() {
  table = loadTable("data/final_category_by_year_df.csv", 'csv', 'header');
  book = loadImage("assets/book.png");
  bill = loadImage("assets/bill.png");
  phone = loadImage("assets/phone.png");
}

function setup() {
  cnv = createCanvas(windowWidth, 400);
  cnv.parent("myP5");

  cat = "Salary Comparison"
  moneyStacks = [];

  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(1)[i];
    let womens  = table.getColumn(2)[i];

    moneyStacks.push(new MoneyStack(i * 200 + 70, 0, mens/20000));
    moneyStacks.push(new MoneyStack(i * 200 + 160, 0, womens/20000));
  }

  cat = "Recruiting Expenses Comparison"
  phoneStacks = [];

  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(3)[i];
    let womens  = table.getColumn(4)[i];

    phoneStacks.push(new PhoneStack(i * 200 + 70, 0, mens/20000));
    phoneStacks.push(new PhoneStack(i * 200 + 160, 0, womens/20000));
  }

  cat = "Aid Comparison"
  booksStacks = []
  for (let i = 0; i < 3; i++) {
    let mens  = table.getColumn(5)[i];
    let womens  = table.getColumn(6)[i];

    booksStacks.push(new BooksStack(i * 200 + 70, 0, mens/20000));
    booksStacks.push(new BooksStack(i * 200 + 160, 0, womens/20000));
  }

  initializeSelection();
  windowResized();

}

function draw() {
  background('white');
  
  mySelectEvent()

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

/////////////////////
// DROPDOWN
function initializeSelection() {
  sel = createSelect();
  sel.parent("dataDropdown");
  sel.option('Salary Comparison');
  sel.option('Recruiting Expenses Comparison');
  sel.option('Student Aid Comparion');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let currentComparison = sel.value();

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
/////////////////////

// Chat GPT
function windowResized() {
  // When the window is resized, get the new dimensions of the parent div
  let canvasContainer = select("#myP5");
  let cW = canvasContainer.width;
  let cH = canvasContainer.height;
  resizeCanvas(cW, cH);
}