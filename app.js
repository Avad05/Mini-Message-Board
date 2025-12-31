const express = require('express');
const app = express();
const path = require('path');
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/indexRoute');
const newRouter = require('./routes/newMessageRoute');
const messageDetailRouter = require('./routes/detailRouter')

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageDetailRouter);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
