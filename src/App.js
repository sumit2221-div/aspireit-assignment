
import './App.css';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="xs">
    <Box mt={5} p={3} boxShadow={3} borderRadius={2}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form >
        <TextField
          label="Username"
          name="username"
          fullWidth
          margin="normal"
          variant="outlined"
       
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
       
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  </Container>
);
};
export default App;
