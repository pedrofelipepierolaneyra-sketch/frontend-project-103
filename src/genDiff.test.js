import { expect, test } from 'vitest';
import parse from './parsers.js';
import genDiff from './genDiff.js';

test('generates difference for flat JSON files', () => {
  const data1 = parse('__fixtures__/file1.json');
  const data2 = parse('__fixtures__/file2.json');

  const result = genDiff(data1, data2);

  expect(result).toBe(`{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});