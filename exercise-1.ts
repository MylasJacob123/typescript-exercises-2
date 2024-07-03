enum TrafficLightz {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
  }
  

  class Robot {
    currentColor: TrafficLightz;
    colors: TrafficLightz[];
    colorIndex: number;
  
    constructor() {
      this.colors = [TrafficLightz.Red, TrafficLightz.Yellow, TrafficLightz.Green];
      this.colorIndex = 0;
      this.currentColor = this.colors[this.colorIndex];
      this.start();
    }
  
    start() {
      setInterval(() => {
        this.changeColor();
        console.log(`The robot's current color is ${this.currentColor}`);
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  
    changeColor() {
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      this.currentColor = this.colors[this.colorIndex];
    }
  }
  
  const robot = new Robot();
  