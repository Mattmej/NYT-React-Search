import React from "react";
import Article from "./Article";

const testArray = [
    {
        title: "glurb",
        url: "now"
    }

]

class ArticleDisplay extends React.Component {
    render() {
        return (
            <div>
                <Article array = {testArray}/>
            </div>
        )
    }
};

export default ArticleDisplay;