import { LastSeen } from "./lastSeen";

export class User {
  private readonly name: string;
  private readonly lastSeen: LastSeen;

  constructor(name: string, lastSeen: LastSeen) {
    this.name = name;
    this.lastSeen = lastSeen;
  }

  getLastSeenTimeString(): string {
    const lastSeenTimeString = this.lastSeen.getLastSeenTimeString();
    return `${this.name} ${lastSeenTimeString}`;
  }
}
