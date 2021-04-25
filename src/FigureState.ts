import { getCycler, point } from "./helper";
import { Dimension, FigureRenderInformation, GeneralHitBox, Point } from "./types";

interface Something {
    position: Point,
    color: string,
    hitBox: GeneralHitBox, 
    setNextColor: () => void, 
    setNextDirection: () => void, 
    setPosition: (newPosition: Point) => void,
    direction: Point
    directionMutliplier: number;
}

export class FigureState {
    position: Point;
    direction: Point;
    private getNextColor: () => string;
    color: string;
    render: () => void;
    hitBox: GeneralHitBox;
    onUpdate: Array<(props: Something) => void>;
    directionMutliplier: number;
    constructor(renderInformation: FigureRenderInformation, startPosition: Point, colors: string[]) {
        this.position = startPosition
        this.setNextDirection()
        this.getNextColor = getCycler(colors);
        this.setNextColor();
        this.render = () => renderInformation.render(this.position)
        this.onUpdate = []
        this.hitBox = renderInformation.hitBox
        this.directionMutliplier = 1;
    }

    setNextDirection = (): void => {
        this.direction = {x: Math.random() - 0.5, y: Math.random() - 0.5}
    }

    setNextColor = (): void => {
        this.color = this.getNextColor();
    }

    pushOnUpdateMethod = (cb: ((props: Something) => void)): void =>  { 
        this.onUpdate.push(cb)
    }
    
    update = () => {
        this.onUpdate.forEach(method => method(this))
    }

    setPosition = (newPosition: Point) => this.position = newPosition

    setDirectionMultiplier = (multiplier: number) => {
        this.directionMutliplier = multiplier
    }
}