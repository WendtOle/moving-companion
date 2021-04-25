import { Dimension, GeneralHitBox, HitBoxPositionDependent, Point } from "./types";

export const isOutsideDimensions = (position: Point, dimension: Dimension, inputHitbox: GeneralHitBox): boolean => {
    const hitBox = getHitBox(position,inputHitbox)
    return hitBox.left <= 0 || hitBox.right >= dimension.width || hitBox.upper <= 0 || hitBox.lower >= dimension.height;
}

export const getHitBox = (pos: Point, hitBox: GeneralHitBox): HitBoxPositionDependent => {
    return {
        lower: pos.y + hitBox.toLower,
        upper: pos.y + hitBox.toUpper,
        left: pos.x + hitBox.toLeft,
        right: pos.x + hitBox.toRight,
    }
}

export const moveHitBoxIntoField = (pos: Point, {width, height}: {width: number, height: number}, generalHitBox: GeneralHitBox): Point => {
    const hitBox = getHitBox(pos,generalHitBox)
    const newX = hitBox.left <= 0 ? - generalHitBox.toLeft : hitBox.right >= width ? width - generalHitBox.toRight : pos.x
    const newY = hitBox.upper <= 0 ? - generalHitBox.toUpper : hitBox.lower >= height ? height - generalHitBox.toLower : pos.y
    console.log({x: newX, y: newY}, getHitBox({x: newX, y: newY},generalHitBox))
    return {x: newX, y: newY}
}