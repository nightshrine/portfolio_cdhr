import { Box, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';

export interface TimelineRootProps {
    children: React.ReactNode;
}

export const TimelineRoot = React.forwardRef<HTMLDivElement, TimelineRootProps>(
    function TimelineRoot({ children }, ref) {
        return (
            <VStack
                ref={ref}
                align="stretch"
                spacing="0"
                position="relative"
                _before={{
                    content: '""',
                    position: 'absolute',
                    left: '16px',
                    top: '32px',
                    bottom: '0',
                    w: '2px',
                    bg: 'currentColor',
                    opacity: '0.6',
                    pointerEvents: 'none',
                }}
            >
                {children}
            </VStack>
        );
    }
);

export interface TimelineItemProps {
    children: React.ReactNode;
    isLast?: boolean;
}

export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
    function TimelineItem({ children, isLast = false }, ref) {
        return (
            <HStack
                ref={ref}
                align="flex-start"
                spacing="4"
                position="relative"
            >
                {children}
            </HStack>
        );
    }
);

export interface TimelineIndicatorProps {
    children: React.ReactNode;
}

export const TimelineIndicator = React.forwardRef<
    HTMLDivElement,
    TimelineIndicatorProps
>(function TimelineIndicator({ children }, ref) {
    return (
        <Box
            ref={ref}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            minW="fit-content"
            zIndex="1"
        >
            {children}
        </Box>
    );
});

export interface TimelineConnectorProps {
    isLast?: boolean;
}

export const TimelineConnector = React.forwardRef<
    HTMLDivElement,
    TimelineConnectorProps
>(function TimelineConnector({ isLast = false }, ref) {
    return (
        <Box
            ref={ref}
            position="absolute"
            left="16px"
            top="32px"
            bottom={isLast ? 'auto' : '-100%'}
            w="2px"
            bg="currentColor"
            opacity="0.6"
        />
    );
});

export interface TimelineContentProps {
    children: React.ReactNode;
    width?: string;
}

export const TimelineContent = React.forwardRef<
    HTMLDivElement,
    TimelineContentProps
>(function TimelineContent({ children, width = '100%' }, ref) {
    return (
        <Box ref={ref} width={width} flex="1" pb="8">
            {children}
        </Box>
    );
});

export const TimelineTitle = Box;
export const TimelineDescription = Box;
