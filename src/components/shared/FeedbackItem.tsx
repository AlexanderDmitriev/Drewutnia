import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Stars } from './Stars';
import { IMediaProps } from '../Interfaces/IMediaProps';

export const FeedbackItem = (props: IMediaProps) => {
  const { loading = false, name, date, about, rating } = props;

  return (
    <li>
      <Card sx={{ maxHeight: 345, m: 2 }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar>
                <PermIdentityOutlinedIcon />
              </Avatar>
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <Stars rating={rating} />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width={345}
                style={{ marginBottom: 6 }}
              />
            ) : (
              `${name}`
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              `był naszym gościem ${date}`
            )
          }
        />
        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {`${about}`}
            </Typography>
          )}
        </CardContent>
      </Card>
    </li>
  );
};
