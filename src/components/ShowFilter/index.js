import React from 'react';

const ShowFilter = ({isShowDoneChecked, checkCompleted}) => {
	let newIsShowDoneChecked;

	const showDone = () => {
        checkCompleted(newIsShowDoneChecked.checked)
	};

	return (
		<div className="ShowFilter">
			<input
				id="ShowFilter"
				type="checkbox"
				defaultChecked={isShowDoneChecked}
				ref={(isShowDoneChecked) => newIsShowDoneChecked = isShowDoneChecked}
				onChange={showDone}
			/>
			<label htmlFor="ShowFilter">Show Done</label>
		</div>
	);
};

export default ShowFilter;