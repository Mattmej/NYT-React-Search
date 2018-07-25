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
        <Article entry = {props.entry}/>
    </div>
);

export default ArticleDisplay;