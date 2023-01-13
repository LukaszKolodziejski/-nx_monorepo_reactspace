import { AppBar, Toolbar, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export function Header() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.header}
      position="static"
      color="default"
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h1"
          fontWeight="Bold"
          fontSize={20}
          color="text.primary"
        >
          Dashboard Monitor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
}));
