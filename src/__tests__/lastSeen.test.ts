import { User } from "../classes/user";

describe("User Last seen", () => {
  test("Given Bhautik name, with last login time of 3 minutes, it should result me the calculated last seen time", () => {
    const lastLoginDate = new Date(
      new Date().setMinutes(new Date().getMinutes() - 3)
    );
    expect(new User("Bhautik", lastLoginDate).getLastSeenTimeString()).toEqual(
      "Bhautik was online 3 Minutes ago"
    );
  });

  test("Given Bhautik name, with last login time 1 week ago, it should result me the calculated last seen time", () => {
    const lastLoginDate = new Date(new Date().setDate(new Date().getDay() - 2));
    expect(new User("Bhautik", lastLoginDate).getLastSeenTimeString()).toEqual(
      "Bhautik was online 1 Week ago"
    );
  });

  test("Given Bhautik name, with last login time with decade ago, it should result me the calculated last seen time", () => {
    const lastLoginDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 11)
    );
    expect(new User("Bhautik", lastLoginDate).getLastSeenTimeString()).toEqual(
      "Bhautik was online 1 Decade ago"
    );
  });
});
