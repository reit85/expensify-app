//import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as exp from '../../actions/expenses'
import expenses, {ExpensesStringId} from '../fixtures/expenses'
import db from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesInfo = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesInfo[id] = {description, note, amount, createdAt}
  })
  
  db.ref('expenses').set(expensesInfo).then(() => done())
})

test('should add an expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'this one is better',
    createdAt: 1000
  }
  store.dispatch(exp.startAddExpense(expenseData)).then(() => {
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
  store.dispatch(exp.startAddExpense({})).then(() => {
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
  const result = exp.addExpense(expenses[2])
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should setup remove an expense action object', () => {
  const result = exp.removeExpense({id: '123abc'})
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore({})
  const id  = expenses[2].id
  store.dispatch(exp.startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return db.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('should setup edit an expense action object', () => {
  const result = exp.editExpense('123abc', {note:'test'})
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'test'}
  })
})

test('should edit Expense from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[0].id
  const updates = { amount: 21845}
  store.dispatch(exp.startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return db.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
  })
})

test('should setup setExpense Action with data', () => {
  const result = exp.setExpenses(expenses)
  expect(result).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(exp.startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})