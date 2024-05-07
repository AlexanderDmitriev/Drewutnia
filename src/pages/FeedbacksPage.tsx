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
import { feedbacks } from '../components/feedbacks';

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
  name?: string;
  date?: string;
  about?: string;
}

function Media(props: MediaProps) {
  const { loading = false, name, date, about } = props;

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
  );
}

export const FeedbacksPage = () => {
  return (
    <Item>
      {feedbacks.map(feed => (
        <Media
          key={feed.id}
          name={feed.name}
          date={feed.date}
          about={feed.about}
        />
      ))}
      <Media loading />
    </Item>
  );
};
