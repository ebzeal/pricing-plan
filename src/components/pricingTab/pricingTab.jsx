import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './pricingTab.styles.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Pricing({ large, name, amount, marked, line1, line2, line3, line4 }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={large ? '.large' : null}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {amount}
          <br />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <span>{marked}</span>
          {line1}
          <br />
          {line2}
          <br />
          {line3}
          <br />
          {line4}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get Started</Button>
      </CardActions>
    </Card>
  );
}
