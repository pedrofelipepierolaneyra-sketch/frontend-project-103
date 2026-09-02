import { expect, test } from 'vitest';
import genDiff from './genDiff.js';

test('generates difference for flat JSON files', () => {
  const filepath1 = '__fixtures__/file1.json';
  const filepath2 = '__fixtures__/file2.json';

  const result = genDiff(filepath1, filepath2);

  expect(result).toBe(`{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});

test('generates difference for flat YAML files', () => {
  const filepath1 = '__fixtures__/file1.yml';
  const filepath2 = '__fixtures__/file2.yml';

  const expected = `{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(filepath1, filepath2)).toBe(expected);
});


test('generates difference for flat YAML files with .yaml extension', () => {
  const filepath1 = '__fixtures__/file1.yaml';
  const filepath2 = '__fixtures__/file2.yaml';

  const expected = `{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(filepath1, filepath2)).toBe(expected);
});

