

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
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'A' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>A</strong> 8</Typography>}
          //sx={{ marginBottom: '10px', border: '1px solid black', borderRadius: '50px', padding: '5px' }}
          sx={{ marginBottom: '10px', border: selectedOption === 'A' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '5px' }} // Adjusted border color
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'B'}
              onChange={() => handleOptionClick('B')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '100%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'B' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>B</strong> 360</Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'B' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '5px' }} // Adjusted border color
          />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'C'}
              onChange={() => handleOptionClick('C')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'C' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>C</strong> 1080</Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'C' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '5px' }} // Adjusted border color
          />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'D'}
              onChange={() => handleOptionClick('D')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.5em', height: '1.5em', backgroundColor: selectedOption === 'D' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>D</strong> There is no way to know the answer.</Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'D' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '5px' }} // Adjusted border color
          />
        
        <Button
            variant="outlined"
            onClick={handleSubmit}
            disabled={!selectedOption || submitClicked}
            sx={{
              alignSelf: 'center',
              marginTop: '10px',
              borderRadius: '50px',
              bgcolor: submitClicked ? 'white' : selectedOption ? '#87CEEB' : 'gray',
              color: 'white',
              '&:hover': { bgcolor: 'gray' },
              textTransform: 'none', // Prevents all caps
            }}
          >
            {submitClicked ? 'Answer Submitted' : 'Submit Answer'}
          </Button>
      </Box>
    </Container>
    </ThemeProvider>

  );
}

export default Quiz;
