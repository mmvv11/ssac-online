class Aircraft {
  constructor() {
    this.isTakeOff = false;
  }

  takeOff = function () {
    this.isTakeOff = true;
    console.log("이륙합니다.");
  };
}

class FighterAircraft extends Aircraft {
  fire = function () {
    if (!this.isTakeOff) {
      console.log("이륙 후 발사 가능");
      return false;
    }

    console.log("미사일 발사!");
    return true;
  };
}

const test = new FighterAircraft();

test.takeOff();
test.fire();
