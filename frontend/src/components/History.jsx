import { Box, Divider, Flex, Heading, Spacer, useSafeLayoutEffect,ListItem,List } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Select,Button,Input,Center } from '@chakra-ui/react'
import axios from 'axios';
import Navbar from './Navbar'

const History = () => {
  const [data,setRes]=useState([])
  const loggedInUser = JSON.parse(localStorage.getItem('PunnyPulseUser'))
  console.log(loggedInUser.user._id);
  const token=loggedInUser.Accesstoken
const user=loggedInUser.user

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/history/${user._id}`);
      if (response.ok) {
        const jsonData = await response.json();
        setRes(jsonData);
        
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();
}, []);

// console.log(`res-->`,res);
  return (
    <div>
        <Navbar />
       
        <Flex>
          
      <Box border='2px' borderColor='gray.400' w="20%"  bgColor="#3f5efb" className='sidebar'>
     
      

      
      </Box>
      <Spacer />
<Box border='2px' borderColor='gray.400' w="60%" h="100vh"  /* bgColor="bisque" */>
      
<Heading as='h3' size='xl' noOfLines={1}   color='green'h="50px" >
        
        History
      
   
</Heading>
      
{/* {res?.length>0 && <Box border='2px' borderColor='gray.400' p='5px' mx="10%" mt="5%">

{res.map((ele)=>(
  <Center bg='tomato' fontSize='lg'  color='white' p="10px" className='res' key={ele._id}>

    </Center>  
))}

 
</Box >} */}



<Box>
      {data?.length > 0 ? (
        <Box>
          <Heading fontSize='2xl' textAlign='center' mb='2' mt='2' color='teal.500'>
            History of {user.name}'s Data
          </Heading>
          <List>
            {data.map((item, index) => (
              <Box
                key={index}
                mb='2'
                // w='10/12'
                mx='auto'
                borderWidth='1px'
                borderColor='teal.500'
                p='2'
                bgColor="aliceblue"
              >
                <ListItem>
                  <Box as='span'  fontWeight='semibold' mb='6'>
                    Response {index + 1}
                  </Box>
                  : {item.body}
                </ListItem>
                <ListItem>
                  <Box as='span'   fontWeight='semibold'>
                    Date :
                  </Box>
                  {item.date}
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      ) : (
        <Box textAlign='center'>
          <p>Loading...</p>
        </Box>
      )}
    </Box>

    </Box>
    <Spacer />
     <Box border='2px' borderColor='gray.400' w="20%" h="100vh" bgColor="#3f5efb" className='sidebar'>
       
    
      </Box>
    </Flex>
    <p>

    </p>
    
    </div>
  )
}

export default History