import * as React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import {
	describe,
	expect,
	it,
	beforeEach,
	afterEach,
	afterAll,
	beforeAll,
} from "vitest";
import { Awesome } from "./index";

describe("awesome", () => {
	let container: HTMLDivElement;
	let root: ReturnType<typeof createRoot>;

	beforeAll(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		root = createRoot(container);
	});

	beforeEach(() => {
		act(() => {
			root.render(<Awesome />);
		});
	});

	afterEach(() => {
		act(() => {
			root.unmount();
		});
	});

	afterAll(() => {
		document.body.removeChild(container);
	});

	it("returns 'you did it 😎'", () => {
		let paragraph = container.querySelector("p");
		expect(paragraph?.innerText).toBe("you did it 😎");
	});
});
