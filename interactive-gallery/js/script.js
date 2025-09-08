function initGallery() {
  console.log("Page loaded – initGallery triggered ✅");

  let images = document.querySelectorAll(".gallery img");

  // Loop through each image
  for (let i = 0; i < images.length; i++) {
    let img = images[i];

    // Add tabindex dynamically
    img.setAttribute("tabindex", "0");

    // Mouse Events
    img.addEventListener("mouseover", function () {
      console.log("Mouse over: " + img.alt);
    });
    img.addEventListener("mouseleave", function () {
      console.log("Mouse leave: " + img.alt);
    });

    // Focus Events (keyboard accessibility)
    img.addEventListener("focus", function () {
      console.log("Focus on: " + img.alt);
    });
    img.addEventListener("blur", function () {
      console.log("Blur from: " + img.alt);
    });
  }
}