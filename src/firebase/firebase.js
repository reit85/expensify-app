import * as firebase from 'firebase'
import expenses from '../tests/fixtures/expenses'
import moment from 'moment'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);


// ref = Table or collection
const db = firebase.database()
export {firebase, db as default}

 // TEST
// // chiled_removed event subscribe
// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed event subscription
// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added event subscribe
// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

 //db.ref('expenses').push({...expenses[0]})
 //db.ref('expenses').push({...expenses[1]})

//  const expensesData = []
//  db.ref('expenses').on('value', (snapshot) => {
//   const expensesData = []
//   snapshot.forEach((childSnapShot) => {
//     expensesData.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })
//   console.log(expensesData)
//  })

  

// db.ref('expenses').push({
//     description: 'expense one',
//     amount: 111,
//     note: "",
//     createdAt: 11111
// })

// db.ref('expenses').push({
//   description: 'expense two',
//   amount: 222,
//   note: "",
//   createdAt: 22222
// })

// db.ref('expenses').push({
//   description: 'expense three',
//   amount: 333,
//   note: "",
//   createdAt: 33333
// })




//  db.ref('notes/-L6k1fLofotgwXubvNMp').update({
//    body: 'teeeest'
//  })

// db.ref('notes').push({
//   title: 'third note',
//   body: 'my other note'
// })

//  db.ref('notes').set(notes)

// db.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

//fetch data
// db.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('This faild!!!!', e)
//   })

// db.ref().set({
//   name: 'Alex',
//   age: 33,
//   isSingle: false,
//   location: {
//     city: 'Mecken',
//     country: 'Germany'
//   }
// }).then(() => {
//   console.log('data saved')
// }).catch((e) => {
//   console.log('This faild!!!!', e)
// })

// db.ref().update({
//   stresslevel: 9,
//   'location/city': 'Seattle',
//   "job/title": "Manaaageeer"
// })

// db.ref('isSinglee')
//   .remove()
//   .then(() => {
//   console.log('data removed')
//   }).catch((e) => {
//   console.log('error: ', e)
//   })
