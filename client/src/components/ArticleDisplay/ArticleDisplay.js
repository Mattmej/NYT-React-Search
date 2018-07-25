import React from "react";
import Article from "./Article";



// class ArticleDisplay extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Article array = {testArray}/>
//             </div>
//         )
//     }
// };

const ArticleDisplay = (props) => (
    <div>
        {/* <Article entry = {props.entry}/> */}
        {(props.array).map((article) => {
            return <Article title={article.title} summary={article.summary} date={article.date}/>
        })}
    </div>
);

export default ArticleDisplay;