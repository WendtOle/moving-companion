import { moveHitBoxIntoField } from "./hitbox";

describe('moveHitBoxIntoField', function () {
    var hitBox = { toUpper: -10, toLower: 10, toLeft: -10, toRight: 10 };
    var dimensions = { width: 100, height: 100 };
    it('moves from the left upper corner into the field', function () {
        return expect(moveHitBoxIntoField({ x: -1, y: -1 }, dimensions, hitBox)).toStrictEqual({ x: 10, y: 10 });
    });
    it('moves from the lower right corner into the field', function () {
        return expect(moveHitBoxIntoField({ x: 120, y: 120 }, dimensions, hitBox)).toStrictEqual({ x: 90, y: 90 });
    });
});