function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export function generateMemorablePhrase(): string {
  const wordPool = [
    "Correct", "Horse", "Battery", "Staple", "Sunshine", "Cloud", "Banana", "Keyboard",
    "Purple", "River", "Galaxy", "Mountain", "Velvet", "Echo", "Flame", "Zebra",
    "Orbit", "Moon", "Forest", "Laser", "Vector", "Nebula", "Oxide", "Lunar",
    "Signal", "Drift", "Glide", "Flux", "Ripple", "Spectrum", "Zenith", "Frost"
  ];
  const selected = shuffle(wordPool).slice(0, 4);
  return selected.join(getRandomElement(["-", "_", "."]));
}

export function generatePinStyle(): string {
  const getBlock = () => Math.floor(1000 + Math.random() * 9000).toString();
  const separator = getRandomElement(["-", ".", ":"]);
  return `${getBlock()}${separator}${getBlock()}${separator}${getBlock()}`;
}

export function generateFirstLetterSentence(): string {
  const sentences = [
    "My dog loves to chase squirrels in the park",
    "Never forget to drink water and stay healthy",
    "Programming is both an art and a science",
    "Always keep your files backed up regularly",
    "Finding balance between work and life is crucial",
    "Create strong passwords using clever phrases"
  ];
  const sentence = getRandomElement(sentences);
  const extra = Math.random() > 0.5 ? Math.floor(1000 + Math.random() * 9000).toString() : "!";
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join("") + extra;
}

export function generateCustomPattern(): string {
  const words = [
    "Secure", "Fast", "Strong", "Reliable", "Agile", "Stealth", "Quantum", "Orbit",
    "Falcon", "Nova", "Echo", "Alpha", "Nimbus", "Vector", "Omega", "Crimson",
    "Shadow", "Titan", "Blaze", "Vortex", "Pixel", "Rocket", "Knight", "Storm",
    "Glitch", "Nebula", "Radar", "Zenith", "Warden", "Jaguar", "Rogue", "Spark"
  ];
  const year = Math.floor(2020 + Math.random() * 6);
  const suffix = Math.floor(100 + Math.random() * 900);
  const middle = getRandomElement(["@", "#", "$", "_"]);
  return `${getRandomElement(words)}${middle}${year}${middle}${suffix}`;
}

export function generateTemplatePassword(templateName: string): string {
  switch (templateName) {
    case "Memorable Phrase":
      return generateMemorablePhrase();
    case "PIN Style":
      return generatePinStyle();
    case "First Letter Sentence":
      return generateFirstLetterSentence();
    case "Custom Pattern":
      return generateCustomPattern();
    default:
      return "Template not found";
  }
}