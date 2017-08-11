import React from 'react';

import ModalDialog from '../../components/ModalDialog'

class CRUDModal extends React.Component {
    state = {newItemTitle : ""};

    handleTitleChange = (e) => {
        this.setState({newItemTitle: e.target.value});
    };

    handleSubmit = () => {
        const {deleteCategory, modalConfig, handleModalOpen} = this.props;

        switch(modalConfig.mode) {
            case 'deleteCategory':
                deleteCategory(modalConfig.focusedItem);
                break;
            case 'editCategory':
                this.handleEditCategory();
                break;
            case 'addNewSubcategory':
                this.handleAddNewSubcategory();
                break;
            default:
               throw new Error();
        }

        handleModalOpen();
    };

    handleEditCategory = () => {
        const {editCategory, modalConfig} = this.props;
        const {newItemTitle} = this.state;

        if(newItemTitle.trim()) editCategory(newItemTitle, modalConfig.focusedItem);

        this.setState({newItemTitle: ""});
    };

    handleAddNewSubcategory = () => {
        const {addNewSubcategory, modalConfig} = this.props;
        const {newItemTitle} = this.state;

        if(newItemTitle.trim()) addNewSubcategory(newItemTitle, modalConfig.focusedItem);

        this.setState({newItemTitle: ""});
    };

    render() {
        const {modalConfig, isModalOpen, handleModalOpen} = this.props;

        return (
            <ModalDialog
                modalConfig={modalConfig}
                isModalOpen={isModalOpen}
                handleModalOpen={handleModalOpen}
                handleTitleChange={this.handleTitleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default CRUDModal;
