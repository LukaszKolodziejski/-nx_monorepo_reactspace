import { useState } from 'react';
import {
  Container,
  Autocomplete,
  TextField,
  CircularProgress,
  Box,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Card, Details } from '../components';
import { useAppContext } from '../hooks/useAppContext';

const Main = () => {
  const classes = useStyles();
  const { data, isLoading } = useAppContext();
  const [observaleData, setObservableData] = useState([]) as any;
  const [selectedCard, setSelectedCard] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const toggleDialog = (flag: boolean) => setOpenDetailsDialog(flag);
  const onChange = (newData: any) => {
    if (newData) {
      setObservableData((prevData: any) => [...prevData, newData]);
    }
  };

  if (!data && isLoading) return <CircularProgress />;

  return (
    <Container className={classes.root}>
      <Autocomplete
        id="autocomplete"
        options={data}
        onChange={(_, newApp: any) => onChange(newApp)}
        getOptionLabel={(option) => option.company}
        sx={{ width: 200, marginTop: 2 }}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.id}>
            {option.company}
          </Box>
        )}
        renderInput={(params) => {
          return <TextField {...params} label="App" />;
        }}
      />
      {observaleData && (
        <Grid
          className={classes.cardsWrapper}
          spacing={3}
          container
          alignItems="flex-start"
        >
          {observaleData.map((card: any) => (
            <Card
              key={card.id}
              {...card}
              onClick={() => {
                toggleDialog(true);
                setSelectedCard(card.id);
              }}
            />
          ))}
        </Grid>
      )}
      {selectedCard && (
        <Details
          open={openDetailsDialog}
          cardId={selectedCard}
          onClose={() => toggleDialog(false)}
        />
      )}
    </Container>
  );
};

export default Main;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  cardsWrapper: {
    padding: 20,
  },
}));
