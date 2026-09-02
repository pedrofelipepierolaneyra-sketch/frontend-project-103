const isObject = (value) => (
    typeof value === 'object'
    && value !== null
    && !Array.isArray(value)
  );
  
  const formatValue = (value) => {
    if (isObject(value)) {
      return '[complex value]';
    }
  
    if (typeof value === 'string') {
      return `'${value}'`;
    }
  
    return String(value);
  };
  
  const plain = (diff, path = '') => {
    const lines = diff.flatMap((node) => {
      const currentPath = path ? `${path}.${node.key}` : node.key;
  
      switch (node.type) {
        case 'unchanged':
          return [];
  
        case 'nested':
          return plain(node.children, currentPath);
  
        case 'added':
          return `Property '${currentPath}' was added with value: ${formatValue(node.value)}`;
  
        case 'removed':
          return `Property '${currentPath}' was removed`;
  
        case 'changed':
          return `Property '${currentPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
  
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    });
  
    return lines.join('\n');
  };
  
  export default plain;