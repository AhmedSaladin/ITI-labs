// Developing, Testing ,Quality Controls and Designers
class TeamLeader {
  constructor(name) {
    if (TeamLeader.instance != null) {
      throw "go away";
    }
    this.name = name;
    this.type = "Developing Team Leader";
    TeamLeader.instance = this;
  }
}

class Developing {
  leader = null;
  constructor(name) {
    if (this.leader == null) this.leader = new TeamLeader(name);
    else {
      this.name = name;
      this.type = "Developer";
    }
  }

}

class Testing {
  leader = null;
  constructor(name) {
    if (this.leader == null) this.leader = new TeamLeader(name);
    else {
      this.name = name;
      this.type = "Tester";
    }
  }
}

class QualityControl {
  constructor(name) {
    this.name = name;
    this.type = "Quality Control Engineer";
  }
}

class Designing {
  constructor(name) {
    this.name = name;
    this.type = "Desinger";
  }
}

function Company() {
  this.add_new_empolyee = function (name, type) {
    switch (type) {
      case 1:
        return new Developing(name);
      case 2:
        return new Testing(name);
      case 3:
        return new QualityControl(name);
      case 4:
        return new Designing(name);
    }
  };
}
