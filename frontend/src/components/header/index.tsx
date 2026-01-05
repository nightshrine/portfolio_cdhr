import { COMPANY, PROFILE, PROJECT } from '@/constants/Constants';
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { ColorModeButton } from '../ui/color-mode';

export default function Header({
    changeContent,
    currentContent,
}: {
    changeContent: (content: string) => void;
    currentContent: string;
}) {
    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            left="0"
            width="100%"
            zIndex="1000"
            className="nav-shell"
        >
            <Flex
                align="center"
                justify="space-between"
                px={{ base: '3', md: '5' }}
                py="4"
            >
                <HStack gap="3" cursor="pointer">
                    <Box
                        width="12px"
                        height="12px"
                        borderRadius="full"
                        bg="whiteAlpha.900"
                        boxShadow="0 0 0 6px rgba(255,255,255,0.08)"
                        className="logo-dot"
                    />
                    <Text
                        className="logo-mark"
                        fontSize="lg"
                        onClick={() => changeContent(PROFILE)}
                        _hover={{ opacity: 0.7 }}
                    >
                        Portfolio
                    </Text>
                </HStack>

                <HStack gap={{ base: '1', md: '2' }}>
                    <Button
                        colorScheme="whiteAlpha"
                        variant="outline"
                        size={{ base: 'sm', md: 'md' }}
                        borderColor={
                            currentContent === PROJECT
                                ? 'whiteAlpha.900'
                                : 'whiteAlpha.400'
                        }
                        bg={
                            currentContent === PROJECT
                                ? 'whiteAlpha.200'
                                : 'transparent'
                        }
                        _hover={{
                            bg: 'whiteAlpha.100',
                            borderColor: 'whiteAlpha.600',
                        }}
                        _light={{
                            borderColor:
                                currentContent === PROJECT
                                    ? 'gray.900'
                                    : 'gray.400',
                            bg:
                                currentContent === PROJECT
                                    ? 'gray.100'
                                    : 'transparent',
                            color: 'gray.900',
                            _hover: {
                                borderColor: 'gray.700',
                                bg: 'gray.50',
                            },
                        }}
                        onClick={() => changeContent(PROJECT)}
                    >
                        Project
                    </Button>
                    <Button
                        colorScheme="whiteAlpha"
                        variant="outline"
                        size={{ base: 'sm', md: 'md' }}
                        borderColor={
                            currentContent === COMPANY
                                ? 'whiteAlpha.900'
                                : 'whiteAlpha.400'
                        }
                        bg={
                            currentContent === COMPANY
                                ? 'whiteAlpha.200'
                                : 'transparent'
                        }
                        _hover={{
                            bg: 'whiteAlpha.100',
                            borderColor: 'whiteAlpha.600',
                        }}
                        _light={{
                            borderColor:
                                currentContent === COMPANY
                                    ? 'gray.900'
                                    : 'gray.400',
                            bg:
                                currentContent === COMPANY
                                    ? 'gray.100'
                                    : 'transparent',
                            color: 'gray.900',
                            _hover: {
                                borderColor: 'gray.700',
                                bg: 'gray.50',
                            },
                        }}
                        onClick={() => changeContent(COMPANY)}
                    >
                        Company
                    </Button>
                    <ColorModeButton />
                </HStack>
            </Flex>
        </Box>
    );
}
