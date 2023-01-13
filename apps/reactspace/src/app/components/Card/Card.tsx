import {
  Typography,
  CardContent,
  Grid,
  Theme,
  Card as CardContainer,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

export type AppCardProps = {
  id: number;
  name: string;
  company: string;
  onClick: (cardId: number) => void;
};

export const Card = ({ id, name, company, onClick }: AppCardProps) => {
  const classes = useStyles();

  return (
    <Grid item xs={10} sm={6} md={4}>
      <CardContainer className={classes.card} onClick={() => onClick(id)}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="subtitle1" align="center">
            Name: {name}
          </Typography>
          <Typography component="p" variant="subtitle1" align="center">
            Company: {company}
          </Typography>
        </CardContent>
      </CardContainer>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    backgroundColor: theme.palette.grey[200],
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 130,
  },
}));
