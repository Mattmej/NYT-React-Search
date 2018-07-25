import React from "react";

// class Article extends React.Component {
const Article = (props) => (

            <div className="card">
                <div className = "card-header">
                    <h3>{props.array.title}</h3>
                </div>

                <div className = "card-body">
                    <p>{props.array.date}</p>
                </div>
            </div>


);
// };

export default Article;