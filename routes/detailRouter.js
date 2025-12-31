const {Router} = require('express')
const detail = Router();
const messages = require('../data/message')

detail.get('/:id', (req, res) => {
  const message = messages.find(
    msg => msg.id === Number(req.params.id)
  );

  if (!message) {
    return res.status(404).send('Message not found');
  }

  res.render('messageDet', { message });
});

module.exports = detail;
