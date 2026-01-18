import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"]
    },
    {
        input: "TESTING   one TWO  oNe  TwO  ",
        expected: ["testing", "one", "two", "one", "two"]
    },
    {
        input: " hel-lo!!! ",
        expected: ["hel-lo!!!"]
    },
    {
        input: "",
        expected: []
    },
    {
        input: "Red\tBlue\nGreen",
        expected: ["red", "blue", "green"]
    },
    {
        input: " \t   \n   ",
        expected: []
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});