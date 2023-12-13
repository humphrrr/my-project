exports.getResponse = function (command, anObject) 
{
  var resp = {self: ""};

  switch(command.toLowerCase()) {
    case 'hello':
      resp.self = 'Howdy';
      break;
    case 'look':
      resp.self = anObject.container.description;
      break;
    case 'dance':
        resp.self = "You dance";
        resp.others = `${anObject.description} dances`;
        break;
    case 'smile':
        resp.self = "You smile";
        resp.others = `${anObject.description} smiles`;
        break;
    case 'north':
      anObject.container = anObject.container.exit_north;
      resp.self = anObject.container.description;
      resp.others = `${anObject.description} leaves north`;
      break;
  }

  return resp;
}

exports.MyObject = class {
  constructor(description) {
    this.description = description;
  }
}