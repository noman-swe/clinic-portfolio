export const getInitialsOfNames = (name: string): string => {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
