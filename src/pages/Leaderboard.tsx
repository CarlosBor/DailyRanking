import { VStack, Heading, SegmentGroup, Button, Box, DataList } from "@chakra-ui/react"
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom"
import MedalSetup from "@/components/MedalSetup";
const Leaderboard = () => {
const navigate = useNavigate();
    const rankingData = [
        { name: "CluesBySam", score: 1120 },
        { name: "WordleWizard", score: 1085 },
        { name: "AkariAce", score: 1010 },
        { name: "GridSolver", score: 1175 },
        { name: "PuzzleFox", score: 1045 },
    ];

    return (
        <VStack bgColor="blue.900" minH="100vh" color="white" gap="4">
            <Box w="full" pt={6}>
                <Button bgColor="blue.900" color="white" fontWeight="semibold" onClick={()=> navigate("/")}><LuArrowLeft /> Back</Button>
            </Box>
            <Box px={12} w="full">
                <VStack mb={12}>
                    <Heading fontSize="4xl">Leaderboards</Heading>
                    <VStack mt={10} mb={6}>
                    <SegmentGroup.Root
                        defaultValue="CluesBySam"
                        size="xs"
                        css={{
                            "--segment-indicator-bg": "colors.orange.500",
                            "--segment-indicator-shadow": "shadows.md",
                        }}
                    >
                        <SegmentGroup.Indicator />
                        <SegmentGroup.Items items={["CluesBySam", "Wordle", "Akari"]} />
                    </SegmentGroup.Root>

                    <SegmentGroup.Root
                        defaultValue="Day"
                        size="xs"
                        css={{
                            "--segment-indicator-bg": "colors.orange.500",
                            "--segment-indicator-shadow": "shadows.md",
                        }}
                    >
                        <SegmentGroup.Indicator />
                        <SegmentGroup.Items items={["Day", "Week", "All-Time"]} />
                    </SegmentGroup.Root>
                </VStack>
                    <MedalSetup />
                    <Heading fontSize="2xl">Scores</Heading>
                    <DataList.Root orientation="horizontal" w="full">
                        {rankingData.map((playerData) => (
                            <DataList.Item key={playerData.name} borderBottom="1px solid" borderColor="gray.300">
                                <DataList.ItemLabel color="gray.300" fontWeight="semibold">{playerData.name}</DataList.ItemLabel>
                                <DataList.ItemValue color="gray.300"><Box w="full" textAlign="right">{playerData.score}</Box></DataList.ItemValue>
                            </DataList.Item>
                        ))}
                    </DataList.Root>
                </VStack>
            </Box>
        </VStack>
    )
}

export default Leaderboard