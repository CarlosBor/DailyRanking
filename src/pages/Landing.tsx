import { Heading, Button, VStack, Textarea } from "@chakra-ui/react"
import { LuChartNoAxesColumn, LuArrowRight } from "react-icons/lu";
const Landing = () =>{

return(
    <VStack h="100vh" w="100vw" px={10} justifyContent="center" alignItems="center" bgColor="blue.900" >
        <Heading fontSize="4xl">Leaderboards</Heading>
        <Textarea my={10} minH="40" colorPalette="orange" placeholder="Paste your score here!" />
        <Button bgColor="orange.solid" color="white" fontWeight="semibold"><LuChartNoAxesColumn />Show me the leaderboards <LuArrowRight /></Button>
    </VStack>
)
}

export default Landing;