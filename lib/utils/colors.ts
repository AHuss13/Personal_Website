// Store original colors for reset
let originalElements: Set<HTMLElement> = new Set();

export function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function applyRandomColors() {
  // Clear previous elements
  originalElements = new Set();

  // Get all elements on the page
  const elements = document.querySelectorAll("*");

  elements.forEach((element) => {
    const htmlElement = element as HTMLElement;
    originalElements.add(htmlElement);

    // Apply random colors
    const randomColor = getRandomColor();
    const randomBgColor = getRandomColor();
    htmlElement.style.setProperty("color", randomColor, "important");
    htmlElement.style.setProperty(
      "background-color",
      randomBgColor,
      "important"
    );
  });
}

export function resetColors() {
  originalElements.forEach((element) => {
    // Remove the inline styles completely
    element.style.removeProperty("color");
    element.style.removeProperty("background-color");
  });
  originalElements.clear();
}
