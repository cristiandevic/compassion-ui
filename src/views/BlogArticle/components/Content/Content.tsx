/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Content = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://www.compassion.com/Images/bolivia-boy-riding-bicycle.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://www.compassion.com/Images/bolivia-baby-coloredblanket.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://www.compassion.com/Images/bolivia-boy-wellwater.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://www.compassion.com/Images/bolivia-boys-reading.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={'subtitle1'}>
            En las polvorientas calles de algunos barrios marginados en Bolivia, la pobreza sigue siendo una sombra omnipresente que afecta a muchos niños. Sin embargo, en medio de las dificultades económicas y sociales, hay una chispa de esperanza que se enciende en los corazones de estos jóvenes, quienes desafían las probabilidades y encuentran consuelo y motivación en la educación.


        </Typography>
        <Box width={1} height={1} marginY={4}>
          <LazyLoadImage
            height={'100%'}
            width={'100%'}
            src={'https://www.compassion.com/Images/bolivia-kids-soccer.jpg'}
            alt="Remote working"
            effect="blur"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
        </Box>
        <Box marginY={4}>
          <Typography variant={'h5'} gutterBottom>
              “Superando las Barreras Económicas ”
          </Typography>
          <Typography>
              La pobreza extrema ha dejado a muchas familias bolivianas luchando por lo básico, y los niños a menudo enfrentan dificultades para acceder a necesidades esenciales como alimentos adecuados y atención médica. A pesar de esto, muchos de ellos encuentran consuelo en las aulas de clase, donde sueñan con un futuro diferente.


          </Typography>
          <Box marginTop={2}>
            <ul>
              <li>
                <Typography>
                    En la escuela, estos jóvenes demuestran una notable resiliencia. A pesar de las limitaciones financieras, el entusiasmo por aprender brilla en sus ojos. Las aulas pueden carecer de recursos básicos, pero la sed de conocimiento de estos niños es insaciable. Libros desgastados y pupitres simples no son obstáculos para su deseo de aprender y sobresalir.


                </Typography>
              </li>
              <li>
                <Typography>
                    Entre los rostros sonrientes y esperanzados se encuentran historias de verdadera determinación. Niños que caminan kilómetros para llegar a la escuela, que comparten libros desgastados con sus compañeros y que sueñan con carreras que les permitan cambiar el destino de sus familias.


                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box marginY={4}>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 8,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box>
          <Typography variant={'h5'} gutterBottom>
              La Educación como Catalizador del Cambio


          </Typography>
          <Typography>
              Aunque la pobreza puede ser una carga pesada, estos niños bolivianos ven la educación como su boleto para escapar de la trampa de la pobreza. La esperanza de un futuro mejor impulsa sus esfuerzos diarios, y a pesar de los desafíos, están decididos a abrirse paso hacia una vida más próspera.


          </Typography>
        </Box>
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={'http://faviofigueroa.com/img/pexels-photo-1516680-removebg-preview.jpg'}
          />
          <Box>
            <Typography fontWeight={600}>Favio Figueroa</Typography>
            <Typography color={'text.secondary'}>Nov 09, 2023</Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
