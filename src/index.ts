import { FigureState } from "./FigureState";
import { drawFigure, point } from "./helper";
import { isOutsideDimensions, moveHitBoxIntoField } from "./hitbox";
import { advancedDirectionCylce, BACKGROUNDCOLORS, DIMENSION, Figure_Colors, Figure_Directions, Figure_Parameters, FIGURE_START_LOCATION, LOOPCYCLEAMOUNT, LOOPFRAMELENGTH } from "./settings";
import { ContextState } from "./state";

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const contextState = new ContextState(DIMENSION, LOOPCYCLEAMOUNT, LOOPFRAMELENGTH, BACKGROUNDCOLORS)

canvas.width = contextState.dimension.width;
canvas.height = contextState.dimension.height;

const figureState = new FigureState(drawFigure(context,Figure_Parameters), FIGURE_START_LOCATION,Figure_Colors)

figureState.setDirectionMultiplier(10)

figureState.pushOnUpdateMethod(({position, color, hitBox, setNextColor, setNextDirection, setPosition, direction, directionMutliplier}): void => {
    const newPosition = point({x: direction.x * directionMutliplier, y: direction.y * directionMutliplier}, position)
    if (isOutsideDimensions(newPosition, contextState.dimension,hitBox)) {
        setNextDirection()
        setNextColor()
        context.strokeStyle = color
        return
    }
    setPosition(newPosition)
})

context.strokeStyle = figureState.color

const draw = () => {
    if (contextState.isAnimationEndReaced()) {
        console.log('stopped animation')
        return
    }
    
    context.fillStyle = contextState.backGroundColor
    context.fillRect(0,0,contextState.dimension.width,contextState.dimension.height)
    
    figureState.render();
    figureState.update();
    contextState.increaseFrameCount()
    window.requestAnimationFrame(draw)
}

console.log('started animation')
draw()

function FIGUREPARAMETERS(context: CanvasRenderingContext2D, FIGUREPARAMETERS: any): import("./types").FigureRenderInformation {
    throw new Error("Function not implemented.");
}

