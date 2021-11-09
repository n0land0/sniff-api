# Sniff API

This is a express server using Knex to connect to our postgresql database. We are providing user, appointment, and dog park information to our front end, that can be found [here](https://github.com/n0land0/sniff).

## Install Dependencies

    npm install

# Endpoints

## Appointments

### Request

`GET /api/v1/appointments/:userId`

  ```   getAppointments(userId) {
    return fetch(`https://sniff-api.herokuapp.com/api/v1/appointments/${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },
```
### Response

  ``` id: integer,
   dogPark: string,
   date: string yyyy-mm-dd,
   ownersId: integer,
   ownerName: string,
   dogName: string,
   profilePic: url,
   
    {}
```
### Request 

`POST /api/v1/appointments`

```
postAppointment(newPlaydate) {
    return fetch('https://sniff-api.herokuapp.com/api/v1/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlaydate)
    })
    .then(response => {
      this.checkResponse(response)
      return response.json()
    })
    .catch(error => {
      console.error(error)
      return error.message
    })
  },
```

### Response

`Appointment posted!`

### Request 

`DELETE /api/v1/appointments/:apptId`

```
 deleteAppointment(appointmentId) {
    return fetch(`https://sniff-api.herokuapp.com/api/v1/appointments/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      this.checkResponse(response)
      return response.json()
    })
    .catch(error => {
      console.error(error)
      return error.message
    })
  },
```

### Response

`Appointment deleted! `

## Users

### Request

`GET /api/v1/users/:userId`

  ```  getSingleUser(userId) {
    return fetch(`https://sniff-api.herokuapp.com/api/v1/users/${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },
  ```
### Response

   ``` id: integer,
    owner_name: string,
    dog_name: string, 
    profile_pic: url, 
    dog_breed: string,
    bio: string,

    {}
```

### Request 

`GET /api/v1/users`

```
  getUsers() {
    return fetch('https://sniff-api.herokuapp.com/api/v1/users')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },
```
### Response

```
id: integer,
owner_name: string,
dog_name: string, 
profile_pic: url, 
dog_breed: string,
bio: string,

[{},{}...]
```

## Parks

### Request

`GET /api/v1/parks`

```
 getParks() {
    return fetch('https://sniff-api.herokuapp.com/api/v1/parks')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },
```

### Response

  ```
  id: integer,
  name: string, 
  coords: {
    lat: integer,
    lng: integer
  }
  
  [{},{}...]
  ```
