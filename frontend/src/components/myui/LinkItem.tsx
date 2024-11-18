import { Box, Link, Text } from '@chakra-ui/react';

export const LinkItem = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <Box>
        <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {label}
        </Text>
        <Link
            href={value}
            color="blue.500"
            target="_blank"
            rel="noopener noreferrer"
        >
            {value}
        </Link>
    </Box>
);
