import { type Profile } from '@/definitions/Master';
import { Card, HStack, VStack } from '@chakra-ui/react';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { DataItem } from '../myui/DataItem';
import { LinkItem } from '../myui/LinkItem';

export default function Profile({ profile }: { profile: Profile }) {
    return (
        <Card.Root variant="outline" p="6">
            <Card.Body>
                <HStack mb="6" gap="3" justify="center">
                    <Avatar
                        src="myicon.png"
                        name="山本隼輔のアイコン"
                        width="48"
                        height="48"
                        boxShadow="0px 0px 30px 10px rgba(0, 0, 0, 0.3)"
                    />
                </HStack>
                <Card.Description>
                    <HStack mb="6" gap="3" justify="center" align="flex-start">
                        <VStack align="start" gap="4">
                            <DataItem label="名前" value={profile.name} />
                            <DataItem label="大学" value={profile.university} />
                            <DataItem label="経歴" value={profile.career} />
                            <DataItem label="趣味" value={profile.hobbies} />
                            <LinkItem label="Qiita" value={profile.qiita_url} />
                            <LinkItem
                                label="GitHub"
                                value={profile.github_url}
                            />
                            <DataItem
                                label="将来の目標"
                                value={profile.future_goal}
                            />
                        </VStack>
                    </HStack>
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button>Contact me</Button>
            </Card.Footer>
        </Card.Root>
    );
}
