def formatter_images(data):
    return [
        {
            'id': image[0],
            'description': image[1] if image[1] else None,
        }
        for image in data
    ]
