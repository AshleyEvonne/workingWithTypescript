type Status = "started" | "stopped"; 

class Vehicle {

    status = "stopped";
    _make: string;
    _model: unknown;
    _wheels: number;
  
    constructor(make:string, model: unknown, wheels:number) {
      this._make = make;
      this._model = model;
      this._wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make:string, model:unknown, wheels:number) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make:string, model:unknown, wheels:number) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "running") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S", 2);
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley._make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal", 4);
  myBuick._wheels = myBuick._wheels - 1;
  console.log(myBuick._wheels);
  console.log(myBuick._model);