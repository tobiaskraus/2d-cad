import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks';
import { deleteSelectedShape } from '../shapes/shapesSlice';
import { setActiveTool, Tool } from './toolsSlice';

export function useKeybindings() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const onKeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Delete':
                case 'Backspace':
                    dispatch(deleteSelectedShape());
                    break;
                case 'Escape':
                    dispatch(setActiveTool(Tool.HAND));
                    break;
                case 'h':
                    dispatch(setActiveTool(Tool.HAND));
                    break;
                case 's':
                    dispatch(setActiveTool(Tool.SELECT));
                    break;
                case 'l':
                    dispatch(setActiveTool(Tool.CREATE_LINE));
                    break;
                case 'r':
                    dispatch(setActiveTool(Tool.CREATE_RECT));
                    break;
            }
        };

        window.addEventListener('keydown', onKeydown);
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [dispatch]);
}
