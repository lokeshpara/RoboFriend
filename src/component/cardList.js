import React from "react";
import Card from "./card";

const CarList = ({robots}) => {
	return(
		<div>
			{
				robots.map((user,i) => {
					return( 
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							username={robots[i].username}
							email={robots[i].email} 
							/>
						)
				})
			}
		</div>
		)
	} 

export default CarList;