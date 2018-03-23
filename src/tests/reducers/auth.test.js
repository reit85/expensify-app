import authReducer from '../../reducers/auth'

test('should login user', () => {
  const uid = 'abc123'
  const action = {
    type: 'LOGIN',
    uid
  }
  const result = authReducer({}, action)
  expect(result).toEqual({ uid })
})

test('should logout user', () => {
  const action = {
    type: 'LOGOUT'
  }
  const result = authReducer({uid: 'anything'}, action)
  expect(result).toEqual({ })
})


// test('shoult remove expense by id', () => {
//   const action = {
//     type: 'REMOVE_EXPENSE',
//     id: '2'
//   }
//   const result = expensesReducer(expenses, action)
//   expect(result).toEqual([expenses[0], expenses[2]])
// })
