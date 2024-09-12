// import './App.css';
import Card from './components/Card';

function App() {
  const mediaNames = ['Facebook','Twitter','Instagram','YouTube','Tiktok','Snapchat','Telegram','Whatsapp','Pinterest']

  return (
    <div className='mx-5'>
      <div className='row text-white'>
        <p className='fw-bold mt-4'>Featured Social Media Websites</p>
      </div>
      <div className='row row-cols-md-3 gap-4'>
        {mediaNames.map((m,id)=>(
          <Card key={id} media={m} />
        ))}
      </div>
    </div>
  )
}

export default App
