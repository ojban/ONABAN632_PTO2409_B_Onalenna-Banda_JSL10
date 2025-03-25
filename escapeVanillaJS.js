document.addEventListener("DOMContentLoaded", () => {
  // Fix: Corrected ID for attaching the event listener  // 🪲 Bug: Incorrect ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // Fix: Corrected element ID   // 🪲 Bug: Incorrect element ID
        document.getElementById(
          "resultRoom1"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    // Fix: Added missing 'async' concept  // 🪲 Bug: What's mssing from JS concepts?
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // Fix: Corrected function call to find the intersection  // 🪲 Bug: Incorrect function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // Fix: Made asynchronous function work correctly  // 🪲 Bug: Asynchronous function ?
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          // Fix: Used textContent instead of innerHTML for safety  // 🪲 Bug: Incorrect method
          document.getElementById("room3Result").textContent = message;
        });
      });
  });
});

function findMostRecentBook(books) {
  // Fix: Corrected logic to find the most recent book  // 🪲 Bug: Logic error
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

function findIntersection(setA, setB) {
  // Fix: Corrected logic to find the intersection of two sets   // 🪲 Bug: Incorrect logic
  const intersection = new Set([...setA].filter((item) => setB.has(item)));
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Fix: Added await for the promise to simulate delay   // 🪲 Bug: No delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
