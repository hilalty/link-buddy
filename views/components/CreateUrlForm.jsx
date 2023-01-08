const React = require("react");

class CreateUrlForm extends React.Component {
  render() {
    return (
      <div className="m-12">
        <form
          className=" flex flex-col items-center justify-center"
          action="/generate"
          method="POST"
        >
          <input
            type="text"
            name="url"
            defaultValue=""
            placeholder="Enter a url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="button"
            className="mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate
          </button>
        </form>
      </div>
    );
  }
}

module.exports = CreateUrlForm;
