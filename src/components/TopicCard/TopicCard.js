import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Box
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  userContainer: {
    height: '40px',
    width: '40px',
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const TopicCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <div className={classes.userContainer}>
              <img
                alt="User"
                className={classes.image}
                src={product.authorAvatar}
              />
            </div>
            <Box ml={1} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.author}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            {/* <AccessTimeIcon className={classes.statsIcon} /> */}
            <Typography
              display="inline"
              variant="body2"
            >
              2hr ago
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
      <Divider />
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Box mb={1} />
        <Typography
          align="left"
          gutterBottom
          variant="h6"
        >
          {product.title}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <FolderIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.category}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <VisibilityIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.totalDownloads} Views
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

TopicCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default TopicCard;
