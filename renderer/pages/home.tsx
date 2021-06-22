import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import MainLayout from '../components/templates/MainLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  })
);

function Home() {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <MainLayout></MainLayout>
  );
};

export default Home;
