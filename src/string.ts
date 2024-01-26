/**
 * Converts a hyphen-separated string to camel case.
 * @param str - The string to convert.
 * @returns The camel case version of the string.
 */
export const camelCase = (str: string) => {
  'worklet';

  return str
    .replace(/[-_]+/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, '');
};

/**
 * Converts a string to snake case.
 *
 * @param str - The input string.
 * @returns The snake case version of the input string.
 */
export const snakeCase = (str: string): string => {
  return str
    .replace(/[-\s]+/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toLowerCase())
    .replace(/\s+/g, '_');
};

/**
 * Converts a string to kebab case.
 * Replaces spaces with hyphens and converts to lowercase.
 * @param str - The input string.
 * @returns The kebab case string.
 */
export const kebabCase = (str: string): string => {
  return str
    .replace(/[_\s]+/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toLowerCase())
    .replace(/\s+/g, '-');
};

/**
 * Converts a string to PascalCase.
 * @param str - The input string.
 * @returns The string converted to PascalCase.
 */
export const pascalCase = (str: string): string => {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');
};
