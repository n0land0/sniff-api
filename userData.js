// const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const lorem = 'lol hey im a dog'

const userData = [
  {
    id: 1,
    owner_name: 'Adan',
    dog_name:  'Biscuit',
    profile_pic: 'https://bloximages.chicago2.vip.townnews.com/lacrossetribune.com/content/tncms/assets/v3/editorial/a/22/a226927b-59f9-5c70-ae03-37dc6f0415a6/5802ae6aba39c.image.jpg?resize=1200%2C800',
    dog_breed: 'Terrier',
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
          "location": "Kennedy Dog Park"
      },
      {
        "id": 1635920058020,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Charlize",
            "dogName": "Terry"
        },
        "date": "2021-11-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058021,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Adan",
              "dogName": "Biscuit"
          },
          "date": "2021-11-2",
          "location": "Greenway Off-Leash Dog Park"
      },
      {
        "id": 1635920058022,
        "userId": 2,
        "playmate": {
            "id": 5,
            "ownerName": "Urshila",
            "dogName": "Kevin"
        },
        "date": "2021-10-18",
        "location": "Fuller Dog Park"
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
          "location": "Little Boxcar Dog Park"
      },
      {
        "id": 1635920058024,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Charlize",
            "dogName": "Terry"
        },
        "date": "2021-09-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058025,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Adan",
              "dogName": "Biscuit"
          },
          "date": "2021-08-24",
          "location": "Greenway Off-Leash Dog Park"
      },
      {
        "id": 1635920058026,
        "userId": 2,
        "playmate": {
          "id": 5,
          "ownerName": "Urshila",
          "dogName": "Kevin"
        },
        "date": "2021-08-18",
        "location": "Lowry Dog Park"
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
          "location": "Greenway Off-Leash Dog Park"
      },
      {
        "id": 1635920058028,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Charlize",
            "dogName": "Terry"
        },
        "date": "2021-07-18",
        "location": "Cherry Creek Dog Park"
      },
      {
          "id": 1635920058029,
          "userId": 2,
          "playmate": {
            "id": 5,
            "ownerName": "Urshila",
            "dogName": "Kevin"
          },
          "date": "2021-06-24",
          "location": "Midtown Dog Park"
      },
      {
        "id": 1635920058030,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Charlize",
            "dogName": "Terry"
        },
        "date": "2021-06-18",
        "location": "Carla Madison Dog Park"
      },
      {
          "id": 1635920058031,
          "userId": 2,
          "playmate": {
              "id": 1,
              "ownerName": "Adan",
              "dogName": "Biscuit"
          },
          "date": "2021-05-24",
          "location": "Greenway Off-Leash Dog Park"
      },
      {
        "id": 1635920058032,
        "userId": 2,
        "playmate": {
            "id": 4,
            "ownerName": "Charlize",
            "dogName": "Terry"
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
          "location": "Barnum Dog Park"
      },
      {
        "id": 1635920058034,
        "userId": 2,
        "playmate": {
          "id": 5,
          "ownerName": "Urshila",
          "dogName": "Kevin"
        },
        "date": "2021-04-18",
        "location": "Skyline Off-Leash Area"
      },
    ]
  },
  {
    id: 3,
    owner_name: 'Paul',
    dog_name: 'Twinky',
    profile_pic: 'https://img.freepik.com/free-photo/young-indian-man-with-pekingese-dog-using-computer-vet-consultation-white-background_250865-213.jpg?size=626&ext=jpg',
    dog_breed: 'Pekingese',
    bio: lorem,
    appointments: []
  },
  {
    id: 4,
    owner_name: 'Charlize',
    dog_name: 'Terry',
    profile_pic: 'https://akns-images.eonline.com/eol_images/Entire_Site/2014110/rs_1024x844-140210122823-1024.freddy-great-dane-021014.jpg?fit=around%7C1024:844&output-quality=90&crop=1024:844;center,top',
    dog_breed: 'Great Dane',
    bio: lorem,
    appointments: []
  },
  {
    id: 5,
    owner_name: 'Urshila',
    dog_name: 'Kevin',
    profile_pic: 'https://www.treehugger.com/thmb/We4TbRk6iYC7S7CSE6WoHPSOM2o=/648x364/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__10__noah_chubby_corgi-84acd4f541764777943de71f7ae1ffbb.PNG',
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
    profile_pic: 'https://www.sheknows.com/wp-content/uploads/2018/08/a0squaxzwihmlowrsbbe.jpeg',
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
  {
    id: 11,
    owner_name: 'Annette',
    dog_name: 'Tank',
    profile_pic: 'https://images.squarespace-cdn.com/content/v1/5d9f65d12a10d4166969add0/1599061633325-MDN75E73IQXATNJI2YCR/best+dogs+3.jpeg',
    dog_breed: 'Beagle',
    bio: lorem,
    appointments: []
  },
  {
    id: 12,
    owner_name: 'Liliana',
    dog_name: 'Sourdough',
    profile_pic: 'https://hips.hearstapps.com/cos.h-cdn.co/assets/cm/14/25/53a07c0a7b3b3_-_cos-01-dog-owner-problems-xl.jpg',
    dog_breed: 'Spaniel',
    bio: lorem,
    appointments: []
  },
  {
    id: 13,
    owner_name: 'Ravi',
    dog_name: 'Obi-Wan',
    profile_pic: 'https://www.thehindu.com/life-and-style/b1rocx/article31710009.ece/alternates/FREE_435/01mpstuart1',
    dog_breed: 'Terrier',
    bio: lorem,
    appointments: []
  },
]

module.exports = userData
