import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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

export default function Note({title,body,time_e,id,removeNote}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const Remove = () => {
        removeNote(id);
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          {title}{bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {time_e}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
              <Button
                  size="small"
                  className="align-items-center"
                  onClick={Remove}>
                  <HighlightOffIcon />
              </Button>
      </CardActions>
    </Card>
  );
}