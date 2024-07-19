function setup() {
  createCanvas(500, 500);
  background(150);

  let mrMonkey = new Animal("yellow", "MY MUSCLES ARE GETTING BIGGER");
  mrMonkey.talk();
  mrMonkey.showUp();
}
