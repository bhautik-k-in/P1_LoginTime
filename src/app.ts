// import User from "./classes/user";

import { User } from "./classes/user";

const john = new User("Bhautik", new Date("2023-03-08T05:21:10.000Z"));
console.log(john.getLastSeenTimeString());
   