import React, { FunctionComponent, useEffect } from 'react';

import { deleteSelectedShape } from '../features/shapes/shapesSlice';
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
            }
        };
        window.addEventListener('keydown', onKeydown);
        return () => window.removeEventListener('keydown', onKeydown);
    }, [dispatch]);

    return null;
};

export default Keybindings;
