import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { Loader, PageContainer } from 'components/molecule';
import { useActions, useMappedState } from 'hooks';
import { useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ALBUM_PATHS } from 'routes';

export const AlbumList = () => {
  const { getTopAlbums } = useActions();
  const { topalbums, loading } = useMappedState((state) => state.topalbums);

  useEffect(() => {
    if (!topalbums) { getTopAlbums(); }
  }, []);

  return (
    <PageContainer>
      {loading
        ? <Loader /> : (
          <Grid
            container
            spacing={4}
            justifyContent="center"
          >
            {topalbums?.album?.map((album) => (
              album
            && (
            <Grid
              item
              key={`${album.mbid}-${album.playcount}`}
            >
              <Card
                sx={{
                  width: 250,
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={album.image[2]['#text']}
                  alt={album.name}
                />
                <CardContent
                  sx={{
                    height: 40,
                  }}
                >
                  <Typography
                    sx={{
                      width: 220,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {`${album.name}`}
                  </Typography>
                  <Typography variant="caption">
                    {album.playcount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={generatePath(ALBUM_PATHS.albumInfo, { albumName: album.name })}
                  >
                    Show Info
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            )
            ))}
          </Grid>
        )}
    </PageContainer>
  );
};
