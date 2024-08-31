class GraphPlotter {
    constructor() {
      // Control Variables
      this.Points = false;  // Mark each value on the graph with a dot
      this.SubGrid = false; // Draw a smaller grid of 1/10 inside the Grid
      this.XTitle = '';     // Title for the X-axis
      this.YTitle = '';     // Title for the Y-axis
  
      // Grid Variables
      this.YMin = 0;
      this.YMax = 0;
      this.YStep = 0;
      this.XMin = 0;
      this.XMax = 0;
      this.XStep = 0;
      this.totalPoints = 0; // Total number of points to display
  
      // Size Variables
      this.WidthP = 0;
      this.HeightP = 0;
      this.OffsetX = 0;
      this.OffsetY = 0;
    }
  
    // Setup Graph Plotter Settings
    GraphSetup(points, subGrid, xTitle, yTitle) {
      this.Points = points;
      this.SubGrid = subGrid;
      this.XTitle = xTitle;
      this.YTitle = yTitle;
    }
  
    // Setup Grid
    GridSetup(yMin, yMax, yStep, xMin, xMax, xStep) {
      this.YMin = yMin;
      this.YMax = yMax;
      this.YStep = yStep;
      this.XMin = xMin;
      this.XMax = xMax;
      this.XStep = xStep;
      this.totalPoints = this.XMax - this.XMin + 1;
    }
  
    // Setup Size
    SizeSetup(widthP, heightP) {
      this.WidthP = widthP;
      this.HeightP = heightP;
    }
  
    // Draw at an offset
    Offset(offX, offY) {
      this.OffsetX = offX;
      this.OffsetY = offY;
    }
  
    // Fill the background of the Grid with a specific color
    fillBackground(backgroundColor) {
      noStroke();
      fill(backgroundColor);
      rect(this.OffsetX, this.OffsetY, this.WidthP, this.HeightP);
    }
  
    // Draw the Grid
    DrawGrid() {
      // Draw SubGrid
      if (this.SubGrid) {
        // Y sub grid
        for (let i = this.XMin; i < this.XMax; i += this.XStep / 10) {
          // Map each x value to a coordinate
          let x = map(i, this.XMin, this.XMax, 100, this.WidthP - 50);
  
          // Draw Vertical Line
          strokeWeight(0.5);
          stroke(200);  // Light gray color for subgrid
          line(x + this.OffsetX, this.HeightP - 50 + this.OffsetY, x + this.OffsetX, 50 + this.OffsetY);
        }
  
        // X sub grid
        for (let i = this.YMin; i < this.YMax; i += this.YStep / 10) {
          // Map each y value to a coordinate
          let y = map(i, this.YMin, this.YMax, this.HeightP - 50, 50);
  
          // Draw Horizontal Line
          strokeWeight(0.5);
          stroke(200);  // Light gray color for subgrid
          line(100 + this.OffsetX, y + this.OffsetY, this.WidthP - 50 + this.OffsetX, y + this.OffsetY);
        }
      }
  
      // Draw Main Grid
      // Y grid
      for (let i = this.XMin; i <= this.XMax; i += this.XStep) {
        // Map each x value to a coordinate
        let x = map(i, this.XMin, this.XMax, 100, this.WidthP - 50);
  
        // Draw Vertical Line
        strokeWeight(2);
        stroke(160);  // Dark gray color for grid
        line(x + this.OffsetX, this.HeightP - 50 + this.OffsetY, x + this.OffsetX, 50 + this.OffsetY);
  
        // Display value of current x coordinate on the horizontal axis
        noStroke();
        textAlign(CENTER);
        fill(0);
        if (i !== 0) {  // Don't rewrite 0 on top of 0
          text(i, x + this.OffsetX, this.HeightP - 30 + this.OffsetY);
        }
      }
  
      // X Grid
      for (let i = this.YMin; i <= this.YMax; i += this.YStep) {
        // Map each y value to a coordinate
        let y = map(i, this.YMin, this.YMax, this.HeightP - 50, 50);
  
        // Draw Horizontal Line
        strokeWeight(2);
        stroke(160);  // Dark gray color for grid
        line(100 + this.OffsetX, y + this.OffsetY, this.WidthP - 50 + this.OffsetX, y + this.OffsetY);
  
        // Display value of current y coordinate on the vertical axis
        noStroke();
        textAlign(RIGHT);
        fill(0);
        if (i !== 0) {  // Don't rewrite 0 on top of 0
          text(i, 90 + this.OffsetX, y + this.OffsetY);
        }
      }
  
      // Drawing the axes
      stroke(0); 
      strokeWeight(2.5); 
      fill(0);
  
      // X axis
      let y = map(0, this.YMin, this.YMax, this.HeightP - 50, 50);
      line(100 + this.OffsetX, y + this.OffsetY, this.WidthP - 50 + this.OffsetX, y + this.OffsetY);
  
      // Y axis
      let x = map(0, this.XMin, this.XMax, 100, this.WidthP - 50);
      line(x + this.OffsetX, this.HeightP - 50 + this.OffsetY, x + this.OffsetX, 50 + this.OffsetY);
  
      // Label the axes
      noStroke();
      fill(0);
      textAlign(CENTER);
      text(this.XTitle, this.WidthP / 2 + this.OffsetX, this.HeightP - 10 + this.OffsetY);
      textAlign(RIGHT);
      text(0, 90 + this.OffsetX, y + this.OffsetY);
      textAlign(RIGHT);
      rotate(-HALF_PI);
      text(this.YTitle, -(this.HeightP / 2 + this.OffsetY), (30 + this.OffsetX));
      rotate(HALF_PI);
      textAlign(CENTER);
      text(0, x + this.OffsetX, this.HeightP - 30 + this.OffsetY);
    }
  
    // Draw the graph
    DrawGraph(graph, graphColor,) {
      stroke(graphColor);
      strokeWeight(2.5);
      for (let i = 0; i < this.totalPoints - 1; i++) {
        let X1 = 0;
        let X2 = 0;
        let Y1 = 0;
        let Y2 = 0;
        let drawPoints = this.Points;
  
        // Get coordinate of current value
        let x1 = map(i, 0, this.totalPoints - 1, 100, this.WidthP - 50);
        let y1 = this.yCo(graph[i]);
  
        // Get coordinate of next value
        let x2 = map(i + 1, 0, this.totalPoints - 1, 100, this.WidthP - 50);
        let y2 = this.yCo(graph[i + 1]);
  
        // Calculate Gradient for filtering lines
        let m = (y2 - y1) / (x2 - x1);
  
        // Fill OUT variables with initial data
        X1 = x1;
        X2 = x2;
        Y1 = y1;
        Y2 = y2;
  
        // Exception cases to force Y values inside the grid
        // Modify out variables using coordinate geometry
  
        // y1 above grid
        if (y1 < 50) {
          Y1 = 50;
          X1 = (Y1 - y1 + m * x1) / m;
          drawPoints = false;
        }
  
        // y1 below grid
        if (y1 > this.HeightP - 50) {
          Y1 = this.HeightP - 50;
          X1 = (Y1 - y1 + m * x1) / m;
          drawPoints = false;
        }
  
        // y2 above grid
        if (y2 < 50) {
          Y2 = 50;
          X2 = (Y2 - y1 + m * x1) / m;
          drawPoints = false;
        } 
  
        // y2 below grid
        if (y2 > this.HeightP - 50) {
          Y2 = this.HeightP - 50;
          X2 = (Y2 - y1 + m * x1) / m;
          drawPoints = false;
        }
        this.DrawSegment(drawPoints, X1, Y1, X2, Y2);
      }
    }
  
    // Draw a straight line segment from one point to another; also uses boolean to decide whether to draw points on ends of the segment
    DrawSegment(drawPoint, X1, Y1, X2, Y2) {
      // Draw line from current value to next value
      strokeWeight(2.5);  // Thickness of 2 pixels
      line(X1 + this.OffsetX, Y1 + this.OffsetY, X2 + this.OffsetX, Y2 + this.OffsetY);
  
      // Draw Points
      if (drawPoint) {
        strokeWeight(5);  // Thickness of 5 pixels
        point(X1 + this.OffsetX, Y1 + this.OffsetY);
        point(X2 + this.OffsetX, Y2 + this.OffsetY);
      }
    }
  
    // Maps a y coordinate from the graph to the y coordinate on screen
    yCo(y) {
      let yCoord = map(y, this.YMin, this.YMax, this.HeightP - 50, 50);
      return yCoord;
    }
    
    xCo(x) {
      let xCoord = map(x, this.XMin, this.XMax, 100, this.WidthP - 50);
      return xCoord;
    }
  }
  