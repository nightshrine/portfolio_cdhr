import { MAIL_ADDRESS, TEXT, URL } from '@/constants/Constants';
import { type History, type ProfileContent } from '@/definitions/Master';
import {
    Badge,
    Card,
    Grid,
    GridItem,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { DataItem } from '../myui/DataItem';
import { LinkItem } from '../myui/LinkItem';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import {
    TimelineContent,
    TimelineIndicator,
    TimelineItem,
    TimelineRoot,
} from '../ui/timeline';

// URLから最初の/の右の部分だけを取得（例：https://github.com/nightshrine → nightshrine）
const extractUrlDisplay = (url: string): string => {
    // プロトコル部分を削除（https://github.com/nightshrine → github.com/nightshrine）
    const withoutProtocol = url.replace(/^https?:\/\//, '');
    // 最初の/の後の部分を取得（github.com/nightshrine → nightshrine）
    const parts = withoutProtocol.split('/');
    // 2番目の要素を返す（最初のスラッシュの後）、なければ最後の要素を返す
    return parts[1] || parts[0] || url;
};

export default function Profile({
    profile,
    histories,
}: {
    profile: ProfileContent[];
    histories: History[];
}) {
    const [showAllHistories, setShowAllHistories] = useState(false);

    // 最初二つと最後二つの履歴を表示、または全て表示
    const displayedHistories = showAllHistories
        ? histories
        : histories.length > 4
        ? [
              histories[0],
              histories[1],
              histories[histories.length - 2],
              histories[histories.length - 1],
          ]
        : histories;

    const hasHiddenHistories = histories.length > 4 && !showAllHistories;
    return (
        <Grid
            gridTemplateColumns="1fr"
            gap="6"
            pb="2"
            alignItems="start"
            css={{
                '@media (min-width: 1300px)': {
                    gridTemplateColumns: 'repeat(4, 1fr)',
                },
            }}
        >
            <GridItem
                gridColumn="span 1"
                css={{
                    '@media (min-width: 1300px)': {
                        gridColumn: 'span 1',
                    },
                }}
            >
                <Card.Root
                    className="panel-card-static fade-up"
                    bg="whiteAlpha.100"
                    _light={{
                        bg: 'white',
                        borderColor: 'gray.200',
                        border: '1px solid',
                    }}
                >
                    <Card.Body>
                        <HStack mb="6" gap="3" justify="center">
                            <Avatar
                                src="myicon.png"
                                name="山本隼輔のアイコン"
                                width="48"
                                height="48"
                                boxShadow="0px 0px 30px 5px rgba(255, 255, 255, 0.08)"
                            />
                        </HStack>
                        <HStack mb="6" gap="3" justify="center">
                            <Card.Title
                                fontSize="xl"
                                color="whiteAlpha.900"
                                _dark={{ color: 'whiteAlpha.900' }}
                                _light={{ color: 'gray.900' }}
                            >
                                プロフィール
                            </Card.Title>
                        </HStack>
                        <HStack
                            mb="6"
                            gap="3"
                            justify="center"
                            align="flex-start"
                        >
                            <Grid
                                gridTemplateColumns="1fr"
                                gap="4"
                                width="100%"
                            >
                                {profile.map((profileContent) => {
                                    if (profileContent.type === TEXT) {
                                        return (
                                            <DataItem
                                                key={profileContent.id}
                                                label={profileContent.title}
                                                value={profileContent.content}
                                            />
                                        );
                                    } else if (profileContent.type === URL) {
                                        return (
                                            <LinkItem
                                                key={profileContent.id}
                                                label={profileContent.title}
                                                links={[
                                                    {
                                                        url: profileContent.content,
                                                        display_name:
                                                            extractUrlDisplay(
                                                                profileContent.content
                                                            ),
                                                    },
                                                ]}
                                            />
                                        );
                                    } else {
                                        return;
                                    }
                                })}
                            </Grid>
                        </HStack>
                        <VStack gap="4" pt="4">
                            <Button width="100%">
                                <a href={`mailto:${MAIL_ADDRESS}`}>
                                    Contact me
                                </a>
                            </Button>
                        </VStack>
                    </Card.Body>
                </Card.Root>
            </GridItem>
            <GridItem
                gridColumn="span 1"
                css={{
                    '@media (min-width: 1300px)': {
                        gridColumn: 'span 3',
                    },
                }}
            >
                <Card.Root
                    className="panel-card-static fade-up"
                    bg="whiteAlpha.100"
                    _light={{
                        bg: 'white',
                        borderColor: 'gray.200',
                        border: '1px solid',
                    }}
                >
                    <Card.Body>
                        <HStack mb="6" gap="3" justify="center">
                            <Card.Title
                                fontSize="xl"
                                color="whiteAlpha.900"
                                _dark={{ color: 'whiteAlpha.900' }}
                                _light={{ color: 'gray.900' }}
                            >
                                経歴
                            </Card.Title>
                        </HStack>
                        <TimelineRoot>
                            {displayedHistories.map((history, index) => {
                                const isLast =
                                    index === displayedHistories.length - 1;
                                return (
                                    <div
                                        key={history.id}
                                        style={{ position: 'relative' }}
                                    >
                                        <TimelineItem isLast={isLast}>
                                            <TimelineIndicator>
                                                <Avatar
                                                    src="myicon.png"
                                                    name="山本隼輔のアイコン"
                                                    width="8"
                                                    height="8"
                                                    variant="outline"
                                                    border="1px solid"
                                                />
                                            </TimelineIndicator>
                                            <TimelineContent width="100%">
                                                <VStack
                                                    align="start"
                                                    width="100%"
                                                    bg="whiteAlpha.100"
                                                    p="4"
                                                    borderRadius="md"
                                                    transition="all 0.2s"
                                                    gap="2"
                                                    _dark={{
                                                        bg: 'whiteAlpha.100',
                                                        borderTop: '1px solid',
                                                        borderTopColor:
                                                            'whiteAlpha.400',
                                                        borderRight:
                                                            '1px solid',
                                                        borderRightColor:
                                                            'whiteAlpha.400',
                                                        borderBottom:
                                                            '1px solid',
                                                        borderBottomColor:
                                                            'whiteAlpha.400',
                                                        borderLeft: '3px solid',
                                                        borderLeftColor:
                                                            'blue.400',
                                                    }}
                                                    _light={{
                                                        bg: 'white',
                                                        borderTop: '1px solid',
                                                        borderTopColor:
                                                            'gray.300',
                                                        borderRight:
                                                            '1px solid',
                                                        borderRightColor:
                                                            'gray.300',
                                                        borderBottom:
                                                            '1px solid',
                                                        borderBottomColor:
                                                            'gray.300',
                                                        borderLeft: '3px solid',
                                                        borderLeftColor:
                                                            'blue.500',
                                                    }}
                                                >
                                                    <Badge
                                                        colorScheme="blue"
                                                        variant="subtle"
                                                        fontSize="xs"
                                                    >
                                                        {history.start_date}
                                                    </Badge>
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
                                                </VStack>
                                            </TimelineContent>
                                        </TimelineItem>
                                        {hasHiddenHistories && index === 1 && (
                                            <div
                                                className="timeline-separator"
                                                style={{
                                                    position: 'relative',
                                                    paddingLeft: '48px',
                                                }}
                                            >
                                                <svg
                                                    style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        top: '30px',
                                                        width: '40px',
                                                        height: '20px',
                                                    }}
                                                    viewBox="0 0 40 20"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        d="M 0 10 Q 10 5, 20 10 T 40 10"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        opacity="0.6"
                                                    />
                                                </svg>
                                                <Text
                                                    fontSize="sm"
                                                    color="whiteAlpha.700"
                                                    _dark={{
                                                        color: 'whiteAlpha.700',
                                                    }}
                                                    _light={{
                                                        color: 'gray.600',
                                                    }}
                                                    letterSpacing="2px"
                                                    my="6"
                                                >
                                                    ・・・ いろいろありまして
                                                    ・・・
                                                </Text>
                                                <Button
                                                    borderRadius="full"
                                                    width="fit-content"
                                                    px="8"
                                                    onClick={() =>
                                                        setShowAllHistories(
                                                            true
                                                        )
                                                    }
                                                    mb="4"
                                                    mx="auto"
                                                    display="block"
                                                >
                                                    全ての経歴を表示
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </TimelineRoot>
                        {showAllHistories && histories.length > 2 && (
                            <div className="timeline-separator">
                                <Button
                                    borderRadius="full"
                                    width="fit-content"
                                    px="8"
                                    onClick={() => setShowAllHistories(false)}
                                    mb="4"
                                    mx="auto"
                                    display="block"
                                >
                                    折りたたむ
                                </Button>
                            </div>
                        )}
                    </Card.Body>
                </Card.Root>
            </GridItem>
        </Grid>
    );
}
