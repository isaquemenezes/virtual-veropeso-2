

import React, { useState } from 'react';

import { dataDetails } from '../data/data-details';
import { Link, useParams } from "react-router-dom";

const Food = () => {
  // get ID from url
  const params = useParams();
  const _id =  params.food_id;
   console.log(params); 

  // const [foods, setFoods] = useState(data);
  
//   return (
//     <h2>userId is 👉️ {params.food_id}</h2>
//   );
// };

  const found = dataDetails.find(element => {
    return element.id == _id;
  });

  // console.log(found); 

  return (
    <div>
      <div>{found && <h2>{found.modoprepara}</h2>}</div>
    </div>
  );
};

export default Food;

