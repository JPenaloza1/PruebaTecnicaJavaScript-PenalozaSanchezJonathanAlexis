// 3. Construct a Vehicle class, that inherits the classes, "plane", "car", "Train", with the inherited methods run, stop, and action, 
//the action method must change with the children,
// Ex: car drive, plane fly, train travel

class Vehicle {
    run = () => {
        console.log("El vehículo se ha encendido");
    }
    stop = () => {
        console.log("El vehículo se ha apagado");
    }
    action = () => {}
}

class Plane extends Vehicle {
    action = () => {
        console.log("El avión está volando");
    }
}

class Car extends Vehicle {
    action = () => {
        console.log("El carro está rodando");
    }
}

class Train extends Vehicle {
    action = () => {
        console.log("El tren está viajando");
    }
}

let plane = new Plane();
plane.run();
plane.action();
plane.stop();

let car = new Car();
car.run();
car.action();
car.stop();

let train = new Train();
train.run();
train.action();
train.stop();