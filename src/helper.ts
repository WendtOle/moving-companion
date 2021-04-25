import { FigureParameters, FigureRenderInformation, Point } from "./types"

export const point = (direction: Point, initPoint: Point = { x: 0, y: 0 }): Point =>
    ({ x: initPoint.x + direction.x, y: initPoint.y + direction.y })

export const drawFigure = (context: CanvasRenderingContext2D, { r, upperWidth, lowerWidth, height }: FigureParameters): FigureRenderInformation => {
    const lowerAndUpper = {toUpper: - r, toLower: r > height ? r : height } 
    const width = Math.max(r * 2, lowerWidth)
    const leftAndRight = {toLeft: - width / 2, toRight: width / 2}
    const hitBox = {...lowerAndUpper, ...leftAndRight}
    return {
        hitBox,
        render: (location: Point) => {

            context.beginPath();
            context.arc(location.x, location.y, r, 0, 2 * Math.PI);
            context.stroke();

            const widthToUse = upperWidth > r * 2 ? r * 2 : upperWidth;
            const upperWidthHeight = (r ** 2 - (widthToUse / 2) ** 2) ** (0.5)
            const start = point({ x: -widthToUse / 2, y: upperWidthHeight }, location)
            const left = point({ x: - lowerWidth / 2, y: height }, location)
            const right = point({ x: lowerWidth / 2, y: height }, location)
            const end = point({ x: widthToUse / 2, y: upperWidthHeight }, location)
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(left.x, left.y);
            context.lineTo(right.x, right.y);
            context.lineTo(end.x, end.y);
            context.stroke();
        }
    }
}

export const getModifiedDirection = (direction: Point, modifier: number): Point => ({ x: direction.x * modifier, y: direction.y * modifier })

export const getCycler = <T>(array: T[]): () => T => {
    let index = 0;
    return () => {
        if (index >= array.length) {
            index = 0
        }
        return array[index++]
    }
}