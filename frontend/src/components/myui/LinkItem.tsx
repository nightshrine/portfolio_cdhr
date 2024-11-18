import { Box, Link, List, Text } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export const LinkItem = ({
    label,
    links,
}: {
    label: string;
    links: { url: string; display_name: string }[];
}) => (
    <Box>
        <Text fontSize="lg" fontWeight="bold">
            {label}
        </Text>
        <List.Root>
            {links.map((link) => (
                <List.Item key={link.url}>
                    <Link
                        href={link.url}
                        color="blue.500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.display_name} <LuExternalLink />
                    </Link>
                </List.Item>
            ))}
        </List.Root>
    </Box>
);
