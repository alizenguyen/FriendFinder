// ===============================================================================
// DATA
// Below data will hold all of the available friends.
// ===============================================================================

var friendsArray = [{
        "name": "Ahmed",
        "photo": "http://i65.tinypic.com/25i2pza.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Jerry",
        "photo": "http://i64.tinypic.com/1y09eb.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Ms. Ashley",
        "photo": "http://i63.tinypic.com/2m4yfpg.jpg",
        "scores": [
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Wanda",
        "photo": "http://i63.tinypic.com/25i3c5k.jpg",
        "scores": [
            3,
            3,
            1,
            5,
            2,
            3,
            2,
            2,
            4,
            5
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;