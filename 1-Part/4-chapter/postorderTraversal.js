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

function postorderTraverse(node) {
    for (let i = 0; i < node['children'].length; i++) {
        postorderTraverse(node['children'][i])
    }
    console.log(node['data'])

    return
}

postorderTraverse(root)