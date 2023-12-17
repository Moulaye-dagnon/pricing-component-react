import chooseMonths from '/images/choose-right.svg'
import chooseYear from '/images/choose-left.svg'
import './App.css'
import { useState } from 'react'
import Card from './card'

function UseToggle(Initial = false){
	const [ Etat, setEtat]= useState(Initial)
	const Toggle = ()=>{
		setEtat( (v)=> !v)
	}
	return [Etat, Toggle]

}

function App() {
	const [Toggle, setToggle] = UseToggle()
  return (
    <div className="container">
		<h1>Our pricing</h1>
		<div className='type-price'>
			<div style={{opacity : '.5'}}>Annually</div>
			<button type='button' className='choose_btn' onClick={setToggle} >
				{Toggle && <img src={chooseYear} alt="" /> }
				{!Toggle && <img src={chooseMonths} alt=""  /> } 
			</button>
			<div style={{opacity : '.5'}}>Monthly</div>
		</div>
		<div className='card-container'>
		<Card choose={Toggle} price={'19'}/>
		<Card title={'Professional'} choose={Toggle} price={'24'}/>
		<Card title={'Master'} choose={Toggle} price={'39'}/>
		</div>
	</div>
  )
}


export default App
