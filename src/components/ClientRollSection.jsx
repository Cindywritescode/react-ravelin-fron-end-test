import styled from 'styled-components';
import { Box } from '../UI/Box';
import { Carousel } from '../UI/Carousel';
import { Grid } from '../UI/Grid';
import { path } from '../helpers/path';

export const ClientRollSection = () => (
  <ClientRoll>
    <Box justify="center" hideOnScreen="small">
      <p>The world's leading online business trust Ravelin to manage risk</p>
    </Box>
    <Box justify="center" showOnScreen="small">
      <p>Trusted by</p>
    </Box>
    <ClientGallery urls={[
      path('images/clients/just-eat.svg'),
      path('images/clients/boohoo.svg'),
      path('images/clients/glovo.svg'),
      path('images/clients/booking.com.svg'),
      path('images/clients/deliveroo.svg'),
      path('images/clients/freenow.svg')
    ]}/>
  </ClientRoll>
);

const ClientRoll = styled.div`
  margin: 0 0 5em 0;

  & p {
    margin: 2.5em 0;
    text-align: center;
    color: #8E9097;
    font-size: 1.1em;
    font-weight: bold;
  }
`;

const ClientGallery = ({
  urls
}) => {
  return [
    <Box justify="center" hideOnScreen="small">
      <Grid gap="medium" cols={6} largeCols={3} mediumCols={2}>
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