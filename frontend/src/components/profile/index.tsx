import { type ProfileContent, type History } from '@/definitions/Master';
import { Card, HStack, SimpleGrid, VStack, GridItem } from '@chakra-ui/react';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { DataItem } from '../myui/DataItem';
import { LinkItem } from '../myui/LinkItem';
import { MAIL_ADDRESS, TEXT, URL } from '@/constants/Constants';
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
} from '../ui/timeline';

export default function Profile({
    profile,
    histories,
}: {
    profile: ProfileContent[];
    histories: History[];
}) {
    return (
        <Card.Root variant="outline">
            <Card.Body
                px={{ base: '2', lg: '6' }}
                pb={{ base: '2', lg: '6' }}
                pt="0"
            >
                <HStack my="6" gap="3" justify="center">
                    <Avatar
                        src="myicon.png"
                        name="山本隼輔のアイコン"
                        width="48"
                        height="48"
                        boxShadow="0px 0px 30px 5px rgba(0, 0, 0, 0.3)"
                    />
                </HStack>
                <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6">
                    <GridItem colSpan={{ base: 1, lg: 1 }}>
                        <Card.Root>
                            <Card.Body>
                                <HStack mb="6" gap="3" justify="center">
                                    <Card.Title fontSize="xl">
                                        プロフィール
                                    </Card.Title>
                                </HStack>
                                <HStack
                                    mb="6"
                                    gap="3"
                                    justify="center"
                                    align="flex-start"
                                >
                                    <VStack align="start" gap="4">
                                        {profile.map((profileContent) => {
                                            if (profileContent.type === TEXT) {
                                                return (
                                                    <DataItem
                                                        key={profileContent.id}
                                                        label={
                                                            profileContent.title
                                                        }
                                                        value={
                                                            profileContent.content
                                                        }
                                                    />
                                                );
                                            } else if (
                                                profileContent.type === URL
                                            ) {
                                                return (
                                                    <LinkItem
                                                        key={profileContent.id}
                                                        label={
                                                            profileContent.title
                                                        }
                                                        links={[
                                                            {
                                                                url: profileContent.content,
                                                                display_name:
                                                                    profileContent.content,
                                                            },
                                                        ]}
                                                    />
                                                );
                                            } else {
                                                return;
                                            }
                                        })}
                                    </VStack>
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, lg: 2 }}>
                        <Card.Root>
                            <Card.Body>
                                <HStack mb="6" gap="3" justify="center">
                                    <Card.Title fontSize="xl">経歴</Card.Title>
                                </HStack>
                                <TimelineRoot>
                                    {histories.map((history) => (
                                        <TimelineItem key={history.id}>
                                            <TimelineConnector>
                                                <Avatar
                                                    src="myicon.png"
                                                    name="山本隼輔のアイコン"
                                                    width="8"
                                                    height="8"
                                                    variant="outline"
                                                    border="1px solid"
                                                />
                                            </TimelineConnector>
                                            <TimelineContent>
                                                <TimelineTitle fontSize="xs">
                                                    {history.start_date}
                                                </TimelineTitle>
                                                <DataItem
                                                    label={history.title}
                                                    value={history.summary}
                                                />
                                                {history.url &&
                                                    history.display_name && (
                                                        <LinkItem
                                                            label="詳細"
                                                            links={[
                                                                {
                                                                    display_name:
                                                                        history.display_name,
                                                                    url: history.url,
                                                                },
                                                            ]}
                                                        />
                                                    )}
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </TimelineRoot>
                            </Card.Body>
                        </Card.Root>
                    </GridItem>
                </SimpleGrid>
            </Card.Body>
            <Card.Footer justifyContent="flex-end" p={{ base: '2', lg: '6' }}>
                <Button>
                    <a href={`mailto:${MAIL_ADDRESS}`}>Contact me</a>
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}
