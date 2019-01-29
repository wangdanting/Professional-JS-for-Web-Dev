const generateTree = () => {
  const tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: [1]
    },
    1: {
      id: 1,
      counter: 0,
      childIds: []
    }
  };
  return tree;
};

export default generateTree;
