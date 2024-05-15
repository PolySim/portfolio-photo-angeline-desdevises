def pages_formatter(data):
    return [{
        'index': page[0],
        'title': page[1],
        'article': page[2]
    } for page in data]
