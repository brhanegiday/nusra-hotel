export function getRandomNumber(low: number, high: number) {
  // Generate a random number between low and high (inclusive)
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
