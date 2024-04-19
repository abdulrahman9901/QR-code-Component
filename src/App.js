import './App.css';
import React from 'react';
import { Card } from 'antd';
import qrCodeImage from './images/image-qr-code.png';
const { Meta } = Card;

function App() {
  return (
    <div className="App">
        <Card
    hoverable
    style={{
      width: 300,
      padding:"10px",
      margin: 'auto',
    }}
    cover={<img className='cover' alt="qrcode" src={qrCodeImage} />}
  >
    <Meta title="Improve your front-end skills by building projects" description="Scan the QR code the visit frontend mentor and talking your coding skills to next level" />
  </Card>
    </div>
  );
}

export default App;
