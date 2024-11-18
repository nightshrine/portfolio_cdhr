import { type Project } from '@/definitions/Master';
import {
    Box,
    Card,
    HStack,
    SimpleGrid,
    VStack,
    Text,
    Link,
    List,
} from '@chakra-ui/react';
import { DataItem } from '../myui/DataItem';

export default function Project({ projects }: { projects: Project[] }) {
    return (
        <SimpleGrid columns={3} gap="6">
            {projects.map((project) => (
                <Card.Root>
                    <Card.Body>
                        <HStack mb="6" gap="3" justify="center">
                            <Card.Title>{project.name}</Card.Title>
                        </HStack>
                        <Card.Description>
                            <HStack
                                mb="6"
                                gap="3"
                                justify="center"
                                align="flex-start"
                            >
                                <VStack align="start" gap="4">
                                    <Box>
                                        <Text
                                            fontSize="lg"
                                            fontWeight="bold"
                                            color="gray.700"
                                        >
                                            参考URL
                                        </Text>
                                    </Box>
                                    <List.Root>
                                        {project.references.map((reference) => (
                                            <List.Item>
                                                <Link
                                                    href={reference.url}
                                                    color="blue.500"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {reference.display_name}
                                                </Link>
                                            </List.Item>
                                        ))}
                                    </List.Root>
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
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            ))}
        </SimpleGrid>
    );
}
