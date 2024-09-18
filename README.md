<div align="center">
  <img src="https://kinghowler.github.io/assets/img/oscilloscope-online/icon.png" width="30%">
  
  # Oscilloscope-Online
</div>

## Pupose
To create a tool that can show live data from experimentations with a wide variety of customizable options. The project is useful for assisting in research works.

## Description
An online Oscilloscope that lets you read data from your serial device and plot a graph of it. At the moment, it can plot 4 graphs.

![example](https://kinghowler.github.io/assets/img/oscilloscope-online/Screenshot(1).png)

The plotter gives you many customization options which includes the following:

- Minimum (x, y) coordinate
- Maximum (x, y) coordinate
- Gap between the main grid lines for X and Y axis
- Enable or Disable the Sub-Grid
- Enable or Disable denoting each reading with a dot
- Customize the title of the X-axis and Y-axis
- Baud Rate of the Serial Device
- The port to read data from

The website also provides a link to the code for the website as well as a link telling how to use the oscilloscope locally which offers even more customizable options.

You can find the Oscilloscope [here](https://kinghowler.github.io/Oscilloscope-Online/)

## Upcoming updates
- .csv Export
- .svg Export
- .pdf Export
- Custom number of graphs
- Custom colors for each graphs
- Resolution Slider

## Exapmle usage
**Reviewing the effects of changing the resistances of a fixed resistor on the sensitivty of an LDR Potential Divider**
### The experiment
- Changing the fixed resistor in a LDR potential divider can change the sensitivity of the detection of the light intensity
- In this experiment I have used 4 different fixed Resistor values
    - | Graph Color | Fixed Resistor |
      |-------------|----------------|
      | Red         | 1k Ohms        |
      | Blue        | 10k Ohms       |
      | Green       | 100k Ohms      |
      | Yellow      | 1M Ohms        |
- Initially the Light source is extremely close to the LDRs, then the distance between the source and the LDR is slowly increased all the while the Oscilloscope-Online is plotting live data

### The Circuit
![LDR-Potential-Divider](https://github.com/user-attachments/assets/007746fd-9123-4bcc-a11f-65844b771e11)

### The Output
![LDR-1k-10k-100k-1M](https://github.com/user-attachments/assets/5148fe3b-e2ca-4b79-88b9-ea7d624e2178)

