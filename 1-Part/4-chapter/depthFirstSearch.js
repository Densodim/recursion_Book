let root = {
    'data': 'Alice', 'children': [
        {'data': 'Bob', 'children': [
            {'data': 'Darya', 'children': []}
        ]},
        {'data': 'Caroline', 'children': [
            {'data': 'Eve', 'children': [
                {'data': 'Gonzalo', 'children': []},
                {'data': 'Hadassah', 'children': []}
            ]},
            {'data': 'Fred', 'children': []}
        ]}
    ]
}

function find8LetterName(node) {
    console.log(`Visiting node ${node.data}`)

    console.log(`Checking if ${node.data} is 8 letter...`)
    if (node.data.length === 8){
        return node.data
    }
    if (node.children.length > 0){
        for (let child of node.children){
            let returnValue = find8LetterName(child);
            if(returnValue != null){
                return returnValue
            }
        }
    }

    // console.log(`Checking if ${node.data} is 8 letters...`)
    // if (node.data.length === 8) return node.data

    return null
}

console.log('Found an 8-letter name:' + find8LetterName(root))