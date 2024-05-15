def formatter_images(data, publication):
    return [
        {
            'id': image[0],
            'description': image[1] if publication == '2' else None
        }
        for image in data
    ]
