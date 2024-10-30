 
import './App.css'
import bgImage from './assets/imageTime.png'
import Counter from './components/Counter'
import Title from './components/Title'
import useCountdown from './hooks/useCountdown'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00")


  return (
    <>
      <div className='App' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='container'>
            <Title title="Contagem regressiva pra 2025" />
            <div className='countdown-container'>
              <Counter title='Dias' number={day}/>
              <Counter title='Horas' number={hour}/>
              <Counter title='Minutos' number={minute}/>
              <Counter title='Segundos' number={second}/>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
