let root = {
    'data': 'A', 'children': [
        {
            'data': 'B', 'children': [
                {'data': 'D', 'children': []}
            ]
        },
        {
            'data': 'C', 'children': [
                {
                    'data': 'E', 'children': [
                        {'data': 'G', 'children': []},
                        {'data': 'H', 'children': []}
                    ]
                },
                {'data': 'F', 'children': []}
            ]
        }
    ]
}

function getDepth(node) {
    if (node.children.length === 0) {
        return 0
    } else {
        let maxChildDepth = 0
        for (let child of node.children) {
            let childDepth = getDepth(child)
            if (childDepth > maxChildDepth) {
                maxChildDepth = childDepth
            }
        }
        return maxChildDepth + 1
    }
}

console.log(`Depth of tree is ${getDepth(root)}`)