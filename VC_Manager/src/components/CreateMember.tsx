export const CreateMember = () => {
  return (
    <>
      <br />
      <div className="row justify-content-center">
        <div
          className="card border border-secondary col-lg-6 justify-content-center"
          style={{ width: 500 }}
        >
          <h2 className="card-title text-center">Enter Member Details</h2>
          <div className="card-body">
            <form>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">First Name</p>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <p style={{ color: "red" }}></p>
              </div>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">Last Name</p>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <p style={{ color: "red" }}></p>
              </div>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">Ammount</p>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <p style={{ color: "red" }}></p>
              </div>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">Discription</p>
                <textarea
                  className="form-control"
                  id="form4Example3"
                ></textarea>
                <p style={{ color: "red" }}></p>
              </div>
              <input
                type="submit"
                className="btn btn-lg float-end text-dark"
                value="Add"
                style={{ backgroundColor: "#00B9FC" }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
