import { useEffect, useState } from 'react';

import { defaultViewBox, getViewBox, ViewBox } from './viewBox/ViewBox';

/** returns state & dispatcher of viewBox and handles window resizing */
export function useViewBox(): [ViewBox, React.Dispatch<React.SetStateAction<ViewBox>>] {
    const [viewBox, setViewBox] = useState<ViewBox>(defaultViewBox);

    // on resize
    useEffect(() => {
        function onResize() {
            const newViewBox = getViewBox({
                centerX: viewBox.x + viewBox.width * 0.5,
                centerY: viewBox.y + viewBox.height * 0.5,
                pixelsPerUnit: viewBox.pixelsPerUnit,
            });
            setViewBox(newViewBox);
        }
        window.addEventListener('resize', onResize);

        // adjust viewBox initially to window size
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return [viewBox, setViewBox];
}
