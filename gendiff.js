#!/usr/bin/env node

import { Command } from 'commander';
import parse from './src/parsers.js';
import genDiff from './src/genDiff.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parse(filepath1);
    const data2 = parse(filepath2);

    console.log(genDiff(data1, data2));
  });

program.parse();