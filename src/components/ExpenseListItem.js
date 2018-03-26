import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

//moment.locale('de'); // Problem mit WEBPACK lässt denn Test nicht zu ...

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('DD.MM.YYYY')}</span>
    </div>
    <h3  className="list-item__data">
      {(amount/100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}
    </h3>
  </Link>
);

export default ExpenseListItem;
