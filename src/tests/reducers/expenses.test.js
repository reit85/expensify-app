import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const result = expensesReducer(undefined, {type: '@@INIT'})
  expect(result).toEqual([])
})

test('shoult remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual([expenses[0], expenses[2]])
})

test('should not removeexpenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: '4', 
    description: 'beer', 
    note: 'many', 
    amount: 555, 
    createdAt: 1
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const result = expensesReducer(expenses, action)
  expect(result).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      amount: 10000
    }
  }

  const result = expensesReducer(expenses, action)
  expect(result[0].amount).toBe(10000)
})

test('should not edit an expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 10000
    }
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual(expenses)
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})