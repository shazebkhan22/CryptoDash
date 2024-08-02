 import {HStack, Stack, Icon , Text, Heading ,Box} from "@chakra-ui/react"
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
 import { RxDashboard } from "react-icons/rx";
 import {Link} from "react-router-dom"

 const Sidenav = () => {

    const navLinks = [
        {
            icon: RxDashboard,
            text:"Dashboard",
            link:"/"

        },
        {
            icon: BsArrowDownUp,
            text:"Transaction",
            link:"/transaction"

        },
    ];

  return(
    
   <Stack justify="space-between" boxShadow={{
    base:"none",
    lg:"lg"
   }} 
   width={{
    base:"full",
    lg:"16rem"
   }}
    h="100vh" 
    bg="white"
    >
    <Box >
    <Heading textAlign="center" fontSize="20px" as="h1" pt="14">@CRYPTODASH</Heading>
    <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3f3f7",
                  color: "#171717"
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
    <Box mt="6" mx="3">
   <Link to="/support">
   <HStack borderRadius="10px" py="3" px="4"_hover={{
               bg:"#F3f3f7",
               color:"#171717" 
            }}
            color="#797E82" 
          >
                <Icon as=
                {BiSupport}/>
                <Text fontSize="14px" fontWeight="medium">Support</Text>
            </HStack>    
            </Link>      
    </Box>
   
    </Box>
  </Stack>
  )
}

export default Sidenav
