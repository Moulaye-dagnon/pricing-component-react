import './Card.css'
export default function Card({title = 'Basic', price, choose}){
	const Price = choose ? `${price}9.99`: `${price}.99`
	const color = title == 'Professional' ? '#fff' :'' 
	const backgound = title == 'Professional' ? 'linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)' :'#fff' 
	const btnColor = title == 'Professional' ? '#6D72DE' :'#fff' 
	const btnBackground = title == 'Professional' ? '#fff' : 'linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)'
	const style = {color : color, background: backgound }
	return <div className="card" style={style}>
		<div className='title'>{title}</div>
		<div className='price'>
		<span>$</span>	
		{Price}
		</div>
		<hr />
		<p>			
			{title == 'Basic' && '500 GB Storage' }
			{title == 'Professional' && '1 TB Storage' }
			{title == 'Master' && '2 TB Storage'}
		</p>
		<hr />
		<p>			
			{title == 'Basic' && '2 Users Allowed' }
			{title == 'Professional' && '5 Users Allowed' }
			{title == 'Master' && '10 Users Allowed'}
		</p>		
		<hr />
		<p>			
			{title == 'Basic' && 'Send up to 3 GB' }
			{title == 'Professional' && 'Send up to 10 GB' }
			{title == 'Master' && 'Send up to 10 GB'}
		</p>		<hr />
		<button className='more-btn' style={{color : btnColor, background : btnBackground}}>Learn More</button>
	</div>
}