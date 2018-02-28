import moment from 'moment';
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const result = filtersReducer(undefined, {type: '@@INIT'})
  expect(result).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set text filter', () => {
  const text = 'text'
  const result = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text})
  expect(result.text).toBe('text')
})

test('should set start date', () => {
  const startDate = moment()
  const result = filtersReducer(undefined, {type: 'SET_START_DATE', startDate})
  expect(result.startDate).toBe(startDate)
})

test('should set end date', () => {
  const endDate = moment()
  const result = filtersReducer(undefined, {type: 'SET_END_DATE', endDate})
  expect(result.endDate).toBe(endDate)
})

test('should set sortyBy to amount', () => {
  const result = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(result).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortyBy to date', () => {
  const currentState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'amount'
  }
  const action = {type: 'SORT_BY_DATE'}
  const result = filtersReducer(currentState, action)
  expect(result).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})