root = {
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


def find8LetterName(node):
    print('Visiting node ' + node['data'] + '...')

    # print('Checking if ' + node['data'] + 'is 8 letters...')
    # if len(node['data']) == 8: return node['data']

    if len(node['children']) > 0:
        for child in node['children']:
            returnValue = find8LetterName(child)
            if returnValue is not None:
                return returnValue

    print('Checking if ' + node['data'] + ' is 8 letters...')
    if len(node['data']) == 8: return node['data']

    return None


print('Found an 8-letter name:' + str(find8LetterName(root)))
