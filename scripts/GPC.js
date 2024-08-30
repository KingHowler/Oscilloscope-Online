let graphPlotter;
let serial;
let inputArray = [];

function setup() {
  pixelDensity(5);
  createCanvas(windowWidth, windowHeight, Path2D);
  textSize(16); // Set an appropriate text size
  textFont('Arial'); // Choose a font that looks clear
  
  
  graphPlotter = new GraphPlotter();
  // Setting up the graph plotter
  graphPlotter.GraphSetup(true, true, 'X-Axis', 'Y-Axis');
  graphPlotter.GridSetup(0, 500, 100, 0, 5, 1); // Example setup
  graphPlotter.SizeSetup(width, height);
  graphPlotter.Offset(0, 0);
  
  // Request serial port access
  navigator.serial.requestPort().then(selectedPort => {
    serial = selectedPort;
    return serial.open({ baudRate: 9600 });
  }).then(() => {
    // Start reading data
    readSerialData();
  }).catch(err => console.error('Error accessing serial port:', err));
}

function readSerialData() {
  const reader = serial.readable.getReader();
  
  // Read loop
  reader.read().then(function process({ done, value }) {
    if (done) {
      reader.releaseLock();
      return;
    }
    
    // Convert value to string and parse
    let inputStr = new TextDecoder().decode(value);
    let row = inputStr.split('-').map(col => col.split(',').map(Number));
    
    // Store in the 2D array
    inputArray.push(row);
    
    // Call readSerialData() recursively
    readSerialData();
  });
}

function draw() {
  background(255);
  graphPlotter.fillBackground(255);
  graphPlotter.DrawGrid();
  
  // Example to plot using 2D array data
  for (let i = 0; i < inputArray.length; i++) {
    graphPlotter.DrawGraph(inputArray[i], 'blue');
  }
}
