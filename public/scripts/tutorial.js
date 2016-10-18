var CommentList = React.createClass({
  render: function () {
    return (
      <div className='commentList'>
        <Comment author="Steven Roper">My super smart thoughts.</Comment>
        <Comment author="Albert Einstein">I *cannot* compete with Steven Roper</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function () {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
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
