// const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const lorem = 'lol hey im a dog'

const userData = [
  {
    id: 1,
    owner_name: 'Nolan',
    dog_name:  'Biscuit',
    profile_pic: 'https://i.imgur.com/i4UwYMu.jpeg',
    dog_breed: 'Sheppard',
    bio: lorem,
    appointments: []
  },
  {
    id: 2,
    owner_name: 'Joshua',
    dog_name: 'Fido',
    profile_pic: 'https://i.imgur.com/LRoLTlK.jpeg',
    dog_breed: 'Labrador',
    bio: lorem,
    appointments: [
      {
          "id": 1635920058019,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058020,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058021,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058022,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058023,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058024,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058025,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058026,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058027,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058028,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058029,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058030,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058031,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058032,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058033,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Nolan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058034,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
    ]
  },
  {
    id: 3,
    owner_name: 'Paul',
    dog_name: 'Twinky',
    profile_pic: 'https://i.imgur.com/ZMPYHsk.jpeg',
    dog_breed: 'Pit Bull',
    bio: lorem,
    appointments: []
  },
  {
    id: 4,
    owner_name: 'Robbie',
    dog_name: 'Chunk',
    profile_pic: 'https://i.imgur.com/tIqs5vu.jpeg',
    dog_breed: 'Wiener',
    bio: lorem,
    appointments: []
  },
  {
    id: 5,
    owner_name: 'Kayla',
    dog_name: 'Kevin',
    profile_pic: 'https://i.imgur.com/ZKGFJbC.jpeg',
    dog_breed: 'Corgi',
    bio: lorem,
    appointments: []
  }
]

module.exports = userData
