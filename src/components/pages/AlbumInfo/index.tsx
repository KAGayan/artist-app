import {
  Typography,
  List,
  Grid,
  Card,
  CardMedia,
  Skeleton,
  Alert,
} from '@mui/material';
import { PageContainer } from 'components/molecule';
import { useActions, useMappedState } from 'hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TrackItem } from './TrackItem';

export const AlbumInfo = () => {
  const { albumName = '' } = useParams();
  const { loading, albumInfo } = useMappedState((state) => state.albumInfo);
  const { getAlbumInfoByName } = useActions();

  useEffect(() => {
    getAlbumInfoByName(albumName);
  }, []);

  return (
    <PageContainer
      showBackBtn
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        {!loading && !albumInfo?.tracks?.track
          ? (
            <Alert severity="error">
              Album Not Found!
            </Alert>
          )
          : (
            <>
              <Grid item>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    {loading
                      ? <Skeleton animation="wave" variant="rectangular" width={250} height={250} />
                      : (
                        <CardMedia
                          component="img"
                          width={250}
                          image={albumInfo?.image[3]['#text']}
                          alt={albumInfo?.name}
                        />
                      )}
                  </Card>
                </Grid>
                <Grid
                  item
                  sx={{
                    marginTop: 2,
                  }}
                >
                  {loading
                    ? (
                      <>
                        <Skeleton height={40} animation="wave" variant="text" />
                        <Skeleton height={20} width={100} animation="wave" variant="text" />
                      </>
                    )
                    : (
                      <>
                        <Typography
                          variant="h5"
                          width={250}
                        >
                          {albumInfo?.name}
                        </Typography>
                        <Typography
                          variant="caption"
                        >
                          {albumInfo?.artist}
                        </Typography>
                      </>
                    )}
                </Grid>
              </Grid>
              <Grid item>
                {loading
                  ? (
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={200}
                      height={60}
                    />
                  )
                  : (
                    <List
                      sx={{
                        paddingTop: 0,
                      }}
                    >
                      {Array.isArray(albumInfo?.tracks?.track)
                        ? albumInfo?.tracks?.track?.map((track) => (
                          <TrackItem
                            key={track['@attr'].rank}
                            rank={track['@attr']?.rank}
                            name={track?.name}
                          />
                        ))
                        : (
                          <TrackItem
                            rank={albumInfo?.tracks?.track['@attr']?.rank}
                            name={albumInfo?.tracks?.track?.name}
                          />
                        )}
                    </List>
                  )}
              </Grid>
            </>
          )}
      </Grid>
    </PageContainer>
  );
};
