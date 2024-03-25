// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Container, Typography } from '@mui/material';

function WhiteScreen() {
  return (
    <Container
      sx={{
        backgroundColor: 'white', // Set background color to white
        width: '100%', // Fill the width
        height: '100vh', // Fill the height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: (theme) => theme.spacing(4), // Add padding
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: (theme) => theme.spacing(4), // Add margin to the bottom of the header
          color: 'black', // Set text color to black
        }}
      >
        Pick correct answer
      </Typography>
      <Typography
        variant="body2" // Set the variant to body2 for smaller font size
        sx={{
          color: 'green', // Set text color to green
        }}
      >
        <span style={{ color: 'black' }}>Choose the correct</span> answer
      </Typography>    
      <ul>
        <li> A 8 </li>
        <li> B 360 </li>
        <li> C 1080 </li>
        <li> D There is no way to know the answer. </li>

      </ul>
      
      </Container>
  );
}

function App() {
  return (
    <div>
      <WhiteScreen />
    </div>
  );
}

export default App;

