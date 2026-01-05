import { Box, Link, Text } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export const LinkItem = ({
    label,
    links,
}: {
    label: string;
    links: { url: string; display_name: string }[];
}) => (
    <Box className="link-block">
        <Text className="info-label">{label}</Text>
        {links.map((link) => (
            <Link
                key={link.url}
                href={link.url}
                color="whiteAlpha.900"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
            >
                {link.display_name} <LuExternalLink />
            </Link>
        ))}
    </Box>
);
