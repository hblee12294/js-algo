// class Car {
//   speed = 0;

//   constructor(initialSpeed) {
//     this.speed = Math.max(initialSpeed, 0);
//   }

//   adds = (speed) => {
//     const tmpSpeed = this.speed + speed;
//     this.speed = Math.max(tmpSpeed, 0);

//     return this;
//   };

//   minors = (speed) => {
//     const tmpSpeed = this.speed - speed;
//     this.speed = Math.max(tmpSpeed, 0);

//     return this;
//   };

//   getSpeed = () => {
//     return this.speed
//   }
// }

function Car(initialSpeed) {
  let currentSpeed = initialSpeed ? Math.max(initialSpeed, 0) : 0;

  this.adds = (speed) => {
    const tmpSpeed = currentSpeed + speed;
    currentSpeed = Math.max(tmpSpeed, 0);

    return this;
  };

  this.minors = (speed) => {
    const tmpSpeed = currentSpeed - speed;
    currentSpeed = Math.max(tmpSpeed, 0);

    return this;
  };

  this.getSpeed = () => {
    return currentSpeed;
  };
}

const car = new Car(10);

car.adds(5).minors(3).adds(7).minors(1);

console.log(car.getSpeed());

const car2 = new Car(-10);
car.minors(9).minors(29);

console.log(car2.getSpeed());
