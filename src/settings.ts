import { FigureParameters, Point } from "./types";


export const LOOPCYCLEAMOUNT = 100;
export const LOOPFRAMELENGTH = 300;
const change = 10;

const color_shadyRed = '#a85751'
const color_pink = '#faa3f2'
const color_backgroundBlue = '#00009001'
const color_backgroundPink = '#faa3f202'
const color_transparentBlue = '#00009012'

export const BACKGROUNDCOLORS = [color_backgroundBlue, color_backgroundPink]
export const Figure_Colors = [color_pink, color_transparentBlue, color_shadyRed]
export const Figure_Directions: Point[] = [{x: -1, y: -1}, {x: 1, y: -1}, {x: 1, y: 1}, {x: -1, y: 1}]
export const advancedDirectionCylce: Point[] = [
    {x: -0.9, y: -0.4}, 
    {x: 0.3, y: -0.5}, 
    {x: 0.6, y: 0.1}, 
    {x: 0.7, y: 0.6}, 
    {x: -0.6, y: 0.7}
]

export const DIMENSION = {width: 1000, height: 600}

export const FIGURE_START_LOCATION = {x: 700, y: 300}
export const Figure_Parameters: FigureParameters = {r: 50, upperWidth: 60, lowerWidth: 90, height: 130}