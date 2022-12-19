const greetings: string[] = [
  "Hello ",
  "Hi there ",
  "Good morning ",
  "Good afternoon ",
  "Good evening ",
  "It's nice to meet you ",
];

export const hello = (name: String) => greetings[Math.floor(Math.random() * greetings.length)] + name;

export default {
  hello
}