import { camelCase, kebabCase, pascalCase, snakeCase } from '../string';

describe('String Conversions', () => {
  test('converts to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('Hello World')).toBe('helloWorld');
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  test('converts to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
    expect(snakeCase('Hello World')).toBe('hello_world');
    expect(snakeCase('helloWorld')).toBe('helloworld');
  });

  test('converts to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
    expect(kebabCase('Hello World')).toBe('hello-world');
    expect(kebabCase('helloWorld')).toBe('helloworld');
  });

  test('converts to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('hello_world')).toBe('HelloWorld');
  });
});
