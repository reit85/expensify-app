import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'

test('should render ExpensesSummary component without data', () => {
  const wrapper = shallow(<ExpensesSummary />)
  expect(wrapper).toMatchSnapshot()
})

test('should render summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render summary with many expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={123456789}/>)
  expect(wrapper).toMatchSnapshot()
})