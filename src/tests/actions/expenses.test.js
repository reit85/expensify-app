//import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as expenses from '../../actions/expenses'
import expensesData from '../fixtures/expenses'
import db from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should add an expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'this one is better',
    createdAt: 1000
  }
  store.dispatch(expenses.startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return db.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
}) 

test('should add an expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(expenses.startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })
    return db.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })
}) 


test('should setup add expense action with provided values', () => {
  const result = expenses.addExpense(expensesData[2])
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expensesData[2]
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