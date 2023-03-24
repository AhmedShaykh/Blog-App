import { groq } from 'next-sanity';

type Props = {
    params: {
        slug: string;
    }
};

const Post = async ({ params: { slug } }: Props) => {

    const query = groq``;

    return (
        <div>Post: {slug}</div>
    )
};

export default Post;