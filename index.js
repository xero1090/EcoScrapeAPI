const express = require('express');
const cors = require('cors');
const newsRouter = require('./routes/news');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use('/news', newsRouter);
//app.use('/newspaperssource', newsRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
