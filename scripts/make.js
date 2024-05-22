// Get the next and previous buttons store them in buttons constant
const buttons = document.querySelectorAll("[data-carousel-button]");

// loop through the buttons
buttons.forEach((button) => {
  // Add a click event listener to the button
  button.addEventListener("click", () => {
    // Determine the offset for the slide change based on the button clicked
    // If the button's data attribute is 'next', set offset to 1, otherwise set it to -1
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // Find the nearest ancestor element with the attribute 'data-carousel'
    // Then, within that ancestor, find the element with the attribute 'data-slides'
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    // Find the currently active slide within the slides container
    const activeSlide = slides.querySelector("[data-active]");

    // Calculate the new index for the slide to be displayed
    // Add all slides to an array, get the index of the active slide, and add the offset
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // If the new index is less than 0, go to the last slide
    if (newIndex < 0) newIndex = slides.children.length - 1;
    // If the new index is greater than or equal to the number of slides, go back to the first slide
    if (newIndex >= slides.children.length) newIndex = 0;

    // Mark the current slide as active
    slides.children[newIndex].dataset.active = true;
    // Remove the 'active' attribute from the previously active slide
    delete activeSlide.dataset.active;
  });
});

//audio event on kitten image
const audio = new Audio(); //create audio element
audio.src = "../sounds/purr.mp3"; //set audio element to the meow sound
