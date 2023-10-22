import { Box, Divider, Flex, Heading, Spacer, Spinner, useSafeLayoutEffect } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Select,Button,Input,Center } from '@chakra-ui/react'
import axios from 'axios';

const Landing = () => {

  const [loading, setLoading] = useState(false);

  let str=["Embrace the journey, for it is the path that shapes us.",
  "In the garden of life, kindness is the most beautiful flower.",
  "Courage is not the absence of fear, but the triumph over it.",
  "The stars remind us that even in darkness, there is beauty.",
  "Wisdom whispers in the silence between our thoughts.",
  "Hope is the light that guides us through the darkest nights.",
  "Strength lies not in muscle, but in the will to persevere.",
  "Let your dreams be the compass that guides your steps.",
  "The greatest gift you can give is a piece of your heart.",
  "Every sunrise is a promise of a new beginning."]

  
const [res,setRes]=useState("")

  const [genre,setGenre]=useState("")
  const [language,setLanguage]=useState("")
  const [keywords,setKeywords]=useState("")
// console.log(`genre-->`,genre);
// console.log(`language-->`,language);
// console.log(`keywords-->`,keywords);
const loggedInUser = JSON.parse(localStorage.getItem('PunnyPulseUser'))||""
// console.log(loggedInUser.Accesstoken);


const handleClick=()=>{
  setLoading(true);
  const requestBody = {
    content: genre,
    language: language,
    input: keywords
  }
  console.log(requestBody);
  
  axios.post('http://localhost:5000/ai/generate', requestBody, {
  headers: {
    'Authorization': `${loggedInUser?.Accesstoken}`
  }
})
  .then(response => {
    console.log('Response:', response.data.content);
    // Handle the response data as needed
    console.log(response.data);
    setRes(response.data.content)
  })
  .catch(error => {
    console.error('Error:', error);
   
  })
  .finally(() => {
    setLoading(false);
  });

  

}

const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentQuoteIndex(prevIndex => prevIndex + 1);
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % str.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

// if(loading){
//   return(
//     <Box textAlign='center'>
//     <Spinner size='xl' color='teal.500' thickness='4px' />
//   </Box>
//   )
// }



  return (
//     background: rgb(63,94,251);
// background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

    <Flex>
      <Box border='2px' borderColor='gray.400' w="20%"  bgColor="#3f5efb" className='sidebar'>
      {/* <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      

      
      </Box>
      <Spacer />
<Box border='2px' borderColor='gray.400' w="60%" h="100vh" pl="5%" /* bgColor="bisque" */>
      
      <Flex mt="2%" className='main'>
      <Box>
       <Select variant='filled' value={genre} onChange={(e)=>setGenre(e.target.value)}  placeholder='Select Genre' >
  <option value='quote'>Quote</option>
  <option value='joke'>Joke</option>
  <option value='shayari'>Shayari</option>
</Select>
       </Box>
       <Box>
       <Select variant='filled' value={language} onChange={(e)=>setLanguage(e.target.value)}  placeholder='Select Language' >
  <option value='english'>English</option>
  <option value='hindi'>Hindi</option>
 
</Select>
       </Box>

       <Box>
       <Input value={keywords} onChange={(e)=>setKeywords(e.target.value)} placeholder='Specify the Keyword' />
       </Box>
       <Button colorScheme='green' onClick={handleClick}>Generate</Button>
      </Flex>
      

      {loading ? (
  <Box border='2px' borderColor='gray.400' p='5px' mx="10%" mt="10%">
    <Center bg='teal.500' fontSize='2xl' color='white' p="60px" className='res'>
      Loading...
    </Center>  
  </Box>
) : (
  res ? (
    <Box border='2px' borderColor='gray.400' p='5px' mx="10%" mt="7%">
      <Center bg='tomato' fontSize='2xl' color='white' p="50px" className='res'>
        {res}
      </Center>  
    </Box>
  ) : (
    <Box border='2px' borderColor='gray.400' p='5px' mx="10%" mt="5%">
      <Center bg='tomato' fontSize='lg' color='white' p="40px" className='res'>
        Random Quotes
        <br />
        <br />        {str[currentQuoteIndex]}
      </Center>
    </Box>
  )
)}




    </Box>
    <Spacer />
     <Box border='2px' borderColor='gray.400' w="20%" h="100vh" bgColor="#3f5efb" className='sidebar'>
       
     {/* <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted >
        <source src="https://i.makeagif.com/media/11-04-2022/EtHKpD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      </Box>
    </Flex>
    
  )
}

export default Landing