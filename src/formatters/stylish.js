const stringify = (value, depth) => {
    if (typeof value !== 'object' || value === null) {
      return String(value);
    }
  
    const indent = ' '.repeat(depth * 4);
  
    const lines = Object.entries(value).map(([key, val]) => (
      `${indent}    ${key}: ${stringify(val, depth + 1)}`
    ));
  
    return `{\n${lines.join('\n')}\n${indent}}`;
  };
  
  const stylish = (diff, depth = 0) => {
    const indent = ' '.repeat(depth * 4);
  
    const lines = diff.map((node) => {
      const key = node.key;
  
      switch (node.type) {
        case 'unchanged':
          return `${indent}    ${key}: ${stringify(node.value, depth + 1)}`;
  
        case 'added':
          return `${indent}  + ${key}: ${stringify(node.value, depth + 1)}`;
  
        case 'removed':
          return `${indent}  - ${key}: ${stringify(node.value, depth + 1)}`;
  
        case 'changed':
          return `${indent}  - ${key}: ${stringify(node.oldValue, depth + 1)}\n`
            + `${indent}  + ${key}: ${stringify(node.newValue, depth + 1)}`;
  
        case 'nested':
          return `${indent}    ${key}: {\n`
            + `${stylish(node.children, depth + 1)}\n`
            + `${indent}    }`;
  
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    });
  
    const result = lines.join('\n');
  
    if (depth === 0) {
      return `{\n${result}\n}`;
    }
  
    return result;
  };
  
  export default stylish;