
// import React, { useState } from 'react';
// import { Container, FormControlLabel, Typography, Checkbox, Box, Button } from '@mui/material';

// function Quiz() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [submitClicked, setSubmitClicked] = useState(false);

//   const handleOptionClick = (option) => {
//     if (!submitClicked) {
//       setSelectedOption(option);
//     }
//   };

//   const handleSubmit = () => {
//     setSubmitClicked(true);
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
//               checked={selectedOption === 'A'}
//               onChange={() => handleOptionClick('A')}
//               disabled={submitClicked}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'A' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label={<Typography variant="body1"><strong>A</strong> 8</Typography>}
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'B'}
//               onChange={() => handleOptionClick('B')}
//               disabled={submitClicked}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'B' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label={<Typography variant="body1"><strong>B</strong> 360</Typography>}
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'C'}
//               onChange={() => handleOptionClick('C')}
//               disabled={submitClicked}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'C' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label={<Typography variant="body1"><strong>C</strong> 1080</Typography>}
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               color="primary"
//               checked={selectedOption === 'D'}
//               onChange={() => handleOptionClick('D')}
//               disabled={submitClicked}
//               icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
//               checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'D' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
//             />
//           }
//           label={<Typography variant="body1"><strong>D</strong> There is no way to know the answer.</Typography>}
//           sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
//         />
//         <Button
//           variant="outlined"
//           onClick={handleSubmit}
//           disabled={submitClicked}
//           sx={{ alignSelf: 'flex-end' }}
//         >
//           Submit Answer
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default Quiz;
import React, { useState } from 'react';
//import { Container, FormControlLabel, Typography, Checkbox, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider, Container, FormControlLabel, Typography, Checkbox, Box, Button } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
       'Poppins'
    ].join(','),
  },
});





function Quiz() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleOptionClick = (option) => {
    if (!submitClicked) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    setSubmitClicked(true);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{ /*border: '2px solid black',*/ padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Pick correct answer
      </Typography>
      <Typography
        variant="body2" // Set the variant to body2 for smaller font size
      >
        <span style={{ fontWeight: 'bold', color: 'black' }}>Choose the </span><span style={{ fontWeight: 'bold', color: 'green' }}>correct answer</span>
      </Typography>  
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'A'}
              onChange={() => handleOptionClick('A')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'A' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>A</strong> 8</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '50px', padding: '5px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'B'}
              onChange={() => handleOptionClick('B')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '100%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'B' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>B</strong> 360</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '50px', padding: '5px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'C'}
              onChange={() => handleOptionClick('C')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'C' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>C</strong> 1080</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '50px', padding: '5px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'D'}
              onChange={() => handleOptionClick('D')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'D' ? 'blue' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid blue' }} />}
            />
          }
          label={<Typography variant="body1"><strong>D</strong> There is no way to know the answer.</Typography>}
          sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '50px', padding: '5px' }}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          disabled={submitClicked}
          sx={{ alignSelf: 'center', marginTop: '10px', borderRadius: '50px', bgcolor: submitClicked ? '#87CEEB' : 'gray', '&:hover': { bgcolor: submitClicked ? '#87CEEB' : 'gray' } }}
        >
          Submit Answer
        </Button>
      </Box>
    </Container>
    </ThemeProvider>

  );
}

export default Quiz;
