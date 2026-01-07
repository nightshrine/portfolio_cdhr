import { type Company } from '@/definitions/Master';
import {
    Button,
    Card,
    GridItem,
    HStack,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react';
import { DataItem } from '../myui/DataItem';
import { LinkItem } from '../myui/LinkItem';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';

export default function Company({ companies }: { companies: Company[] }) {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
            {companies.map((company) => (
                <GridItem colSpan={{ base: 1, lg: 1 }} key={company.id}>
                    <Card.Root
                        className="panel-card fade-up company-card"
                        bg="whiteAlpha.50"
                        _light={{
                            bg: 'white',
                        }}
                        _hover={{
                            shadow: 'md',
                        }}
                        transition="all 0.2s"
                    >
                        <Card.Body>
                            <HStack mb="6" gap="3" justify="start">
                                <Card.Title
                                    fontSize="lg"
                                    color="whiteAlpha.900"
                                    _dark={{ color: 'whiteAlpha.900' }}
                                    _light={{ color: 'gray.900' }}
                                >
                                    {company.name}
                                </Card.Title>
                            </HStack>
                            <HStack
                                mb="6"
                                gap="3"
                                justify="start"
                                align="flex-start"
                            >
                                <VStack align="start" gap="4">
                                    <DataItem
                                        label="参加期間"
                                        value={company.period}
                                    />
                                    <DataItem
                                        label="開発経験"
                                        value={company.developments}
                                    />
                                </VStack>
                            </HStack>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                            <DialogRoot scrollBehavior="inside">
                                <DialogTrigger asChild>
                                    <Button
                                        bg="purple.500"
                                        color="white"
                                        _hover={{
                                            bg: 'purple.600',
                                            transform: 'translateY(-2px)',
                                            shadow: 'lg',
                                        }}
                                        _active={{
                                            bg: 'purple.700',
                                            transform: 'translateY(0)',
                                        }}
                                        _light={{
                                            bg: 'purple.500',
                                            color: 'white',
                                            _hover: { bg: 'purple.600' },
                                            _active: { bg: 'purple.700' },
                                        }}
                                        fontWeight="600"
                                        fontSize="sm"
                                        px="6"
                                        py="2"
                                        transition="all 0.2s"
                                    >
                                        Detail
                                    </Button>
                                </DialogTrigger>
                                <DialogContent
                                    height="60vh"
                                    maxW="90vw"
                                    bg="rgba(10,12,20,0.98)"
                                    _dark={{ bg: 'rgba(10,12,20,0.98)' }}
                                    _light={{
                                        bg: '#ffffff',
                                        boxShadow:
                                            '0 24px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.1)',
                                    }}
                                    boxShadow="0 24px 60px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)"
                                    borderTop="4px solid"
                                    borderTopColor="purple.500"
                                    borderRadius="24px"
                                    css={{
                                        '&::-webkit-scrollbar': {
                                            display: 'none',
                                        },
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none',
                                    }}
                                >
                                    <DialogHeader
                                        borderBottom="1px solid"
                                        borderBottomColor="whiteAlpha.200"
                                        _light={{
                                            borderBottomColor:
                                                'rgba(0, 0, 0, 0.1)',
                                        }}
                                        pb="4"
                                    >
                                        <DialogTitle
                                            fontSize="2xl"
                                            fontWeight="700"
                                            color="whiteAlpha.900"
                                            _light={{
                                                color: 'gray.900',
                                            }}
                                        >
                                            {company.name}
                                        </DialogTitle>
                                    </DialogHeader>
                                    <DialogBody
                                        pt="6"
                                        color="whiteAlpha.800"
                                        _light={{
                                            color: 'gray.800',
                                        }}
                                        css={{
                                            '&::-webkit-scrollbar': {
                                                display: 'none',
                                            },
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none',
                                        }}
                                    >
                                        <VStack align="start" gap="4">
                                            <LinkItem
                                                label="会社URL"
                                                links={[
                                                    {
                                                        url: company.url,
                                                        display_name:
                                                            company.url,
                                                    },
                                                ]}
                                            />
                                            <DataItem
                                                label="参加期間"
                                                value={company.period}
                                            />
                                            <DataItem
                                                label="概要"
                                                value={company.summary}
                                            />
                                            <DataItem
                                                label="開発経験"
                                                value={company.developments}
                                            />
                                            <DataItem
                                                label="使用技術"
                                                value={company.technologies}
                                            />
                                        </VStack>
                                    </DialogBody>
                                    <DialogCloseTrigger />
                                </DialogContent>
                            </DialogRoot>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}
