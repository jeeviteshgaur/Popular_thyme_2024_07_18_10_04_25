class Animal {
  constructor(breed = "red", talkingStyle = "brrr") {
    this.breed = breed;
    this.talkingStyle = talkingStyle;
  }
  talk() {
    console.log(this.talkingStyle);
  }

  showUp(whereX = 100, whereY = 100) {
    stroke(this.breed);
    strokeWeight(10);
    point(whereX, whereY);
  }
}
