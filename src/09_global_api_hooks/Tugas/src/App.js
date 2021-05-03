import React from "react";
import BlogPost from './components/BlogPost';
import CommentPost from './components/Komentar';

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <BlogPost />
        </div>
        <div>
          <CommentPost />
        </div>
      </div>
    );
  }
}

export default App;