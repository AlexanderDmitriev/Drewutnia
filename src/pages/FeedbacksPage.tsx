import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import styled from '@emotion/styled';
import { Stars } from '../components/Stars';

const Item = styled.div`
  display: block;
  margin: 0 auto;
  :not(:last-child) {
    padding-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
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
              <Stars />
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
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            'był naszym gościem 07-05-2024'
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
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. '
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export const FeedbacksPage = () => {
  return (
    <Item>
      <Media />
      <Media />
      <Media />
      <Media loading />
    </Item>
  );
};
