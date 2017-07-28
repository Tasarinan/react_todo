import React from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowUpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import MoveToIcon from 'material-ui/svg-icons/content/reply';
import { NavLink } from 'react-router-dom';

import './CategoryItem.css';

import CategoryList from '../CategoryList';
import CategoryDelete from '../CategoryDelete';
import CategoryEdit from '../CategoryEdit';
import AddSubCategory from '../AddSubCategory';

const  CategoryItem  = ({id, title, editCategory, deleteCategory, addNewSubcategory, categoryList, subcategories,
	expanded, handleExpander, modalConfig, getModalConfig, handleModalOpen, shouldRenderCRUD}) => {

	const hasSubcategory = subcategories.length !== 0;

	const expanderRender = hasSubcategory &&
		(<div className="CategoryItemDropdown">
			{ shouldRenderCRUD
				? (<IconButton onClick={handleExpander}>
                    { expanded ? <ArrowDownIcon/> : <ArrowUpIcon/> }
				</IconButton>)
				: (<IconButton className="not-selectable">
					<ArrowDownIcon/>
				</IconButton>)
			}
		</div>);

	const editCategoryRender = (<CategoryEdit
            itemTitle={title}
            id={id}
            getModalConfig={getModalConfig}
            handleModalOpen={handleModalOpen}
        />);

    const deleteAndAddSubCategoryRender =
        (<div className="CategoryItemPanel">
            <CategoryDelete
                id={id}
                getModalConfig={getModalConfig}
                handleModalOpen={handleModalOpen}
            />
            <AddSubCategory
                id={id}
                getModalConfig={getModalConfig}
                handleModalOpen={handleModalOpen}
            />
        </div>);

    const moveToCategoryRender = (
        <div className="CategoryItemPanel">
            <IconButton tooltip="Move to this category">
                <MoveToIcon/>
            </IconButton>
        </div>);

	const subcategoriesListRender = hasSubcategory &&
		(<CategoryList
			className="CategoryList"
			categoryList={categoryList}
			itemsToRender={subcategories}
			editCategory={editCategory}
			deleteCategory={deleteCategory}
			addNewSubcategory={addNewSubcategory}
			modalConfig={modalConfig}
			getModalConfig={getModalConfig}
			handleModalOpen={handleModalOpen}
			shouldRenderCRUD={shouldRenderCRUD}
		/>);

	return (
		<li>
            { shouldRenderCRUD

                ? (<div className="CategoryItem">
					<div className="CategoryItemLine">
						<div className="CategoryItemPanel">
                            { expanderRender }
							<div className={"CategoryItemTitle" + (hasSubcategory ? " CategoryItemTitle--hasSub" : "")}>
								<NavLink to={`/${id}`} activeClassName="selected">{title}</NavLink>
							</div>
                            { editCategoryRender }
						</div>
                        { deleteAndAddSubCategoryRender }
					</div>
                    { expanded && subcategoriesListRender }
				</div>)

                : (<div className="CategoryItem">
					<div className="CategoryItemLine">
						<div className="CategoryItemPanel">
                            { expanderRender }
							<div className={"CategoryItemTitle" + (hasSubcategory ? " CategoryItemTitle--hasSub" : "")}>
								<NavLink to={`/${id}`} className="not-selectable" activeClassName="currentCategory selected">{title}</NavLink>
								<div className="CategoryItemMoveTo">
									{ moveToCategoryRender }
								</div>
							</div>
						</div>
					</div>
					{ subcategoriesListRender }
				</div>)

            }
		</li>
	)
};

export default CategoryItem;
