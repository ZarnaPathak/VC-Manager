interface memberData {
    firstName: string;
    lastName: string;
    amount: number;
  }
  

export const Member = ({firstName,lastName,amount}:memberData) => {
  return (
    <>
      <div className="col-5 mt-3 card text-center bg-light">
        <p className="fs-4">{firstName} {lastName}</p>
        <p className="fs-6">Amount : {amount}</p>
        <div className="row mb-2">
          <div className="col-4" style={{ color: "#00B9FC" }}>
            <i className="bi bi-plus-circle-fill fs-2"></i>
          </div>
          <div className="col-4" style={{ color: "#00B9FC" }}>
            <i className="bi bi-dash-circle-fill fs-2"></i>
          </div>
          <div className="col-4" style={{ color: "#00B9FC" }}>
            <i className="bi bi-person-x-fill fs-2"></i>
          </div>
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};
