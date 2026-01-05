import { Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';
import Company from './components/company';
import Header from './components/header';
import { Error } from './components/myui/Error';
import { Loading } from './components/myui/Loading';
import Profile from './components/profile';
import Project from './components/project';
import { COMPANY, PROFILE, PROJECT } from './constants/Constants';
import { MasterService } from './services/MasterService';

export default function App() {
    const [content, setContent] = useState<string>(PROFILE);
    const masterQueryResult = useQuery({
        queryKey: ['initMaster'],
        queryFn: MasterService.init,
    });

    if (masterQueryResult.isLoading) {
        return <Loading />;
    }

    if (masterQueryResult.isError) {
        return <Error errorText="Master Query Error" />;
    }

    if (!masterQueryResult.data) {
        return <Error errorText="Master Data Undefined" />;
    }

    const master = masterQueryResult.data;

    const changeContent = (content: string) => {
        setContent(content);
    };

    return (
        <Box className="app-shell">
            <div className="grid-backdrop" aria-hidden />
            <Header changeContent={changeContent} currentContent={content} />
            <Box as="main" className="content-shell">
                {content === PROFILE && (
                    <Profile
                        profile={master.profile}
                        histories={master.histories}
                    />
                )}
                {content === PROJECT && <Project projects={master.projects} />}
                {content === COMPANY && (
                    <Company companies={master.companies} />
                )}
            </Box>
        </Box>
    );
}
