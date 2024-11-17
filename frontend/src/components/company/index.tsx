import { type Company } from '@/definitions/Master';
import { Card, Link } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export default function Company({ companies }: { companies: Company[] }) {
    return (
        <div>
            {companies.map((company) => (
                <Card.Root>
                    <Card.Body>
                        <h2>会社名: {company.name}</h2>
                        <Link
                            variant="underline"
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {company.name} <LuExternalLink />
                        </Link>
                        <p>期間: {company.period}</p>
                        <p>概要: {company.summary}</p>
                        <p>開発経験: {company.developments}</p>
                        <p>使用技術: {company.technologies}</p>
                    </Card.Body>
                </Card.Root>
            ))}
        </div>
    );
}
