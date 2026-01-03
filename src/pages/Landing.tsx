import { Heading, Button, VStack, Textarea } from "@chakra-ui/react"
import { LuChartNoAxesColumn, LuArrowRight } from "react-icons/lu";
import { useSubmitScoreMutation } from "@/store/api";
import { useState } from "react";
const Landing = () => {
    const [pastedScore, setPastedScore] = useState("");
    const [submitScore] = useSubmitScoreMutation();

    return (
        <VStack h="100vh" w="100vw" px={10} justifyContent="center" alignItems="center" bgColor="blue.900" >
            <Heading fontSize="4xl">Leaderboards</Heading>
            <Textarea my={10} minH="40" colorPalette="orange" value={pastedScore} onChange={(e) => setPastedScore(e.target.value)} placeholder="Paste your score here!" />
            <Button bgColor="orange.solid" color="white" fontWeight="semibold" onClick={() => submitScore(pastedScore)}><LuChartNoAxesColumn />Show me the leaderboards <LuArrowRight /></Button>
        </VStack>
    )
}

export default Landing;