import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommonDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
        <div>
            <h4>Warning</h4>
            Double check this!!!
        </div>
    </ApprovalCard>
      <ApprovalCard>
        <CommonDetail
          author="Rahul"
          timeAgo="Today @ 7PM"
          content="Nice Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommonDetail
        author="Sam"
        timeAgo="Today @ 6PM"
        content="Awesome Post"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommonDetail
        author="John"
        timeAgo="Today @ 8PM"
        content="Gr8 Post"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
