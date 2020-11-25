import '../App.css';

function Academics(){
  return (
    <div className="space tabel-pad">
      <h2 className="section-title">Academics</h2>
      <table class="table table-pad">
        <thead>
          <tr>
            <th scope="col">Qualification</th>
            <th scope="col">Passing year</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>M.C.A.</td>
            <td>2021 (Expected)</td>
            <td> -- </td>
          </tr>
          <tr>
            <td>B.C.A</td>
            <td>2020</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>Higher Secondary</td>
            <td>2017</td>
            <td>62%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Academics;