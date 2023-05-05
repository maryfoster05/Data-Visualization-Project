class Chart {
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
    }

    displayAxes() {
        this.displayXAxis();
        this.displayYAxis();
        this.displayYMouse();
    }

    displayBackground() {
        // rectangle
        fill(220);
        noStroke();
        rect(chart.x, chart.y, chart.w, chart.h);

        // lines
        fill(0);
        stroke(0);

        let tickNum = 0;
        let imagePerPixel = 5000;
        let imageSpacing = 100000;
        let spacingPixel = imageSpacing/imagePerPixel;
        for (let y = chart.y + chart.h; y >= chart.y; y-= spacingPixel){
            let label = (tickNum * imageSpacing) / 10000
            tickNum ++;
            textSize(18);
            text(label, chart.x - 20, y + 5);
            line(chart.x, y, chart.x + chart.w, y);
        }
    }

    displayXAxis() {
        // hide money that goes below chart
        fill(255);
        noStroke();
        rect(chart.x, chart.y + chart.h, width, height);
        fill(0);

        for (let i = 0; i < 3; i++) {
            textSize(18)
            fill(0);
            textAlign(CENTER);
            text(2019 + i, i * width / 4 + 195 + i * 25, chart.y + chart.h + 30);
        }
        textSize(20);
        text('Date (by Year)', width / 4 + 225, chart.y + chart.h + 50);
    }

    displayYAxis() {
        fill(0);
        if (currentComparison == "Salary Comparison" || currentComparison == "Recruiting Expenses Comparison") {
            
            push();
            translate(this.x - 50, 200);
            rotate(radians(-90));
            textSize(20);
            text("Money spent (in $10,000s)", 0, 0);
            pop();
        }

        else {
            push();
            translate(20, 200);
            rotate(radians(-90));
            textSize(20);
            text("Money spent (in $100,000s)", 0, 0);
            pop();
        }
    }

    displayYMouse() {
        if (currentComparison == "Salary Comparison" || currentComparison == "Recruiting Expenses Comparison") {
            let y = map(mouseY, chart.y, chart.y + chart.h, chart.h*10000/2, 0, true);
            noStroke();
            fill(100);
            text("$" + round(y), mouseX, mouseY);
            stroke(100);
            line(chart.x, mouseY, chart.x + chart.w, mouseY);
        }
        else{
            let y = map(mouseY, chart.y, chart.y + chart.h, chart.h*100000/2, 0, true);
            noStroke();
            fill(100);
            text("$" + round(y), mouseX, mouseY);
            stroke(100);
            line(chart.x, mouseY, chart.x + chart.w, mouseY);
        }
    }
}