const poems = [
  {
    author: "Chris",
    poem: "Roses are red \n I'm going to bed.",
    image: "bed.jpg",
  },
  {
    author: "James",
    poem: "Roses are red \n violets are blue \n poetry is hard. \n Avocado.",
    image: "Avocado.jpg",
  },
  {
    author: "Michael",
    poem: "Roses are red \n Violets are blue \n cows are moo, \n what about you?",
    image: "cow.jpg",
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
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
