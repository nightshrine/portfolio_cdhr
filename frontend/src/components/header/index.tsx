import { Box, Button, Flex } from '@chakra-ui/react';
import { ColorModeButton } from '../ui/color-mode';
import { COMPANY, PROFILE, PROJECT } from '@/constants/Contents';

export default function Header({
    changeContent,
}: {
    changeContent: (content: string) => void;
}) {
    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            left="0"
            width="100%"
            bg="teal.500"
            zIndex="1000"
            boxShadow="md"
        >
            <Flex align="center" justify="space-between" px="3" py="3">
                <Button
                    fontSize="xl"
                    colorScheme="whiteAlpha"
                    variant="ghost"
                    onClick={() => changeContent(PROFILE)}
                >
                    Profile
                </Button>

                <Flex gap="2">
                    <Button
                        colorScheme="whiteAlpha"
                        variant="outline"
                        onClick={() => changeContent(PROJECT)}
                    >
                        Project
                    </Button>
                    <Button
                        colorScheme="whiteAlpha"
                        variant="outline"
                        onClick={() => changeContent(COMPANY)}
                    >
                        Company
                    </Button>
                    <ColorModeButton />
                </Flex>
            </Flex>
        </Box>
    );
}
