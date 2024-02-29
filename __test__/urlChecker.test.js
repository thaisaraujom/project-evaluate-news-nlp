import { checkForUrl } from "../src/client/js/urlChecker";

describe('Testing URL checker functionality', () => {
    test('should return false for an empty string', () => {
        expect(checkForUrl('')).toBe(false);
    });

    test('should return false for an invalid URL', () => {
        expect(checkForUrl('invalid_url')).toBe(false);
    });

    test('should return true for a valid URL', () => {
        expect(checkForUrl('https://www.example.com')).toBe(true);
    });
});
