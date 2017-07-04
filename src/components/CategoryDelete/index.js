import React from 'react';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/action/delete';

const CategoryDelete = ({id, getModalConfig, handleModalOpen}) => {

    const newModalConfig = {
	    focusedItem: id,
        mode: "deleteCategory",
        title: "Are you sure to delete this category?"
    };

    const handleSubmit  = () => {
        getModalConfig(newModalConfig);
        handleModalOpen();
    };

	return (
		<div className="CategoryItemButton">
			<IconButton>
				<RemoveIcon onTouchTap={handleSubmit} />
			</IconButton>
		</div>
    );
};

export default CategoryDelete;