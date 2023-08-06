export const shortText: (text: string) => string = (text) => {
  const words = text.split(" ");
  words.pop();
  const shortText = words.splice(0, 17).join(" ");

  return shortText + "...";
};
