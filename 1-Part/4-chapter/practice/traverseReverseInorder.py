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

def traverse_reverse_inorder(node):
    if len(node['children']) >= 2:
        traverse_reverse_inorder(node['children'][1])

    print(node['data'], end=' ')

    if len(node['children']) >= 1:
        traverse_reverse_inorder(node['children'][0])

traverse_reverse_inorder(root)