root = {
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

function preorderTraverse(node) {
    console.log(node['data'] + '')

    if (node['children'].length > 0) {
        for (let i = 0; i < node['children'].length; i++) {
            preorderTraverse(node['children'][i])
        }
    }
    return
}

preorderTraverse(root)