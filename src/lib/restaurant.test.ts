import { describe, expect, it } from "vitest";
import { isOpenAt } from "./restaurant";

// Times are given in UTC; Al Khobar is UTC+3.
describe("opening hours", () => {
  it("is closed before noon local time on a weekday", () => {
    // Monday 23 Nov 2026, 11:30 in Al Khobar
    expect(isOpenAt(new Date("2026-11-23T08:30:00Z"))).toBe(false);
  });

  it("opens at 12:00 PM local time on a weekday", () => {
    expect(isOpenAt(new Date("2026-11-23T09:00:00Z"))).toBe(true);
  });

  it("is still closed at 12:15 PM on Friday, which opens at 12:30 PM", () => {
    // Friday 27 Nov 2026, 12:15 in Al Khobar
    expect(isOpenAt(new Date("2026-11-27T09:15:00Z"))).toBe(false);
    expect(isOpenAt(new Date("2026-11-27T09:30:00Z"))).toBe(true);
  });

  it("is open at 11:59 PM and closed just after midnight", () => {
    expect(isOpenAt(new Date("2026-11-23T20:59:00Z"))).toBe(true);
    expect(isOpenAt(new Date("2026-11-23T21:05:00Z"))).toBe(false);
  });
});
