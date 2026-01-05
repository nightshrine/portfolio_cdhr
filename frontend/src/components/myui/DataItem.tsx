import { Box, Text } from '@chakra-ui/react';

export const DataItem = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <Box className="info-block">
        <Text className="info-label">{label}</Text>
        <Text className="info-value" whiteSpace="normal" wordBreak="break-word">
            {value}
        </Text>
    </Box>
);
