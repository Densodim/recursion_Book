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


def inorderTraverse(node):
    if len(node['children']) >= 1:
        inorderTraverse(node['children'][0])
    print(node['data'], end=' ')

    if len(node['children']) >= 2:
        inorderTraverse(node['children'][1])

    return


inorderTraverse(root)
