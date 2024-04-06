import MessageList from './components/Messages/MessageList';
import AddForm from './components/AddForm/AddForm';
import { Grid } from '@mui/material';
import Appbar from './components/AppBar/Appbar';

function App() {

  return (
    <>
      <header>
        <Appbar />
      </header>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <AddForm/>
        </Grid>
        <Grid item xs={8}>
          <MessageList/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
