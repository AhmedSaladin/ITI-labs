class FacebookAccount {
  constructor() {
    this.friends = [];
    this.posts = [];
    this.notifications = [];
  }

  add_friend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  remove_friend(user) {
    this.friends = this.friends.filter((account) => {
      return user != account;
    });
    user.friends = user.friends.filter((account) => {
      return this != account;
    });
  }

  send_message_to_all_friends(msg) {
    this.friends.forEach((account) => {
      account.message_notification(msg, this.name);
    });
  }

  send_message_to(msg, user) {
    let current_user = this.friends.find((account) => {
      return (user.name = account.name);
    });
    current_user.message_notification(msg, this.name);
  }

  new_post(body) {
    const post = { post_body: body, owner: this.name, comments: [] };
    this.posts.push(post);
    this.friends.forEach((account) => {
      account.post_notification(post);
    });
  }

  new_comment(body) {
    const comment = { comment_body: body, owner: this.name };
    const post = this.notifications[0];
    post.comments.push(comment);
    this.friends.forEach((account) => {
      account.comment_notification(comment, post);
    });
  }
}

class Account extends FacebookAccount {
  constructor(_name, _age) {
    super();
    this.name = _name;
    this.age = _age;
  }

  post_notification(post) {
    this.notifications.push(post);
    console.log(`${post.owner} share new post about ${post.post_body}`);
  }

  comment_notification(comment, post) {
    console.log(`${comment.owner} commented on ${post.owner} post`);
    this.friends.forEach((account) => {
      account.notifications.push(comment);
      console.log(`${comment.owner} commented on ${post.owner} post`);
    });
  }

  message_notification(msg, owner) {
    console.log(`${owner} say ${msg}`);
  }
}

const acc = new Account("zaki", 25);
const acc1 = new Account("loki", 30);
const acc2 = new Account("odin", 32);
const acc3 = new Account("ali", 15);
acc.add_friend(acc1);
acc.add_friend(acc2);
acc.add_friend(acc3);
