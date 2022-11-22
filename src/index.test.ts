import { describe, expect, it } from "vitest";
import { awesome } from "./index";

describe("awesome", () => {
	it("returns 'you did it 😎'", () => {
		let txt = awesome();
		expect(txt).toBe("you did it 😎");
	});
});
