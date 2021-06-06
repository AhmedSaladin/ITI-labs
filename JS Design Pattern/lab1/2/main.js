class Empolyee {
  constructor(_name, _type) {
    this.name = _name;
    this.type = _type;
  }
}
// Developing, Testing ,Quality Controls and Designers
class DevTeamLeader extends Empolyee {
  constructor(_name) {
    if (DevTeamLeader.instance != null) {
      throw "go away";
    }
    super(_name, "Developing Team Leader");
    DevTeamLeader.instance = this;
  }
}

class TestTeamLeader extends Empolyee {
  constructor(name) {
    if (TestTeamLeader.instance != null) {
      throw "go away";
    }
    super(name, "Testing Team Leader");
    TestTeamLeader.instance = this;
  }
}

class QCTeamLeader extends Empolyee {
  constructor(name) {
    if (QCTeamLeader.instance != null) {
      throw "go away";
    }
    super(name, "Quality Control Team Leader");
    QCTeamLeader.instance = this;
  }
}

class DesTeamLeader extends Empolyee {
  constructor(name) {
    if (DesTeamLeader.instance != null) {
      throw "go away";
    }
    super(name, "Designing Team Leader");
    DesTeamLeader.instance = this;
  }
}

class Developing extends Empolyee {
  constructor(_name) {
    super(_name, "Developer");
  }
  static leader;
  static team_leader(name) {
    this.leader = new DevTeamLeader(name);
  }
}

class Testing extends Empolyee {
  constructor(name) {
    super(name, "Tester");
  }
  static leader;
  static team_leader(name) {
    this.leader = new TestTeamLeader(name);
  }
}

class QualityControl extends Empolyee {
  constructor(name) {
    super(name, "Quality Control Engineer");
  }
  static leader;
  static team_leader(name) {
    this.leader = new QCTeamLeader(name);
  }
}

class Designing extends Empolyee {
  constructor(name) {
    super(name, "Desinger");
  }
  static leader;
  static team_leader(name) {
    this.leader = new DesTeamLeader(name);
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
