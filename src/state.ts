
import { getCycler } from "./helper";
import { Dimension } from "./types";

export class ContextState {
    curFrame: number;
    cycleCount: number;
    preCycleCount: number;
    dimension: Dimension;
    private getNextBackgroundColor: () => string;
    backGroundColor: string;
    loopCycleAmount: number;
    loopFrameLength: number;

    constructor(dim: Dimension, loopCycleAmount: number, loopFrameLength: number, backgroundColors: string[]) {
        this.cycleCount = 0
        this.curFrame = 0;
        this.preCycleCount = 0;
        this.dimension = dim;
        this.getNextBackgroundColor = getCycler(backgroundColors)
        this.setNextBackgroundColor()
        this.loopCycleAmount = loopCycleAmount;
        this.loopFrameLength = loopFrameLength;
    }

    setNextBackgroundColor(): void {
        this.backGroundColor = this.getNextBackgroundColor()
    }

    increaseFrameCount = () => {
        this.curFrame += 1
        this.cycleCount = Math.floor(this.curFrame / this.loopFrameLength)
        if (this.preCycleCount !== this.cycleCount) {
            console.log('next cycle')
            this.preCycleCount = this.cycleCount
            this.setNextBackgroundColor()
        }
    }
    
    isAnimationEndReaced = (): boolean => this.curFrame > this.loopCycleAmount * this.loopFrameLength  
    
    currLoopFrame = (): number => this.curFrame % this.loopFrameLength

    
}

