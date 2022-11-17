const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {
    author: "Ariel",
    poem: "I dont know when \n I dont know how \n but I know somethings starting right now \n The Little Mermaid Movie ",
    image: "mermaid.jpeg",
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  {
    author: "Melody",
    poem: "just the vermillion flicker of cannas near the pane. Our bodies too, plateaued; my hole, newly bloomless. Outdoors, further out, a wren winnows, the mesquite on whose yielding limbs the all- but-tender fowl rests flexes, in cold as in darkness . . . Time, like desire, expands too— no? My lover, nodding gently, shakes the leaves, & A little softer. A little softer now— A little softer, for what’s been torn.",
    image: "download.jpeg",
  }
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
