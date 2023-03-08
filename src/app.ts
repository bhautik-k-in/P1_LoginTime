import { LastSeen } from "./classes/lastSeen";
import { User } from "./classes/user";

const john = new User(
  "Bhautik",
  new LastSeen(new Date("2023-03-08T05:45:10.000Z"))
);
console.log(john.getLastSeenTimeString());
