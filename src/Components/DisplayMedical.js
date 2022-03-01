import { useState, useEffect } from "react";

function DisplayMedical() {
  const [details, setDetails] = useState([]);
  const [area, setArea] = useState("");

  useEffect(() => {
    getDetails();
  }, []);


  const getDetails = async () => {
    let result = await fetch("http://localhost:5000/medi");
    result = await result.json();
    setDetails(result);
  };


  const searchHandle = async (e) => {

    let key = area;
    console.warn(key)
    let result = await fetch(`http://localhost:5000/SearchArea/${key}`);
    result = await result.json();
    setDetails(result)

  }
  return (
    <>
      <div className="row p-2 my-5 justify-content-center " >

        <div class="col-auto" >

          <input type="text" class="form-control searcharea" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Search Area" />
        </div>
        <div class="col-auto">
          <button className="btn" style={{ backgroundColor: "#87CEFA" }} onClick={searchHandle} > <i class="far fa-search"></i> </button>
        </div>

      </div>
      <h2 className="doctorlist"> Medical Store's List</h2>
      <div style={{ width: "90%", margin: " auto" }} >
        <div className="row m-3"  >
          {details.map((item, index) => (
            <>
              <div class="col-sm-4 my-2 ">
                <div class="card bg-light doctorcard" style={{ borderRadius: "2%", marginLeft: "10px", marginTop: "10px", minHeight: "145px" }} >
                  <div class="card-body" >
                    <h5 class="card-title"> {item.Medical_Name}</h5>
                    <p class="card-text">
                      Address : {item.Address}<br></br>
                      Area : {item.Area}

                    </p>

                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );

}

export default DisplayMedical;
