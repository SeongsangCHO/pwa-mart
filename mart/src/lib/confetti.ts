interface ConfettiOptions {
  length: number;
  width: number;
  height: number;
  colors: string[];
  gravity: number;
  wind: number;
  opacity: number;
  opacitySpeed: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  scaleSpeed: number;
  x: number;
  y: number;
  zIndex: number;
}

function createElements(
  root: HTMLElement,
  { length }: Pick<ConfettiOptions, "length">
) {
  return Array.from({ length }, () => {
    const element = document.createElement("div");
    element.className = "confetti";
    root.appendChild(element);
    return element;
  });
}

export default function confetti(root: HTMLElement, config: ConfettiOptions) {
  const elements = createElements(root, config);
}
