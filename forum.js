const out = document.getElementById('msgs');
let messages = [
  {
    "sender": "mr customer",
    "date": "2010-05-10",
    "title": "looking for someone",
    "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
  },
  {
    "sender": "Moe",
    "date": "2010-05-10",
    "title": "re: looking for someone",
    "body": "Let's ask around. What's his name?"
  },
  {
    "sender": "mr customer",
    "date": "2010-05-10",
    "title": "re: looking for someone",
    "body": "Yeah, his name is Seymore Butz."
  },
  {
    "sender": "Moe",
    "date": "2010-05-10",
    "title": "re: looking for someone",
    "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
  },
  {
    "sender": "Barney",
    "date": "2010-05-10",
    "title": "re: looking for someone",
    "body": "LOL"
  },
  {
    "sender": "Moe",
    "date": "2010-05-10",
    "title": "re: looking for someone",
    "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
  },
  {
    "sender": "mr customer",
    "date": "2010-05-10",
    "title": "re: looking for someone",
    "body": "😂😂😂😂😂😂😂😂😂😂😂"
  }
];

function drawMsgs() {
  out.innerText = '';
  for (const msg of messages) {
    let article = document.createElement('article');
    let date = document.createElement('pre');
    let name = document.createElement('h3');
    let tit = document.createElement('h2');
    let content = document.createElement('p');
    date.innerHTML = msg['date'];
    name.innerHTML = msg['sender'];
    tit.innerHTML = msg['title'];
    content.innerHTML = msg['body'];
    article.append(date);
    article.append(name);
    article.append(tit);
    article.append(content);
    out.append(article);
  }
}

function addMsg(e) {
  e.preventDefault();
  const day = new Date;
  let newmsg = {};
  newmsg['sender'] = document.getElementById('uname').value;
  newmsg['title'] = document.getElementById('title').value;
  newmsg['body'] = document.getElementById('content').value;
  newmsg['date'] = day.toISOString().split('T')[0];
  messages.push(newmsg);
  document.getElementById('newmsg').close();
  drawMsgs();
}

drawMsgs();
