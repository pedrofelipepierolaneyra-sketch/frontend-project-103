import _ from 'lodash';

const genDiff = (data1, data2) => {
    const keys = _.sortBy(
        [...new Set([...Object.keys(data1), ...Object.keys(data2)])],
      );

  const lines = keys.map((key) => {
    const hasData1 = Object.hasOwn(data1, key);
    const hasData2 = Object.hasOwn(data2, key);

    if (hasData1 && hasData2) {
      if (data1[key] === data2[key]) {
        return `    ${key}: ${data1[key]}`;
      }

      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }

    if (hasData1) {
      return `  - ${key}: ${data1[key]}`;
    }

    return `  + ${key}: ${data2[key]}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;