// This is the only function that will be called by the endpoint.
function print(req, res) {
  res.send("Hello I'am Heng Khai!");
}

function print_home(req, res) {
  res.send("This is the home page");
}

module.exports = print;
