import { Box, Text } from '@chakra-ui/react';

export const DataItem = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <Box>
        <Text fontSize="xl" fontWeight="bold">
            {label}
        </Text>
        <Text fontSize="md">
            {value}
        </Text>
    </Box>
);
