var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Sup world. I'm a effing comment box.
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));
