import React from "react";

// class Article extends React.Component {
const Article = (props) => (

            <div className="card">
                <div className = "card-header">
                    <h3>{props.title}</h3>
                </div>

                <div className = "card-body">
                    <p>{props.summary}</p>
                </div>
            </div>


);
// };

export default Article;