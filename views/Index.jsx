const React = require("react");
const Layout = require("./components/Layout");
const CreateUrlForm = require("./components/CreateUrlForm");

class Index extends React.Component {
  render() {

    const{generated}
    return (
      <Layout>
        <h1 className="text-3xl text-white">Link Buddy</h1>
        <CreateUrlForm />
      </Layout>
    );
  }
}

module.exports = Index;