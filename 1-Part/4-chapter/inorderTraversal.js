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

function inorderTraverse(node) {
    if (node['children'].length >=1){
        inorderTraverse(node['children'][0])
    }
    console.log(node['data'])
    if (node['children'].length >=2){
        inorderTraverse(node['children'][1])
    }

    return
}

inorderTraverse(root)