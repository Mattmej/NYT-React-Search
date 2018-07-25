import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Container, Jumbotron} from "reactstrap";

import ArticleDisplay from "./components/ArticleDisplay";
// import Article from "./components/ArticleDisplay/Article";


// const MainRouter = () => {
//     <div>
//         {/* <Router> */}
//             <div>
//                 {/* <AppNavbar/> */}
//                 <ArticleDisplay/>
//             </div>
//         {/* </Router> */}
        
//     </div>
// };

class MainRouter extends React.Component {
    render() {
        return(
            <div>
                <ArticleDisplay />
            </div>
        )
    }
};

export default MainRouter;