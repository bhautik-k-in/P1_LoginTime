import moment from "moment";
import { durations } from "../durations.json";

export class LastSeen {
  constructor(private readonly time: Date) {
    this.time = new Date();
  }
  //   const durations =
  static getLastSeenTimeString(lastSeen: Date): string {
    const now = moment();
    const durationInSeconds = now.diff(moment(lastSeen), "seconds");

    const duration = durations.find((d) => durationInSeconds >= d.value);

    if (duration) {
      const timeAgo = Math.floor(durationInSeconds / duration.value);
      return `was online ${timeAgo} ${duration.name}${
        timeAgo > 1 ? "s" : ""
      } ago`;
    }
    return "";
  }
}
