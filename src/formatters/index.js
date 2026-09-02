import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const getFormatter = (format) => {
  if (!Object.hasOwn(formatters, format)) {
    throw new Error(`Unknown format: ${format}`);
  }

  return formatters[format];
};

export default getFormatter;