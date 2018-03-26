import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { isNumber } from 'util';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const count = isNumber(expenseCount) ? expenseCount : 0
  const word = expenseCount == 1 ? 'expense' : 'expenses'
  const total = isNumber(expensesTotal) ? (expensesTotal/100) : 0
  const formatedExpensesTotal = total.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
  return(
    <div className="page-header">
      <div className="container">
        <h3 className="page-header__title">Viewing <span>{count}</span> {word} totaly <span>{formatedExpensesTotal}</span>.</h3>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}
 
export default connect(mapStateToProps)(ExpensesSummary)