import { useEffect, useState } from 'react';

import { defaultViewBox, getViewBox, ViewBox } from './ViewBox';

/** returns state & dispatcher of viewBox and handles window resizing */
export function useViewBox(): [ViewBox, React.Dispatch<React.SetStateAction<ViewBox>>] {
    const [viewBox, setViewBox] = useState<ViewBox>(defaultViewBox);

    // on resize
    useEffect(() => {
        function onResize() {
            setViewBox((vb) =>
                getViewBox({
                    centerX: vb.x + vb.width * 0.5,
                    centerY: vb.y + vb.height * 0.5,
                    pixelsPerUnit: vb.pixelsPerUnit,
                })
            );
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