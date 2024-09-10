import { client as _client } from "tmi.js";

const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: ["onthepixel"],
};

const client = new _client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.on("follow", onFollowHandler);
client.on("subscription", onSubscriptionHandler);

client.connect();

function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  }

  const commandName = msg.trim();

  if (commandName === "!discord" || commandName === "!dc") {
    client.say(
      target,
      `Join our Discord server: https://discord.onthepixel.net`
    );
  }

  if (commandName === "!website" || commandName === "!web") {
    client.say(target, `Check out our website: https://onthepixel.net`);
  }
  if (commandName === "!socials") {
    client.say(
      target,
      `Twitter/X: https://x.com/onthepixelnet\nInstagram: https://www.instagram.com/onthepixel_net/`
    );
  }
  if (commandName === "!help" || commandName === "!commands") {
    client.say(
      target,
      `Discord: !discord, !dc\nWeb: !website, !web\nSocial: !socials\nHelp: !help, !commands`
    );
  }
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function onFollowHandler(channel, username) {
  client.say(channel, `Thank you for following, ${username}!`);
}

function onSubscriptionHandler(channel, username, method, message, userstate) {
  client.say(channel, `Thank you for subscribing, ${username}!`);
}

function sendDiscordMessage() {
  client.say(
    "onthepixel",
    "Join our Discord server: https://discord.onthepixel.net"
  );
}

setInterval(sendDiscordMessage, 600000);
