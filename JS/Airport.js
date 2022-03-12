const PassengerPlane = require("./Planes/PassengerPlane");
const MilitaryPlane = require("./Planes/MilitaryPlane");
const MilitaryType = require("./models/militaryType");
const experimentalPlane = require("./Planes/experimentalPlane");

class Airport {
  getPassengerPlanes() {
    return this.planes.filter((plane) => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => plane instanceof MilitaryPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    let passengerPlanes = this.getPassengerPlanes();
    let planeWithMaxCapacity = passengerPlanes[0];

    for (let i = 0; i < passengerPlanes.length; i++) {
      if (
        passengerPlanes[i].getPassengersCapacity() >
        planeWithMaxCapacity.getPassengersCapacity()
      ) {
        planeWithMaxCapacity = passengerPlanes[i];
      }
    }
    
    return planeWithMaxCapacity;
    //return this.planes.filter((plane) => plane instanceof PassengerPlane).sortByMaxLoadCapacity()[0];
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT
    );
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.BOMBER
    );
  }

  constructor(planes) {
    this.planes = planes;
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof experimentalPlane);
  }

  sortByMaxDistance() {
    return this.planes.sort(
      (a, b) => a.Get_Max_Flight_Distance() - b.Get_Max_Flight_Distance()
    );
  }

  sortByMaxSpeed() {
    return this.planes.sort((a, b) => a.getMS() - b.getMS());
  }

  sortByMaxLoadCapacity() {
    return this.planes.sort(
      (a, b) => b.getMaxLoadCapacity() - a.getMaxLoadCapacity()
    );
  }

  getPlanes() {
    return this.planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
