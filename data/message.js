const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
];

module.exports = messages;