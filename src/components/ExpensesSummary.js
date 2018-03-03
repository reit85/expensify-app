import React from 'react';
import { connect } from 'react-redux';
import { isNumber } from 'util';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const count = isNumber(expenseCount) ? expenseCount : 0
  const word = expenseCount == 1 ? 'expense' : 'expenses'
  const total = isNumber(expensesTotal) ? (expensesTotal/100) : 0
  const formatedExpensesTotal = total.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
  return(
    <div>
      <h3>Viewing {count} {word} totaly {formatedExpensesTotal}.</h3>
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