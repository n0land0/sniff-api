const express = require('express')
const app = express()
app.use(express.json())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

app.locals.title = 'Sniff'

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  })
