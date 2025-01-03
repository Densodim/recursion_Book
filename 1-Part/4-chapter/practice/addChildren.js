let root = {
    'data': 'Alice', 'children': [
        {
            'data': 'Bob', 'children': [
                {'data': 'Darya', 'children': []}
            ]
        },
        {
            'data': 'Caroline', 'children': [
                {
                    'data': 'Eve', 'children': [
                        {'data': 'Gonzalo', 'children': []},
                        {'data': 'Hadassah', 'children': []}
                    ]
                },
                {'data': 'Fred', 'children': []}
            ]
        }
    ]
}

function addChildren(node) {
    if (node.children.length > 0) {
        node.children.forEach(child => addChildren(child))
    } else {
        node.children.push({'data': 'NewChild', 'children': []})
    }
}

function printTree(node, level = 0) {
    console.log(' '.repeat(level) + node.data)
    node.children.forEach(child => printTree(child, level + 1))
}

printTree(root)
addChildren(root)
printTree(root)