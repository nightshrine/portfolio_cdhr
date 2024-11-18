import { type Company } from '@/definitions/Master';
import { Card, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { DataItem } from '../myui/DataItem';
import { LinkItem } from '../myui/LinkItem';

export default function Company({ companies }: { companies: Company[] }) {
    return (
        <SimpleGrid columns={1} gap="6">
            {companies.map((company) => (
                <Card.Root>
                    <Card.Body>
                        <HStack mb="6" gap="3" justify="center">
                            <Card.Title>{company.name}</Card.Title>
                        </HStack>
                        <Card.Description>
                            <HStack
                                mb="6"
                                gap="3"
                                justify="center"
                                align="flex-start"
                            >
                                <VStack align="start" gap="4">
                                    <LinkItem
                                        label="会社URL"
                                        value={company.url}
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
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            ))}
        </SimpleGrid>
    );
    // return (
    //     <div>
    //         {companies.map((company) => (
    //             <Card.Root>
    //                 <Card.Body>
    //                     <h2>会社名: {company.name}</h2>
    //                     <Link
    //                         variant="underline"
    //                         href={company.url}
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                     >
    //                         {company.name} <LuExternalLink />
    //                     </Link>
    //                     <p>期間: {company.period}</p>
    //                     <p>概要: {company.summary}</p>
    //                     <p>開発経験: {company.developments}</p>
    //                     <p>使用技術: {company.technologies}</p>
    //                 </Card.Body>
    //             </Card.Root>
    //         ))}
    //     </div>
    // );
}
