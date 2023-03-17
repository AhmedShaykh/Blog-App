import { FC } from "react";
import { previewData } from "next/headers";

const Home: FC = () => {

    if (previewData()) {
        return <div>Preview Mode</div>;
    };

    return (
        <div>
            <h1>
                Not In Preview Mode
            </h1>
        </div>
    )
};

export default Home;