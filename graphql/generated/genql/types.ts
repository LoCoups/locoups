export default {
    "scalars": [
        1,
        2,
        3,
        9,
        12
    ],
    "types": {
        "Business": {
            "address": [
                1
            ],
            "categories": [
                4
            ],
            "city": [
                1
            ],
            "coupons": [
                5
            ],
            "id": [
                2
            ],
            "latitude": [
                3
            ],
            "longitude": [
                3
            ],
            "name": [
                1
            ],
            "neighborhood": [
                1
            ],
            "photos": [
                11
            ],
            "state": [
                1
            ],
            "zipCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "ID": {},
        "Float": {},
        "Category": {
            "businesses": [
                0
            ],
            "category": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Coupon": {
            "business": [
                0
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "users": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Link": {
            "category": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "imageUrl": [
                1
            ],
            "title": [
                1
            ],
            "url": [
                1
            ],
            "users": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "addBusiness": [
                0,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "city": [
                        1
                    ],
                    "latitude": [
                        1
                    ],
                    "longitude": [
                        1
                    ],
                    "name": [
                        1,
                        "String!"
                    ],
                    "neighborhood": [
                        1
                    ],
                    "state": [
                        1
                    ],
                    "zipCode": [
                        1
                    ]
                }
            ],
            "deleteBusiness": [
                0,
                {
                    "id": [
                        2,
                        "ID!"
                    ]
                }
            ],
            "updateBusiness": [
                0,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "city": [
                        1
                    ],
                    "id": [
                        2,
                        "ID!"
                    ],
                    "latitude": [
                        1
                    ],
                    "longitude": [
                        1
                    ],
                    "name": [
                        1,
                        "String!"
                    ],
                    "neighborhood": [
                        1
                    ],
                    "state": [
                        1
                    ],
                    "zipCode": [
                        1
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "getBusinesses": [
                0
            ],
            "__typename": [
                1
            ]
        },
        "Role": {},
        "User": {
            "bookmarks": [
                6
            ],
            "coupons": [
                5
            ],
            "createdAt": [
                1
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "image": [
                1
            ],
            "role": [
                9
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "photo": {
            "business": [
                0
            ],
            "caption": [
                1
            ],
            "id": [
                2
            ],
            "imgUrl": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {}
    }
}