import { type Company } from '@/definitions/Master';
import { Card, GridItem, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { DataItem } from '../myui/DataItem';
import { LinkItem } from '../myui/LinkItem';

export default function Company({ companies }: { companies: Company[] }) {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="6">
            {companies.map((company) => (
                <GridItem colSpan={{ base: 1, lg: 1 }} key={company.id}>
                    <Card.Root>
                        <Card.Body>
                            <HStack mb="6" gap="3" justify="center">
                                <Card.Title>{company.name}</Card.Title>
                            </HStack>
                            <HStack
                                mb="6"
                                gap="3"
                                justify="center"
                                align="flex-start"
                            >
                                <VStack align="start" gap="4">
                                    <LinkItem
                                        label="会社URL"
                                        links={[
                                            {
                                                url: company.url,
                                                display_name: company.url,
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
                            </HStack>
                        </Card.Body>
                    </Card.Root>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}
