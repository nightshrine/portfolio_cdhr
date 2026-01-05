import { type Project } from '@/definitions/Master';
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

export default function Project({ projects }: { projects: Project[] }) {
    /** LinkItemに渡せる形に変換*/
    const projects_refrence_convert = projects.map((project) => {
        const references = project.references.map((reference) => {
            return {
                url: reference.url,
                display_name: reference.display_name,
            };
        });
        return {
            id: project.id,
            name: project.name,
            references: references,
            summary: project.summary,
            technologies: project.technologies,
            result: project.result,
        };
    });

    return (
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6" pb="2">
            {projects_refrence_convert.map((project) => (
                <GridItem colSpan={{ base: 1, lg: 1 }} key={project.id}>
                    <Card.Root
                        className="panel-card fade-up project-card"
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
                            <HStack mb="6" gap="3" justify="center">
                                <Card.Title
                                    fontSize="lg"
                                    color="whiteAlpha.900"
                                    _dark={{ color: 'whiteAlpha.900' }}
                                    _light={{ color: 'gray.900' }}
                                >
                                    {project.name}
                                </Card.Title>
                            </HStack>
                            <HStack
                                mb="6"
                                gap="3"
                                justify="center"
                                align="flex-start"
                            >
                                <VStack align="start" gap="4">
                                    <DataItem
                                        label="概要"
                                        value={project.summary}
                                    />
                                    <DataItem
                                        label="技術"
                                        value={project.technologies}
                                    />
                                </VStack>
                            </HStack>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                            <DialogRoot scrollBehavior="inside">
                                <DialogTrigger asChild>
                                    <Button
                                        bg="green.400"
                                        color="white"
                                        _hover={{
                                            bg: 'green.500',
                                            transform: 'translateY(-2px)',
                                            shadow: 'lg',
                                        }}
                                        _active={{
                                            bg: 'green.600',
                                            transform: 'translateY(0)',
                                        }}
                                        _light={{
                                            bg: 'green.400',
                                            color: 'white',
                                            _hover: {
                                                bg: 'green.500',
                                            },
                                            _active: {
                                                bg: 'green.600',
                                            },
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
                                    bg="whiteAlpha.50"
                                    _light={{
                                        bg: 'white',
                                        boxShadow:
                                            '0 24px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.1)',
                                    }}
                                    boxShadow="0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                                    backdropFilter="blur(12px)"
                                    borderTop="4px solid"
                                    borderTopColor="green.400"
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
                                            {project.name}
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
                                        <HStack
                                            mb="6"
                                            gap="3"
                                            justify="center"
                                            align="flex-start"
                                        >
                                            <VStack align="start" gap="4">
                                                {project.references.length >
                                                    0 && (
                                                    <LinkItem
                                                        label="参考URL"
                                                        links={
                                                            project.references
                                                        }
                                                    />
                                                )}
                                                <DataItem
                                                    label="概要"
                                                    value={project.summary}
                                                />
                                                <DataItem
                                                    label="技術"
                                                    value={project.technologies}
                                                />
                                                <DataItem
                                                    label="成果"
                                                    value={project.result}
                                                />
                                            </VStack>
                                        </HStack>
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
