import './App.css';
import { useQuery } from '@tanstack/react-query';
import { MasterService } from './services/MasterService';
import Header from './components/header';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Profile from './components/profile';
import { COMPANY, PROFILE, PROJECT } from './constants/Constants';
import Project from './components/project';
import Company from './components/company';
import { Loading } from './components/myui/Loading';
import { Error } from './components/myui/Error';

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
        <>
            <Header changeContent={changeContent} />
            <Box as="main" m="4" mt={{ base: '20', lg: '20' }}>
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
        </>
    );
}
