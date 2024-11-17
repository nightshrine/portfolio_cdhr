import { type Project } from '@/definitions/Master';
import { Card } from '@chakra-ui/react';

export default function Project({ projects }: { projects: Project[] }) {
    return (
        <div>
            {projects.map((project) => (
                <Card.Root>
                    <Card.Body>
                        <h2>{project.name}</h2>
                        <p>概要: {project.summary}</p>
                        <p>技術: {project.technologies}</p>
                        <p>成果: {project.result}</p>
                    </Card.Body>
                </Card.Root>
            ))}
        </div>
    );
}
