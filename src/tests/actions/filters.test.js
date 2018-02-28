import moment from 'moment'
import * as filters from '../../actions/filters'

test('should set text filter to empty string by default', () => {
  const result = filters.setTextFilter('')
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should set text filter to any provided string ', () => {
  const result = filters.setTextFilter('test')
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
})

test('should sort by date', () => {
  const result = filters.sortByDate()
  expect(result).toEqual({
    type: 'SORT_BY_DATE'
  }) 
})

test('should sort by amount', () => {
  const result = filters.sortByAmount()
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT'
  }) 
})

test('should set start date', () => {
  const result = filters.setStartDate(moment(0))
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should set end date', () => {
  const result = filters.setEndDate(moment(100))
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(100)
  })
})