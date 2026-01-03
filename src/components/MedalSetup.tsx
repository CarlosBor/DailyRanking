import { Grid, Box, Flex, VStack, Heading, Text } from "@chakra-ui/react"

const MedalSetup = () => {
    return (
        <Grid templateColumns="1fr 2fr 1fr" w="full" h="250px">
            <VStack w="full" gap={1} justifyContent="flex-end">
                <Flex 
                    h="90px" 
                    w="90px" 
                    borderRadius="90px" 
                    borderWidth="3px" 
                    borderColor="#9a9a9a" 
                    borderStyle="solid" 
                    bgColor="#cdcdcd" 
                    align="center" 
                    justify="center">
                    <Text textShadow="0px 4px 4px rgba(0, 0, 0, 0.5)">Player2</Text>
                </Flex>
                <Heading fontSize="3xl">2nd</Heading>
            </VStack>
            <VStack w="full" gap={1}>
                <Flex 
                    h="134px" 
                    w="134px" 
                    borderRadius="90px" 
                    borderWidth="3px" 
                    borderColor="#ffb625 " 
                    borderStyle="solid" 
                    bgColor="#ffce00" 
                    align="center" 
                    justify="center">
                    <Text textShadow="0px 4px 4px rgba(0, 0, 0, 0.5)">Player1</Text>
                </Flex>
                <Heading fontSize="3xl">1st</Heading>
            </VStack>
            <VStack w="full" gap={1} justifyContent="flex-end">
                <Flex 
                    h="90px" 
                    w="90px" 
                    borderRadius="90px" 
                    borderWidth="3px" 
                    borderColor="#a25a28 " 
                    borderStyle="solid" 
                    bgColor="#ce802e" 
                    align="center" 
                    justify="center">
                    <Text textShadow="0px 4px 4px rgba(0, 0, 0, 0.5)">Player3</Text>
                </Flex>
                <Heading fontSize="3xl">3nd</Heading>
            </VStack>
        </Grid>
    )
}

export default MedalSetup