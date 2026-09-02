import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
};

const getFormatter = (format) => {
  if (!Object.hasOwn(formatters, format)) {
    throw new Error(`Unknown format: ${format}`);
  }

  return formatters[format];
};

export default getFormatter;