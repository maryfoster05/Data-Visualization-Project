class Chart {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    displayAxes() {
        this.displayXAxis();
        this.displayYAxis();
        this.displayYMouse();
        this.displayTitle();
    }

    displayBackground() {
        // rectangle
        fill(220);
        noStroke();
        rect(chart.x, chart.y, chart.x + dx + 400 + 2 * dw + 110, chart.h);

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
            line(chart.x, y, chart.x + dx + 400 + 2 * dw + 210, y);
            textSize(18);
            // noStroke();
            text(label, chart.x - 20, y + 5);
            
        }
    }

    displayXAxis() {
        // hide money that goes below chart
        fill(255);
        noStroke();
        rect(chart.x, chart.y + chart.h, width, height);
        fill(0);

        for (let i = 0; i < 3; i++) {
            textSize(18);
            fill(0);
            textAlign(CENTER);
            text(2019 + i, (chart.x + dx) + (200 * i) + dw*i + 100, chart.y + chart.h + 20);
        }
        textSize(20);
        text('Date (by Year)', dw + 405, chart.y + chart.h + 40);
    }

    displayYAxis() {
        if (currentComparison == "Salary Comparison" || currentComparison == "Recruiting Expenses Comparison") {
            push();
            fill(0);
            translate(this.x - 50, 200);
            rotate(radians(-90));
            textSize(20);
            text("Money spent (in $10,000s)", 0, 0);
            pop();
        }

        else {
            push();
            fill(0);
            translate(this.x - 50, 200);
            rotate(radians(-90));
            textSize(20);
            text("Money spent (in $100,000s)", 0, 0);
            pop();
        }
    }

    displayYMouse() {
        if (mouseY > chart.y && mouseY < chart.y + chart.h){
            if (currentComparison == "Salary Comparison" || currentComparison == "Recruiting Expenses Comparison") {
                let y = map(mouseY, chart.y, chart.y + chart.h, chart.h*10000/2, 0, true);
                noStroke();
                fill('black');
                text("$" + round(y), mouseX, mouseY);
                stroke(100);
                line(chart.x, mouseY, chart.x + dx + 400 + 2 * dw + 210, mouseY);
            }
            else{
                let y = map(mouseY, chart.y, chart.y + chart.h, chart.h*100000/2, 0, true);
                noStroke();
                fill('black');
                text("$" + round(y), mouseX, mouseY);
                stroke(100);
                line(chart.x, mouseY, chart.x + dx + 400 + 2 * dw + 210, mouseY);
            }
        }
    }

    displayTitle(){
        textSize(25);
        fill(0);
        noStroke();
        if (currentComparison == "Salary Comparison") {
            text('Salary Comparison', dw + 425, 20);
        }
        else if (currentComparison == "Recruiting Expenses Comparison"){
            text('Recruiting Expenses', dw + 425, 20);
        }
        else{
            text('Student Aid Expenses', dw + 425, 20);
        }
    }
}