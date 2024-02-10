const rotateValues: Array<[number, number, number]> = [
  [-5, -5, -22],
  [5, 5, -22],
  [-9, -9, -22],
  [9.5, 9.5, -22],
  [-7, -7, -22],
  [7, 7, -22],
];

export const images = Array.from({ length: 6 }).map((_item, index) => ({
  src: `https://picsum.photos/1000/1500?random=${index}`,
  rotateValues: rotateValues[index],
  translateValues: [0, 0, -200] as [number, number, number],
}));
