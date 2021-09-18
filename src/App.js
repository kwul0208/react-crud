import logo from './logo.svg';
import './App.css';
import Result from './Result';

function App() {
  return (
    <div className="app">
      {/* input */}
      <h1 className="text-center mt-5"> Simple CRUD </h1>
      <div class="card w-50 mt-3">
        <form>
          <div class="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label for="nim" className="form-label">Address</label>
            <input type="text" className="form-control" id="nim" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      {/* show relust */}
      <div class="card w-50 mt-5">
        <h2 className="text-center">Result</h2>
        <Result />
      </div>
    </div>
  );
}

export default App;
