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
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { LinkItem } from '../myui/LinkItem';

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
                    <Card.Root>
                        <Card.Body>
                            <HStack mb="6" gap="3" justify="center">
                                <Card.Title>{project.name}</Card.Title>
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
                            <DialogRoot>
                                <DialogTrigger asChild>
                                    <Button>Detail</Button>
                                </DialogTrigger>
                                <DialogContent height="80vh" maxW="80vw">
                                    <DialogHeader>
                                        <DialogTitle>
                                            {project.name}
                                        </DialogTitle>
                                    </DialogHeader>
                                    <DialogBody>
                                        <HStack
                                            mb="6"
                                            gap="3"
                                            justify="center"
                                            align="flex-start"
                                        >
                                            <VStack align="start" gap="4">
                                                <LinkItem
                                                    label="参考URL"
                                                    links={project.references}
                                                />
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
