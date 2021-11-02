// const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const lorem = 'Fuck you'

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
        date: '2021-11-02',
        id: 1635662137907,
        location: 'Cherry Creek Dog Park',
        usersInvolved: [2, 3]
      },
      {
        date: '2021-09-29',
        id: 1635662144859,
        location: 'Greenway Dog Park',
        usersInvolved: [2, 5]
      }
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
