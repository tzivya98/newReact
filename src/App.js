import React from 'react';
import Image from './Image';
// import AddImeg from './AddImeg';

const App = () => {
  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38Ns-CVTDefJzIOyf7qTAbQ0M09CRhV1oQA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWB728eCI9H0NBX2GE8aEYkbBtStOwfm-FRg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0qfIcVrYr8px6XoZJPx99a2LXtHypD2PrA&usqp=CAU'
  ];

  return (<>
    <div>
      <h1>Image Animals Viewer</h1>
      <Image imageUrls={imageUrls} />
      
    </div>
    
  </>);
};

export default App;