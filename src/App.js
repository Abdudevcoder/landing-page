import React from 'react';
import './App.css';
import data from './cards'
// import ozon from './logo/ozon.webp'
// import dns from './logo/dns.webp'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='header'>
          <div className='logo'></div>
          <div className='text-one'>
            Cайты для попукпи бытовых-техник и электроник
          </div>
        </div>
        <div className="row mt-4">
          {data.map((value, index) => {
            return <div className="col-lg-4 col-md-6">
              <div >
                <div className="card mb-5" style={{
                  width: '18rem'
                }}>
                  <img src={value.image} alt="Card cap" style={{
                    width: "auto",
                    height: "100px"
                  }}/>
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <a href={value.url} className="btn btn-primary">Перейти на сайт</a>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className='footer'>
        ©️Abudevcoder on GitHub
      </div>
    </div>
  
  );
}

export default App;
