let header = document.querySelector("h1");
let header4 = document.querySelector("h4");
let lvlBtn = document.querySelector("button");
let img = document.querySelector("img");

const character = {
  name: "Aizen Sosuke",
  age: 1000,
  origin: "Soul Society",
  power: "I have the power to alter reality",

  intro: function () {
    header.textContent =
      "Yokoso, I am " + this.name + " and I am " + this.age + " years old!";
    header4.textContent = "I am from " + this.origin + " and " + this.power;
  },
  levelUp: function () {
    this.age += 100;
    header.textContent =
      "Yokoso, I am " +
      this.name +
      " and I am " +
      this.age +
      " years old! I have leveled up!";
    header4.textContent =
      "I am from " +
      this.origin +
      " and " +
      this.power +
      ". I have leveled up!";
    lvlBtn.style.backgroundColor = "green";
    lvlBtn.style.color = "white";
    img.src = `assets/lvl2.jpeg`;
  },
};
lvlBtn.addEventListener("click", function () {
  character.levelUp();
});


character.intro();
