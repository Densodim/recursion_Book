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


def addChildren(node):
    if len(node['children']) > 0:
        for child in node['children']:
            addChildren(child)
    else:
        node['children'].append({'data': 'NewChildren', 'children': []})
    return


def printTree(node, level=0):
    print(' ' * level + node['data'])
    for child in node['children']:
        printTree(child, level + 1)


addChildren(root)
printTree(root)
