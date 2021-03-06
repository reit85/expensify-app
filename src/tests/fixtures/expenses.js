import moment from 'moment'

export default [
  {
    id: '1', 
    description: 'Gum', 
    note: '', 
    amount: 123, 
    createdAt: 0
  },
  {
    id: '2', 
    description: 'Rent', 
    note: '', 
    amount: 234, 
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3', 
    description: 'Meat', 
    note: '', amount: 45, 
    createdAt: moment(0).add(4, 'days').valueOf()
  },
]