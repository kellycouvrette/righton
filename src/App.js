
// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import './App.css';

// function WhiteScreen() {
//   return (
//     <Container
//       sx={{
//         backgroundColor: 'white', // Set background color to white
//         width: '100%', // Fill the width
//         height: '100vh', // Fill the height of the viewport
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         padding: (theme) => theme.spacing(4), // Add padding
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           marginBottom: (theme) => theme.spacing(4), // Add margin to the bottom of the header
//           color: 'black', // Set text color to black
//         }}
//       >
//         Pick correct answer
//       </Typography>
//       <Typography
//         variant="body2" // Set the variant to body2 for smaller font size
//         sx={{
//           color: 'green', // Set text color to green
//         }}
//       >
//         <span style={{ color: 'black' }}>Choose the correct</span> answer
//       </Typography>    
//       <ul>
//         <li> A 8 </li>
//         <li> B 360 </li>
//         <li> C 1080 </li>
//         <li> D There is no way to know the answer. </li>

//       </ul>
      
//       </Container>
//   );
// }

// function App() {
//   return (
//     <div>
//       <WhiteScreen />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { Button, Container, Typography } from '@mui/material';

// function Quiz() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <Container>
//       <Typography
//         variant="h5"
//         sx={{
//           marginBottom: (theme) => theme.spacing(4), // Add margin to the bottom of the header
//           color: 'black', // Set text color to black
//         }}
//       >
//         Pick correct answer
//       </Typography>
//       <Typography
//         variant="body2" // Set the variant to body2 for smaller font size
//         sx={{
//           color: 'green', // Set text color to green
//         }}
//       >
//         <span style={{ color: 'black' }}>Choose the correct</span> answer
//       </Typography>  
//       <Button
//         variant={selectedOption === 'Paris' ? 'contained' : 'outlined'}
//         onClick={() => handleOptionClick('Paris')}
//         style={{ marginRight: '10px', marginBottom: '10px' }}
//       >
//         Paris
//       </Button>
//       <Button
//         variant={selectedOption === 'Berlin' ? 'contained' : 'outlined'}
//         onClick={() => handleOptionClick('Berlin')}
//         style={{ marginRight: '10px', marginBottom: '10px' }}
//       >
//         Berlin
//       </Button>
//       <Button
//         variant={selectedOption === 'London' ? 'contained' : 'outlined'}
//         onClick={() => handleOptionClick('London')}
//         style={{ marginRight: '10px', marginBottom: '10px' }}
//       >
//         London
//       </Button>
//       <Button
//         variant={selectedOption === 'Madrid' ? 'contained' : 'outlined'}
//         onClick={() => handleOptionClick('Madrid')}
//         style={{ marginBottom: '10px' }}
//       >
//         Madrid
//       </Button>
//     </Container>
//   );
// }

// export default Quiz;

// import React, { useState } from 'react';
// import { Container, FormControlLabel, Typography, Checkbox, Box } from '@mui/material';

// function Quiz() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <Container sx={{ /*border: '2px solid black',*/ padding: '20px', borderRadius: '10px' }}>
//       <Typography variant="h5" gutterBottom>
//         Pick correct answer
//       </Typography>
//       <Typography
//         variant="body2" // Set the variant to body2 for smaller font size
//         sx={{
//           color: 'green', // Set text color to green
//         }}
//       >
//         <span style={{ color: 'black' }}>Choose the correct</span> answer
//       </Typography>  
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'Paris'}
//               onChange={() => handleOptionClick('Paris')}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'Paris' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label="Paris"
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'Berlin'}
//               onChange={() => handleOptionClick('Berlin')}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'Berlin' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label="Berlin"
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'London'}
//               onChange={() => handleOptionClick('London')}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'London' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label="London"
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'Madrid'}
//               onChange={() => handleOptionClick('Madrid')}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'Madrid' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label="Madrid"
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default Quiz;

import React, { useState } from 'react';
import { Container, FormControlLabel, Typography, Checkbox, Box } from '@mui/material';

function Quiz() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container sx={{ /*border: '2px solid black',*/ padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h5" gutterBottom>
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'A'}
              onChange={() => handleOptionClick('A')}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'A' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>A</strong> 8</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'B'}
              onChange={() => handleOptionClick('B')}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'B' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>B</strong> 360</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'C'}
              onChange={() => handleOptionClick('C')}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'C' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>C</strong> 1080</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'D'}
              onChange={() => handleOptionClick('D')}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'D' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>D</strong> There is no way to know the answer.</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
        />
      </Box>
    </Container>
  );
}

export default Quiz;
