function About() {
  return (
    <>
      <div className="container-fluid " style={{ width: "70%" }}>
        <div className="row mt-5 mission">
          <h2 className="mt-4" style={{ color: "#3898d4" }}>
            Our Mission
          </h2>

          <div
            className="col-md-6 col-sm-12 mt-4"
            style={{
              border: "4px solid #87cefaad",
              borderRadius: "3%",
              height: "40vh",
            }}
          >
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              inventore iure facere facilis. Officia odit iste numquam corporis
              voluptate nobis! Officia consectetur repellendus veritatis
              inventore ipsum aut tempora, porro accusantium! Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Perferendis asperiores
              consequatur nisi harum eaque hic obcaecati{" "}
            </p>
          </div>
          <div className="col-md-6 col-sm-12 mt-4">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://th.bing.com/th/id/OIP.0t0FDlM42Y6gb-eK9svf0gHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                    class="d-block w-100 ac"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://previews.123rf.com/images/vectorfusionart/vectorfusionart1704/vectorfusionart170410157/76863308-digital-composite-of-doctor-mid-section-with-clipboard-against-mission-doodles-and-blue-background.jpg"
                    class="d-block w-100 ac"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mission">
          <h2 className="mt-5" style={{ color: "#3898d4" }}>
            Our Team Members
          </h2>
          <div class="col-sm-4 my-2">
            <div
              class="card doctorcard"
              style={{
                borderRadius: "2%",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              <img
                src="https://www.oysterconnect.com/blogs/wp-content/uploads/2019/10/businesswoman2967123b.jpg"
                class="card-img-top team"
                alt="..."
              ></img>
              <div class="card-body bg-light">
                <h5 class="card-title"> Gajjar Nandani</h5>
                <h6 className="card-title">Team Leader</h6>
                <p class="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, assumenda.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 my-2">
            <div
              class="card doctorcard"
              style={{
                borderRadius: "2%",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              <img
                src="https://goldenoptions.in/wp-content/uploads/2019/12/STOCK-OPTIONS-PREMIUM.jpg"
                class="card-img-top team"
                alt="..."
              ></img>
              <div class="card-body bg-light">
                <h5 class="card-title"> Datta Pandya</h5>
                <h6 className="card-title">Team Member</h6>
                <p class="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, assumenda.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 my-2">
            <div
              class="card doctorcard"
              style={{
                borderRadius: "2%",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              <img
                src="https://i.pinimg.com/736x/f4/42/42/f44242667264e5bc756f44c83c7ad769--business-women-photography-business.jpg"
                class="card-img-top team"
                alt="..."
              ></img>
              <div class="card-body bg-light">
                <h5 class="card-title"> Drashti Mitaliya</h5>
                <h6 className="card-title">Team Member</h6>
                <p class="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, assumenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
