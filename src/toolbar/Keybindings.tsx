import { FunctionComponent, useEffect } from 'react';

import { deleteSelectedShape } from '../features/shapes/shapesSlice';
import { setActiveTool, Tool } from '../features/tools/toolsSlice';
import { useAppDispatch } from '../hooks';

interface KeybindingsProps {
    className?: string;
}

const Keybindings: FunctionComponent<KeybindingsProps> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const onKeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Delete':
                case 'Backspace':
                    dispatch(deleteSelectedShape());
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
        return () => window.removeEventListener('keydown', onKeydown);
    }, [dispatch]);

    return null;
};

export default Keybindings;
