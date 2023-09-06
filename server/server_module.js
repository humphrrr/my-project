exports.getResponse = function (command) 
{
  var resp;

  switch(command.toLowerCase()) {
    case 'hello':
      resp = 'Howdy';
      break;
  }

  return resp;
}
