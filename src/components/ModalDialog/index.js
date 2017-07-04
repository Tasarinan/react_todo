import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const ModalDialog = ({modalConfig, isModalOpen, handleModalOpen, handleTitleChange, handleSubmit }) => {

    const inputRender = modalConfig.mode !== 'deleteCategory' && (<input
            className="subCategoryAdder"
            type="text"
            placeholder="For example: 'Do laundry'"
            defaultValue={modalConfig.itemTitle}
            onBlur={handleTitleChange}
        />);

    const actions = [
        <FlatButton
            label="Cancel"
            primary
            onTouchTap={handleModalOpen}
        />,
        <FlatButton
            label="Submit"
            primary
            keyboardFocused
            onTouchTap={handleSubmit}
        />,
    ];

    return (
        <div>
            <Dialog
                title={modalConfig.title}
                actions={actions}
                modal={false}
                open={isModalOpen}
                onRequestClose={handleModalOpen}
            >
                { inputRender }
            </Dialog>
        </div>
    );
};

export default ModalDialog;
