const React = require("react");

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="bg-gray-800 flex flex-col items-center justify-center p-12">
          {children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;