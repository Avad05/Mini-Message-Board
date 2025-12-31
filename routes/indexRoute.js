const { Router } = require('express');
const messages = require('../data/message');
const indexRouter = Router();



indexRouter.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini Message Board',
    messages
  });
});

indexRouter.post('/new', (req, res) => {
 const author = req.body.author?.trim();
  const message = req.body.message?.trim();

  
  if (!author || !message) {
    return res.redirect('/new?error=empty');
  }
  

  messages.push({
    id: messages.length + 1,
    user: author,
    text: message,
    added: new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  });
   const lastId = messages[messages.length - 1].id;
  res.redirect(`/#msg-${lastId}`);
});

module.exports = indexRouter;
