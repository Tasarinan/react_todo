import React from 'react';
import EditIcon from 'material-ui/svg-icons/content/create';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const CategoryEdit = ({itemTitle, id, getModalConfig, handleModalOpen}) => {

    const newModalConfig = {
        itemTitle,
        focusedItem: id,
        mode: "editCategory",
        title: "Please type the new name of category"
    };

    const handleSubmit = () => {
        getModalConfig(newModalConfig);
        handleModalOpen();
    };

    return (
        <FloatingActionButton className="CategoryItemButton" backgroundColor={"#78909C"} mini>
            <EditIcon onTouchTap={handleSubmit}/>
        </FloatingActionButton>
    );
}
export default CategoryEdit;