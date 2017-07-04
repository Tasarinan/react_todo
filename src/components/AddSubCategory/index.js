import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import './AddSubCategory.css';

const AddSubCategory = ({id, getModalConfig, handleModalOpen}) => {

    const newModalConfig = {
        focusedItem: id,
        mode: "addNewSubcategory",
        title: "Please type the name of category"
    };

    const handleSubmit  = () => {
        getModalConfig(newModalConfig);
        handleModalOpen();
    };

    return (
        <div className="CategoryItemButton">
            <FloatingActionButton mini>
                <AddIcon onTouchTap={handleSubmit} />
            </FloatingActionButton>
        </div>
    );
};

export default AddSubCategory;
