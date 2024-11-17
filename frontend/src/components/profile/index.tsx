import { type Profile } from '@/definitions/Master';
import { Link } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export default function Profile({ profile }: { profile: Profile }) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>名前</th>
                    <td>{profile.name}</td>
                </tr>
                <tr>
                    <th>大学</th>
                    <td>{profile.university}</td>
                </tr>
                <tr>
                    <th>経歴</th>
                    <td>{profile.career}</td>
                </tr>
                <tr>
                    <th>趣味</th>
                    <td>{profile.hobbies}</td>
                </tr>
                <tr>
                    <th>Qiita</th>
                    <td>
                        <Link
                            variant="underline"
                            href={profile.qiita_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {profile.qiita_url} <LuExternalLink />
                        </Link>
                    </td>
                </tr>
                <tr>
                    <th>GitHub</th>
                    <td>
                        <Link
                            variant="underline"
                            href={profile.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {profile.github_url} <LuExternalLink />
                        </Link>
                    </td>
                </tr>
                <tr>
                    <th>将来の目標</th>
                    <td>{profile.future_goal}</td>
                </tr>
            </tbody>
        </table>
    );
}
