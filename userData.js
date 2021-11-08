// const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const lorem = 'lol hey im a dog'

const userData = [
  {
    id: 1,
    owner_name: 'Nolan',
    dog_name:  'Biscuit',
    profile_pic: 'https://i.imgur.com/i4UwYMu.jpeg',
    dog_breed: 'Shepherd',
    bio: lorem,
    appointments: []
  },
  {
    id: 2,
    owner_name: 'Joshua',
    dog_name: 'Bruce',
    profile_pic: 'https://i.imgur.com/LRoLTlK.jpeg',
    dog_breed: 'Labrador',
    bio: lorem,
    appointments: [
      {
          "id": 1635920058019,
          "userId": 2,
          "playmate": {
              "id": 3,
              "ownerName": "Paul",
              "dogName": "Twinky"
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
          "date": "2021-11-2",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058022,
        "userId": 2,
        "playmate": {
            "id": 5,
            "ownerName": "Kayla",
            "dogName": "Kevin"
        },
        "date": "2021-10-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058023,
          "userId": 2,
          "playmate": {
            "id": 3,
            "ownerName": "Paul",
            "dogName": "Twinky"
          },
          "date": "2021-09-24",
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
        "date": "2021-09-18",
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
          "date": "2021-08-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058026,
        "userId": 2,
        "playmate": {
          "id": 5,
          "ownerName": "Kayla",
          "dogName": "Kevin"
        },
        "date": "2021-08-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058027,
          "userId": 2,
          "playmate": {
            "id": 3,
            "ownerName": "Paul",
            "dogName": "Twinky"
          },
          "date": "2021-07-24",
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
        "date": "2021-07-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058029,
          "userId": 2,
          "playmate": {
            "id": 5,
            "ownerName": "Kayla",
            "dogName": "Kevin"
          },
          "date": "2021-06-24",
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
        "date": "2021-06-18",
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
          "date": "2021-05-24",
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
        "date": "2021-05-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058033,
          "userId": 2,
          "playmate": {
            "id": 3,
            "ownerName": "Paul",
            "dogName": "Twinky"
          },
          "date": "2021-04-24",
          "location": "Greenway Dog Park"
      },
      {
        "id": 1635920058034,
        "userId": 2,
        "playmate": {
          "id": 5,
          "ownerName": "Kayla",
          "dogName": "Kevin"
        },
        "date": "2021-04-18",
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
  },
  {
    id: 6,
    owner_name: 'Stacy',
    dog_name: 'Herman',
    profile_pic: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2020/08/shutterstock_1359893087-scaled.jpg',
    dog_breed: 'German',
    bio: lorem,
    appointments: []
  },
  {
    id: 7,
    owner_name: 'Ricardo',
    dog_name: 'Cinnamon',
    profile_pic: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/09/14104433/Golden-Retriever-licking-the-face-of-a-man-outdoors.jpg',
    dog_breed: 'Golden Retriever',
    bio: lorem,
    appointments: []
  },
  {
    id: 8,
    owner_name: 'Hilde',
    dog_name: 'Xerxes',
    profile_pic: 'https://i.insider.com/5b8ff6023cccd14f008b458c?width=750&format=jpeg&auto=webp',
    dog_breed: 'Spaniel',
    bio: lorem,
    appointments: []
  },
  {
    id: 9,
    owner_name: 'Yua',
    dog_name: 'Mabel',
    profile_pic: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_844,w_1500,x_0,y_40/f_auto,q_auto,w_1100/v1555004118/shape/mentalfloss/51153-istock-485392746.jpg',
    dog_breed: 'Shepherd',
    bio: lorem,
    appointments: []
  },
  {
    id: 10,
    owner_name: 'Eryn',
    dog_name: 'Scoops',
    profile_pic: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-1094894550_header-1024x575.jpg?w=1155&h=1528',
    dog_breed: 'Bulldog',
    bio: lorem,
    appointments: []
  },
]

module.exports = userData
