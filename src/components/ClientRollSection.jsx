import styled from 'styled-components';
import { Box } from '../UI/Box';

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
}) => (
  <Box wrap justify='between' align='baseline'>
    {urls.map(path => <ClientGalleryImg url={path}/>)}
  </Box>
);

const ClientGalleryImg = ({
  url,
  title = 'Image'
}) => (
  <div>
    <img src={url} alt={title}/>
  </div>
);

const ClientGalleryRow = styled.div`
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: space-between;
  //align-items: baseline;
`;