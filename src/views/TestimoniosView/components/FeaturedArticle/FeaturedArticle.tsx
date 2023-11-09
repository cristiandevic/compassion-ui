import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const mocks = [
  {
    image: 'https://img.freepik.com/foto-gratis/mujer-mayor-rubia-que-mira-primer-lejos_23-2148286517.jpg?w=2000&t=st=1699548073~exp=1699548673~hmac=2ee7959e7cc48e2a2b39e5ef4aca462182ba4d22baf5f4934c79da8fdf0f720a',
    description:'Mi viaje a Bolivia para conocer a los niños que patrocinamos fue increíble. Ver las sonrisas en sus rostros y sentir la conexión que creamos a través de la distancia fue verdaderamente conmovedor. El tiempo que pasamos juntos fortaleció nuestro vínculo y confirmó que cada pequeño gesto de apoyo realmente marca la diferencia. ¡Gracias por hacer posible este encuentro tan especial!"',
    title: 'Testimonio de Sarah:',
    author: {
      name: 'Sarah:',
      avatar: '',
    },
    date: '22 Nov',
  },
  {
    image: 'https://img.freepik.com/foto-gratis/apuesto-hombre-negocios-mayor-acertado-que-senala-dedo-izquierda_176420-31705.jpg?w=2000&t=st=1699548187~exp=1699548787~hmac=5cc327e0e3a0244ac6c6ed4da2235fe1849eb59b3e5ad5e682d5694ac821c49d',
    description:'Visitar Bolivia y encontrarme con los niños a quienes ayudamos fue una experiencia única. Poder abrazarlos y compartir momentos significativos me recordó por qué decidimos patrocinarlos. La gratitud en sus ojos y la alegría en sus corazones hicieron que todo el viaje valiera la pena. Estoy agradecido de ser parte de algo tan significativo."',
    title: 'Testimonio de Michael',
    author: {
      name: 'Michael Smith',
      avatar: '',
    },
    date: '05 Dec',
  }
];
const FeaturedArticle = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      {
        mocks.map((mock, index) => {
          return (
            <Box key={index}>
              <Box
                component={'a'}
                href={''}
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  boxShadow={4}
                  display={'flex'}
                  flexDirection={{ xs: 'column', md: 'row-reverse' }}
                  sx={{ backgroundImage: 'none' }}
                >
                  <Box
                    sx={{
                      width: { xs: 1, md: '50%' },
                      position: 'relative',
                      '& .lazy-load-image-loaded': {
                        height: 1,
                        display: 'flex !important',
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      height={1}
                      width={1}
                      src={mock.image}
                      alt="..."
                      effect="blur"
                      sx={{
                        objectFit: 'cover',
                        maxHeight: 360,
                        filter:
                                              theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                      }}
                    />
                    <Chip
                      label="Featured"
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        bgcolor: 'background.paper',
                      }}
                    />
                    <Box
                      component={'svg'}
                      viewBox="0 0 112 690"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        top: '-50%',
                        left: 0,
                        right: 0,
                        color: theme.palette.background.paper,
                        transform: 'scale(2)',
                        height: 1,
                        width: 'auto',
                        transformOrigin: 'top center',
                        display: { xs: 'none', md: 'block' },
                      }}
                    >
                      <path
                        d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                        fill="currentColor"
                      />
                    </Box>
                  </Box>
                  <CardContent
                    sx={{
                      position: 'relative',
                      width: { xs: 1, md: '50%' },
                      padding: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography variant={'h5'} gutterBottom>
                        {mock.title}
                      </Typography>
                      <Typography color="text.secondary">{mock.description}</Typography>
                    </Box>
                    <Box>
                      <Divider sx={{ marginY: 2 }} />
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Box display={'flex'} alignItems={'center'}>
                          <Typography color={'text.secondary'}>
                            {mock.author.name}
                          </Typography>
                        </Box>
                        <Typography color={'text.secondary'}>{mock.date}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Box>
          );
        })
      }

    </>
    
  );
};

export default FeaturedArticle;
