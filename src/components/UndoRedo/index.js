import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UndoIcon from 'material-ui/svg-icons/content/undo';
import RedoIcon from 'material-ui/svg-icons/content/redo';
import './UndoRedo.css';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <div className="UndoRedo">
        Undo
        <FloatingActionButton mini disabled={!canUndo} className="UndoRedoButton">
            <UndoIcon onTouchTap={onUndo}/>
        </FloatingActionButton>


        <FloatingActionButton mini disabled={!canRedo} className="UndoRedoButton">
            <RedoIcon onTouchTap={onRedo} />
        </FloatingActionButton>
        Redo
    </div>
);

export default UndoRedo;

