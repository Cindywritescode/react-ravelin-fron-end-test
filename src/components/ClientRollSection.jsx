import styled from 'styled-components';
import { Box } from '../UI/Box';
import { Carousel } from '../UI/Carousel';
import { Grid } from '../UI/Grid';

export const ClientRollSection = () => (
  <ClientRoll>
    <p>The world's leading online business trust Ravelin to manage risk</p>

    <ClientGallery urls={[
      '/images/clients/just-eat.svg',
      '/images/clients/boohoo.svg',
      '/images/clients/glovo.svg',
      '/images/clients/booking.com.svg',
      '/images/clients/deliveroo.svg',
      '/images/clients/freenow.svg',
    ]}/>
  </ClientRoll>
);

const ClientRoll = styled.div`
  margin: 10rem 0 5rem 0;

  & p {
    margin-bottom: 2.5rem;
    text-align: center;
  }
`;

const ClientGallery = ({
  urls
}) => {
  return [
    <Box justify="center" hideOnScreen="small">
      <Grid gap='medium' cols={6} largeCols={3} mediumCols={2}>
      {urls.map(path => <ClientGalleryImg url={path}/>)}
      </Grid>
    </Box>,
    <Box justify="center" showOnScreen="small">
      <Carousel>
        {urls.map(path => <ClientGalleryImg url={path}/>)}
      </Carousel>
    </Box>
  ];
};

const ClientGalleryImg = ({
  url,
  title = 'Image'
}) => (
  <div>
    <img src={url} alt={title}/>
  </div>
);