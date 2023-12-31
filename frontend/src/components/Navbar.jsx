


'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link, useHistory, useNavigate, useNavigation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
// interface Props {
//     children: React.ReactNode
//   }

// const NavLink = (props:Props) => {
//   const { children } = props

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   )
// }

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
const navigate=useNavigate()
  const loggedInUser = JSON.parse(localStorage.getItem('PunnyPulseUser'))
  // console.log(loggedInUser.user.name);
  const handleLogout = () => {
    localStorage.removeItem('PunnyPulseUser');
    navigate('/login');
  };

  const Server=()=>{
    navigate("/history");
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading as='h1' size='xl' noOfLines={1}   color='tomato'h="50px" >
            <Link as={RouterLink} to="/" color="teal.500">
      PunnyPulse
    </Link>
     
  </Heading></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}>
        <Avatar
          size={'sm'}
          src={'https://avatars.dicebear.com/api/male/username.svg'}
        />
      </MenuButton>
      {loggedInUser ? (
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar
              size={'2xl'}
              src={'https://avatars.dicebear.com/api/male/username.svg'}
            />
          </Center>
          <br />
          <Center>  
            <p>{loggedInUser.user.name}</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem onClick={Server}>Your History</MenuItem>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      ) : (
        <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
      )}
    </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default Navbar