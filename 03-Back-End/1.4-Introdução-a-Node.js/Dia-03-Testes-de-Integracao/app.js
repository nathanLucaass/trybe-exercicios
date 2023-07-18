const express = require('express')

const app = express();
app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
    
  res.status(200).json({"totalChocolates": 4})
})

module.exports = app;