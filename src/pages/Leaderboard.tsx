import { VStack, Heading, SegmentGroup, Button, Box, DataList, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom"
import MedalSetup from "@/components/MedalSetup";
import { useRetrieveScoresQuery } from "@/store/api";
import type { Score, Game, TimeFrame } from "@/types";
const Leaderboard = () => {
    const navigate = useNavigate();
    const { data: rankingData, isLoading } = useRetrieveScoresQuery();
    const [selectedGame, setSelectedGame] = useState<Game>("CluesBySam");
    const [selectedTime, setSelectedTime] = useState<TimeFrame>("daily");


    return (
        <VStack bgColor="blue.900" minH="100vh" color="white" gap="4">
            <Box w="full" pt={6}>
                <Button bgColor="blue.900" color="white" fontWeight="semibold" onClick={() => navigate("/")}><LuArrowLeft /> Back</Button>
            </Box>
            <Box px={12} w="full">
                <VStack mb={12}>
                    <Heading fontSize="4xl">Leaderboards</Heading>
                    <VStack mt={10} mb={6}>
                        <SegmentGroup.Root
                            value={selectedGame}
                            onValueChange={(e) => setSelectedGame(e.value as Game)}
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
                            value={selectedTime}
                            onValueChange={(e) => setSelectedTime(e.value as TimeFrame)}
                            defaultValue="daily"
                            size="xs"
                            css={{
                                "--segment-indicator-bg": "colors.orange.500",
                                "--segment-indicator-shadow": "shadows.md",
                            }}
                        >
                            <SegmentGroup.Indicator />
                            <SegmentGroup.Items items={[
                                { label: "Day", value: "daily" },
                                { label: "Week", value: "weekly" },
                                { label: "All Time", value: "allTime" },
                            ]} />
                        </SegmentGroup.Root>
                    </VStack>
                    <MedalSetup />
                    <Heading fontSize="2xl">Scores</Heading>
                    {isLoading ?
                        <Text color="gray.300">Loading...</Text>
                        :
                        <DataList.Root orientation="horizontal" w="full">
                            { // @ts-ignore: selectedGame and selectedTime require some typing hijinx
                            rankingData && rankingData[selectedGame][selectedTime].map((playerData: Score) => (
                                <DataList.Item key={playerData.player} borderBottom="1px solid" borderColor="gray.300">
                                    <DataList.ItemLabel color="gray.300" fontWeight="semibold">{playerData.player}</DataList.ItemLabel>
                                    <DataList.ItemValue color="gray.300"><Box w="full" textAlign="right">{playerData.score}</Box></DataList.ItemValue>
                                </DataList.Item>
                            ))}
                        </DataList.Root>
                    }
                </VStack>
            </Box>
        </VStack>
    )
}

export default Leaderboard