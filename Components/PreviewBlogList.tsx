"use client";
import { FC } from "react";
import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./BlogList";

type Props = {
    query: string;
};

const PreviewBlogList: FC<Props> = ({ query }) => {

    const posts = usePreview(null, query);

    return <BlogList posts={posts} />;
};

export default PreviewBlogList;