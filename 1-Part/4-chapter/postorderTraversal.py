root = {
    'data': 'A', 'children': [
        {'data': 'B', 'children': [
            {'data': 'D', 'children': []}
        ]},
        {'data': 'C', 'children': [
            {'data': 'E', 'children': [
                {'data': 'G', 'children': []},
                {'data': 'H', 'children': []}
            ]},
            {'data': 'F', 'children': []}
        ]}
    ]
}


def postorderTraverse(node):
    for child in node['children']:
        postorderTraverse(child)
    print(node['data'], end=' ')

    return


postorderTraverse(root)
