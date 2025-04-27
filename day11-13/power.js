let header = document.querySelector("h1");
let header4 = document.querySelector("h4");
let lvlBtn = document.querySelector("#level");
let resetBtn = document.querySelector("#btn");
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
    if (this.age == 1000) {
      this.age += 100;
      this.power = "I have Immortality";
      img.src = `assets/lvl2.jpeg`;
    } else if (this.age == 1100) {
      this.age += 200;
      this.power = "I have Kyoka Suigetsu Illusion";
      img.src = `assets/lvl3.jpeg`;
    } else if (this.age == 1300) {
      this.age += 300;
      this.power = "I created Reiatsu Crushing";
      img.src = `assets/lvl4.jpeg`;
    } else if (this.age == 1600) {
      this.age += 400;
      this.power = "I'm the strongest";
      img.src = `assets/lvl5.jpeg`;

      // 🧠 Hide "Level Up" button and show "Base Form" button
      lvlBtn.style.display = "none";
      resetBtn.style.display = "block";
    }

    header.textContent = `Yokoso, I am ${this.name} and I am ${this.age} years old! I have leveled up!`;
    header4.textContent = `I am from ${this.origin} and ${this.power}`;
  },

  resetForm: function () {
    this.age = 1000;
    this.power = "I have the power to alter reality";
    img.src = `assets/lvl1.jpeg`;

    // 🧠 Show "Level Up" button again and hide "Base Form" button
    lvlBtn.style.display = "block";
    resetBtn.style.display = "none";

    this.intro();
  },
};

// 👆 Button click events
lvlBtn.addEventListener("click", function () {
  character.levelUp();
});

resetBtn.addEventListener("click", function () {
  character.resetForm();
});

// 👏 Load first intro
character.intro();
