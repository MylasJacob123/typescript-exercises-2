let TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Red";
    TrafficLight["Yellow"] = "Yellow";
    TrafficLight["Green"] = "Green";
})(TrafficLight || (TrafficLight = {}));

Robot = /** @class */ (function () {
    function Robot() {
        this.colors = [TrafficLight.Red, TrafficLight.Yellow, TrafficLight.Green];
        this.colorIndex = 0;
        this.currentColor = this.colors[this.colorIndex];
        this.start();
    }
    Robot.prototype.start = function () {
        let _this = this;
        setInterval(function () {
            _this.changeColor();
            console.log("The robot's current color is ".concat(_this.currentColor));
        }, 10000); // 10000 milliseconds = 10 seconds
    };
    Robot.prototype.changeColor = function () {
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        this.currentColor = this.colors[this.colorIndex];
    };
    return Robot;
}());
robot = new Robot();
