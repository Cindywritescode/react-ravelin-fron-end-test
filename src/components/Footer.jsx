import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from '../svg/SocialIcon';
import { Box } from '../UI/Box';
import { Grid } from '../UI/Grid';

export const Footer = () => (
  <FooterBlock>
    <Box basis={'3/4'} direction="column" pad="medium">
      <Box pad="xsmall" justify="center">
        <Grid cols={3} gap="medium">
          <Instagram/>
          <Facebook/>
          <Twitter/>
        </Grid>
      </Box>
      <Box justify="center">
        <p>&copy;2021 RAVELIN TECHNOLOGY LTD. ALL RIGHTS RESERVED.</p>
      </Box>
    </Box>
  </FooterBlock>
);

const FooterBlock = styled.footer`
  background: #e4e4e4;
  color: #8E9097;

  & p {
    font-size: 0.8em;
    margin-bottom: 0;
    text-align: center;
  }
`;