import { LastSeen } from "./lastSeen";

export class User {
  private readonly name: string;
  private readonly lastSeen: Date;

  constructor(name: string, lastSeen: Date) {
    this.name = name;
    this.lastSeen = lastSeen;
  }

  getLastSeenTimeString(): string {
    const lastSeenTimeString = LastSeen.getLastSeenTimeString(this.lastSeen);
    return `${this.name} ${lastSeenTimeString}`;
  }
}
