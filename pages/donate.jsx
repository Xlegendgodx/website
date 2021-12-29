import { useState } from 'react';
import { Container, Flex, Box, Text } from '@chakra-ui/react';
import NavigationSection from '../components/BaseComponents/NavigationSection';
import DonateTab from '../components/DonatePage/DonateTab';

const Donate = () => {
  const [name, setName] = useState('Fakhri19');
  return (
    <>
      <NavigationSection />
      <Flex color='white' bg='#15151F'>
        <Container maxW='container.lg'>
          <Flex
            marginX='auto'
            paddingTop={{ base: '100px', md: '160px' }}
            paddingBottom={{ base: '40px', md: '80px' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box width={{ base: '100%', md: '45%' }}>
              <Text
                fontSize={['sm', 'md', 'md', 'lg']}
                fontWeight='light'
                textTransform='uppercase'
                letterSpacing='4.5px'
              >
                Donasi
              </Text>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='bold'
                marginTop='4'
                marginBottom='8'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
              >
                Hello, {name}
              </Text>
              <Text fontSize={['md']} fontWeight='light'>
                Makasih banyak nih udah mau donasi, dengan bantuanmu kita bisa
                sampai sejauh ini. Kalau sendirian server kita ini nggak akan
                sampai sebagus ini. Dukung kami terus ya, masih banyak hal yang
                pingin kita tunjukkin ke kamu 😁
              </Text>
            </Box>
            <Box mt={{ base: '4', md: '0' }}>
              <DonateTab></DonateTab>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Donate;