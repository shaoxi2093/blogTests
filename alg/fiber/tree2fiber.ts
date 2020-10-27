var treeNode = {
  value: 'root',
  chidren: [{
    value: 'leaf-1',
    chidren: [{
      value: 'leaf-1-1',
      chidren: [{
        value: 'leaf-1-1-1',
        chidren: [{
          value: 'leaf-1-1-1-1'
        }]
      }]
    }]
  }, {
    value: 'leaf-2',
    chidren: [{
      value: 'leaf-2-1'
    },{
      value: 'leaf-2-2'
    },{
      value: 'leaf-2-3',
      chidren: [{
        value: 'leaf-2-3-1'
      },{
        value: 'leaf-2-3-2'
      },{
        value: 'leaf-2-3-3'
      }]
    }]
  }, {
    value: 'leaf-3',
    chidren: [{
      value: 'leaf-3-1'
    }]
  }]
}

// var fiberRoot = {
//   value: 'root',
//   return: null,
//   sibling: null,
//   child: fiberLeaf1
// }
// var fiberLeaf1 = {
//   value: 'leaf-1',
//   return: fiberRoot,
//   sibling: fiberLeaf2,
//   child: null
// }
// var fiberLeaf2 = {
//   value: 'leaf-2',
//   return: fiberRoot,
//   sibling: null,
//   child: null
// }

interface ITree {
  value: string
  children?: ITree[]
}

class Fnode {
  constructor(value) {
    this.value = value
    this.sibling = null
    this.child = null
    this.return = null
  }
}
var tree2fiber = (tree: ITree) => {
  const fiber = {
    value: tree.value,
    sibling: null,
    child: null,
    return: null,
  }

  fiber.child = tree?.children.reduceRight((prev, current) => {

  })
}
