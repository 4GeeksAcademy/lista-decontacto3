
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";
import React, { useEffect } from "react";
import { getAgenda } from "../services/APIservices.js";

export const Home = () => {
  const {store, dispatch} =useGlobalReducer()

  useEffect(() => {
	getAgenda(dispatch)

  },[])
	return (
		<div className="container">
			{store.contacts.map((contact)=>{
				return(
					<ContactCard key={contact.id} {...contact} />
				)

			})}
		</div>
	);
}; 