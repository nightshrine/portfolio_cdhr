import { Box, Text } from '@chakra-ui/react';

export const DataItem = ({
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
        <Text fontSize="md" color="gray.500">
            {value}
        </Text>
    </Box>
);
