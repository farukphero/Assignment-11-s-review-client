import React from "react";

const Packages = () => {
  return (
   <div>
    <h1 className="text-center text-5xl font-bold mt-12">Select Affordable Prices</h1>
    <p className="text-center mb-12 mt-4 text-xl">Educated, intellectual people, especially scientists at all times demonstrate considerably.</p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h1 className="text-2xl text-center font-semibold mb-3">Cheap Packages</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>1</th>
                <td>Cox’s Bazar</td>
                <td>$ 320</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <th>2</th>
                <td>Saint Martin</td>
                <td> $ 230</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Sundarban</td>
                <td> $ 420</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Sajek Valley</td>
                <td> $ 470</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Bandarban</td>
                <td>$ 420</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Srimangal</td>
                <td>$ 250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-center font-semibold mb-3">Luxury Packages</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>1</th>
                <td>Cox’s Bazar</td>
                <td>$ 390</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <th>2</th>
                <td>Saint Martin</td>
                <td> $ 330</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Sundarban</td>
                <td> $ 470</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Sajek Valley</td>
                <td> $ 520</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Bandarban</td>
                <td>$ 480</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Srimangal</td>
                <td>$ 350</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-center font-semibold mb-3">Camping Packages</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>1</th>
                <td>Cox’s Bazar</td>
                <td>$ 420</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <th>2</th>
                <td>Saint Martin</td>
                <td> $ 350</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Sundarban</td>
                <td> $ 520</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Sajek Valley</td>
                <td> $ 570</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Bandarban</td>
                <td>$ 620</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Srimangal</td>
                <td>$ 550</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Packages;
