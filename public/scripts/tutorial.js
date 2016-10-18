var CommentList = React.createClass({
  render: function () {
    return (
      <div className='commentList'>
        Hey. I'm a comment list.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className='commentForm'>
        Yo. Comment form here.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));
