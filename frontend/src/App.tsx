import './App.css';
import { useQuery } from '@tanstack/react-query';
import { MasterService } from './services/MasterService';
import Header from './components/header';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Profile from './components/profile';
import { COMPANY, PROFILE, PROJECT } from './constants/Contents';
import Project from './components/project';
import Company from './components/company';

export default function App() {
    const [content, setContent] = useState<string>(PROFILE);
    const masterQueryResult = useQuery({
        queryKey: ['initMaster'],
        queryFn: MasterService.init,
    });

    if (masterQueryResult.isLoading) {
        return <div>Loading...</div>;
    }

    if (masterQueryResult.isError) {
        return <div>Error</div>;
    }

    if (!masterQueryResult.data) {
        return <div>Master Undifined</div>;
    }

    const master = masterQueryResult.data;

    const changeContent = (content: string) => {
        setContent(content);
    };

    return (
        <>
            <Header changeContent={changeContent} />
            <Box as="main" m="6" mt="20">
                {content === PROFILE && <Profile profile={master.profile} />}
                {content === PROJECT && <Project projects={master.projects} />}
                {content === COMPANY && (
                    <Company companies={master.companies} />
                )}
            </Box>
        </>
    );
}
