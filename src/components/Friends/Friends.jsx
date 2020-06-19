import React from "react";
import s from "./Friends.module.css";

const Friends = props => {

	console.log(props)
  return (

	  <div className={s.friends}>
		  {
			  props.friends.map(f => <div key={f.id}>
				  <p>{f.fullName}</p>
			  </div>)
		  }
	  </div>
  );
};

export default Friends;
