import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

//moment.locale('de'); // Problem mit WEBPACK lässt denn Test nicht zu ...

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
       {(amount/100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}
       - 
      {moment(createdAt).format('DD.MM.YYYY')}
     </p>
  </div>
);

export default ExpenseListItem;
