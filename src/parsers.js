import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';

const parse = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const extension = path.extname(filepath);

  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(data);
  }

  return JSON.parse(data);
};

export default parse;