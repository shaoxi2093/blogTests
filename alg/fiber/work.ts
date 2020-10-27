const work = (fiber) => {
  let root = fiber;
  let current = fiber;

  while (true) {
    let child = doWork(current)

    if(child) {
      current = child
      continue
    }

    if(current == root) {
      return
    }

    // 循环返回到父节点
    while(!current.sibling) {
      if(!child.return || child.return == root) {
        return
      }
      current = child.return
    }

    current = current.sibling
  }
};

function doWork(node) {
  console.log(node.instance.name);
  const children = node.instance.render();
  return link(node, children);
}

function link(parent, elements) {
  if (elements === null) elements = [];

  parent.child = elements.reduceRight((previous, current) => {
    const node = new FNode(current);
    node.return = parent;
    node.sibling = previous;
    return node;
  }, null);

  return parent.child;
}

class FNode {
  constructor(instance) {
    this.instance = instance;
    this.child = null;
    this.sibling = null;
    this.return = null;
  }
}
