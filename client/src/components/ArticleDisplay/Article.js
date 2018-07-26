import React from "react";
import {Button} from "reactstrap";

// class Article extends React.Component {
const Article = (props) => (
   <div className="card mb-4">
        <div className = "card-header bg-info">
            <h3>
                {props.title}
                <Button color="success" className="float-right">Save Article</Button>
            </h3>
        </div>

        <div className = "card-body">
            <p>{props.summary}</p>
        </div>
    </div>
);
// };

export default Article;