import React, { useState } from 'react';
import { createTheme, ThemeProvider, Container, FormControlLabel, Typography, Checkbox, Box, Button } from '@mui/material';


//added arial as the font. 
//one of the comments here: https://stackoverflow.com/questions/39706524/how-to-import-fonts-with-pure-js
const theme = createTheme({
  typography: {
    fontFamily: [
       'Arial'
    ].join(','),
  },
});

//credit to a bunch of stack overflows on how to set up quiz question - 
//https://stackoverflow.com/questions/39706524/how-to-import-fonts-with-pure-js
//https://stackoverflow.com/questions/6293588/how-to-create-a-checkbox-with-a-clickable-label
//holy grail - https://stackoverflow.com/questions/tagged/checkbox
//used a couple off of the above pinned convos
function Quiz() {
  //look which question is selected
  //not super necessary for this fake question, but
  //would be super useful when later needing to check if they were right
  const [selectedOption, setSelectedOption] = useState(null);
  //check if submitted
  //again would later be useful for timers, points, etc.
  const [submitClicked, setSubmitClicked] = useState(false);

    //if not submitted, let us choose dif answers
  const handleOptionClick = (option) => {
    if (!submitClicked) {
      setSelectedOption(option);
    }
  };

  //submit is clicked boolean
  const handleSubmit = () => {
    setSubmitClicked(true);
  };

  //so sorry this is in js but this is how I found most MUI
  //guides... and I'm new to MUI so I just went with it 
  //holy grail mui questions: https://stackoverflow.com/questions/tagged/material-ui
  //DISCLAIMER - unapproved site: https://mui.com/material-ui/react-container/
  //but I think its ok???? all about containers
  //typography - https://stackoverflow.com/questions/59268156/when-should-typography-be-used-in-material-ui
  //sx - https://stackoverflow.com/questions/71992235/what-is-the-best-way-to-use-sx-prop-in-mui-v5
  //span - https://stackoverflow.com/questions/77966000/how-to-style-a-div-or-span-elements-in-mui-5
  //cehckboxes in mui - https://stackoverflow.com/questions/73107755/checkboxes-with-react-and-mui
  // ^^ also talks about formcontrollabel stuff
  // mui functionality onClick - https://stackoverflow.com/questions/64305609/how-to-get-material-ui-button-attribute-in-onclick
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{  padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        Pick correct answer
      </Typography>
      <Typography variant="body2"  gutterBottom sx={{marginBottom: '20px' }}// set the variant to body2 for smaller font size
      > {/* did the span thing below for the color change */}
        <span style={{ fontWeight: 'bold', color: '#757575' }}>Choose the </span><span style={{ fontWeight: 'bold', color: 'green' }}>correct answer</span>
      </Typography>  {/* set up the box below as described in the SO cited above*/}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary" // total credit to the checkbox SO cited above
              checked={selectedOption === 'A'}
              onChange={() => handleOptionClick('A')}
              disabled={submitClicked}
              //really awesome that it has a icon and checkIcon functionality built in!!
              icon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', backgroundColor: selectedOption === 'A' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          //text in the answer and border control for around the answer
          label={<Typography variant="body1"><strong>A</strong> 8</Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'A' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '3px' }} // Adjusted border color
        />
        <FormControlLabel
          control={
            <Checkbox //SAME AS ABOVE!! REPEAT FOR OTHER QUESTIONS
              color="primary"
              checked={selectedOption === 'B'}
              onChange={() => handleOptionClick('B')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '100%', width: '1.3em', height: '1.3em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', backgroundColor: selectedOption === 'B' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>B</strong> 360</Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'B' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '3px' }} // Adjusted border color
          />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'C'}
              onChange={() => handleOptionClick('C')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', backgroundColor: selectedOption === 'C' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>C</strong> 1080</Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'C' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '3px' }} // Adjusted border color
          />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={selectedOption === 'D'}
              onChange={() => handleOptionClick('D')}
              disabled={submitClicked}
              icon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', border: '2px solid black', display: 'inline-block', marginRight: '10px' }} />}
              checkedIcon={<span style={{ borderRadius: '50%', width: '1.3em', height: '1.3em', backgroundColor: selectedOption === 'D' ? '#87CEEB' : 'inherit', display: 'inline-block', marginRight: '10px', border: '2px solid #87CEEB' }} />}
            />
          }
          label={<Typography variant="body1"><strong>D</strong> There is no way to know<span style={{ display: 'block', marginLeft: '17px' }}>the answer.</span></Typography>}
          sx={{ marginBottom: '10px', border: selectedOption === 'D' ? '2px solid #87CEEB' : '1px solid black', borderRadius: '50px', padding: '3px' }} // Adjusted border color
          />
        
        <Button
        //button credit to the SO cited above for MUI buttons
            variant="outlined"
            onClick={handleSubmit}
            disabled={!selectedOption || submitClicked}
            sx={{
              alignSelf: 'center',
              marginTop: '10px',
              borderRadius: '50px',
              bgcolor: submitClicked ? 'gray' : selectedOption ? '#87CEEB' : 'gray',
              color: 'white',
              '&:hover': { bgcolor: 'gray' },
              textTransform: 'none', // prevents all caps
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
