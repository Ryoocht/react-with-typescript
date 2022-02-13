import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

function App() {

  // const [ number, setNumber ] = useState<number | string>(5)

  // const changeNumber = () => {
  //   setNumber(10)
  // }

  const [ people, setPeople ] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://i0.wp.com/www.thebasketballnetwork.com/wp-content/uploads/2018/05/USATSI_10853818.jpg?fit=5683%2C3789&ssl=1',
      age: 36,
      notes: 'Allegeric to stying on the same team'
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  )
}

export default App
