export interface ViewBox {
    x: number;
    y: number;
    height: number;
    width: number;
    /** zoom level. Used to recalculate ViewBox on window resize */
    pixelsPerUnit: number;
}

export const defaultViewBox: ViewBox = {
    x: 30,
    y: 40,
    width: 0,
    height: 0,
    pixelsPerUnit: 10,
};

export function getViewBox(params: {
    pixelsPerUnit: number;
    centerX: number;
    centerY: number;
    /** no need to pass value - only for unit tests */
    windowWidth?: number;
    /** no need to pass value - only for unit tests */
    windowHeight?: number;
}): ViewBox {
    // px values of window
    const windowWidth = params.windowWidth ?? window.innerWidth;
    const windowHeight = params.windowHeight ?? window.innerHeight;

    const width = windowWidth / params.pixelsPerUnit;
    const height = windowHeight / params.pixelsPerUnit;

    return {
        x: params.centerX - width * 0.5,
        y: params.centerY - height * 0.5,
        width,
        height,
        pixelsPerUnit: params.pixelsPerUnit,
    };
}
