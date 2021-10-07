import { useEffect, useRef } from 'react';
import { getCoordinates } from '../app/canvas/viewBox/getCoordinates';
import { ViewBox } from '../app/canvas/viewBox/ViewBox';
import { Point } from '../models/Point';

export function useDrag(
    viewBox: ViewBox,
    onChange: (point: Point) => void,
    onChangeFinish: (point: Point) => void
): { onMouseDown: () => void } {
    const dragging = useRef(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!dragging.current) {
                return;
            }
            onChange(getCoordinates(e.clientX, e.clientY, viewBox));
        };
        const onMouseUp = (e: MouseEvent) => {
            if (dragging.current) {
                dragging.current = false;
                onChangeFinish(getCoordinates(e.clientX, e.clientY, viewBox));
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
        // adding onChange or onChangeFinish to dependency array causes huge performance issues
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewBox]);

    const onMouseDown = () => (dragging.current = true);

    return { onMouseDown };
}
