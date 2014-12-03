var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = React.createClass({
  render: function () {
    return (
      <div><h1>Start developing your demos !!</h1></div>
    );
  }
});

var routes = (
  <Route handler={App}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

