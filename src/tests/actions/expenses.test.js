//import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import * as expenses from '../../actions/expenses'

test('should setup add expense action with difault values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  const result = expenses.addExpense(expenseData)
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})

test('should setup add expense action with values', () => {
  const expenseData = {
    description: 'test description',
    note: 'test note',
    amount: 100,
    createdAt: 1000
  }

  const result = expenses.addExpense(expenseData)
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData,
    }
  })
})

test('should setup remove an expense action object', () => {
  const result = expenses.removeExpense({id: '123abc'})
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit an expense action object', () => {
  const result = expenses.editExpense('123abc', {note:'test'})
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'test'}
  })
})