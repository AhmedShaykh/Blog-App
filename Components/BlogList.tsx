import { FC } from "react";

type Props = {
    posts: Post[];
};

const BlogList: FC<Props> = ({ posts }) => {
    return (
        <div>BlogList</div>
    )
};

export default BlogList;