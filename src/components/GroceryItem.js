import React, { useState } from "react";
import "../styles/GroceryItem.css";

const Item = (item) => {
	const [ isCheck, setIsCheck ] = useState(false);

	return (
		<div
			key={item.index}
			className="item"
		>
			<input
				className="item-checkbox"
				type="checkbox" 
				onChange={() => setIsCheck(!isCheck)} 
			/>
			<span 
				className={`
					item-text
					${isCheck ? "item-check" : "item-uncheck"}`
				}
			>
				{ item.item }
			</span>
		</div>
	);
}

export default Item;