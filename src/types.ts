console.log('types loaded')

export interface Point {
    x: number;
    y: number;
}

export interface Dimension {
    width: number;
    height: number;
}

export interface FigureParameters {
    r: number, 
    upperWidth: number, 
    lowerWidth: number, 
    height: number
}

export interface HitBoxPositionDependent {
    lower: number, 
    upper: number, 
    left: number, 
    right: number,
}

export interface GeneralHitBox {
    toUpper: number,
    toLower: number,
    toLeft: number,
    toRight: number
}

export interface FigureRenderInformation {
    render: (point: Point) => void,
    hitBox: GeneralHitBox
}