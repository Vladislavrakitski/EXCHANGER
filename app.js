const express = require('express')
const config = require('config')
const {Client} = require('pg')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = config.get('port') || 5000

const bids = new Client({
  user: 'postgres',
  password: 'postgres',
  host: config.get('dataHost'),
  port: config.get('dataPort'),
  database: config.get('dataBase')
})

app.use('/', express.static(path.join(__dirname, 'client')))

app.get('/admin', cors(), async (req, res) => {
  const rows = await getAllBids()
  res.setHeader("content-type", "application/json")
  res.send(JSON.stringify(rows))
})

app.listen(PORT, () => console.log(`Web server has been started on port ${PORT}`))

// connect to database

async function getAllBids() {
  try{
    await bids.connect()
    console.log('Connected successfully.')
    const {rows} = await bids.query('SELECT * FROM bids')
    return rows
  } catch (e) {
    console.log(`Something wrong happend ${e}`)
  } finally {
    await bids.end()
    console.log('Client disconnected successfully.')    
  }
}

async function createBid(bid){
  try {
    await bids.connect()
    await bids.query('INSERT INTO bids VALUES ($1)', [bid])
  } catch(e) {
    console.log(`Something wrong happend ${e}`)
  } finally {
    await bids.end()
    date = null;
    console.log('Client disconnected successfully.')    
  }
}




