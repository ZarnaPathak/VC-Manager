import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <>
      <section className="vh-50 mt-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col-12 col-md-8 col-lg-6 col-xl-5"
              data-mdb-animation-start="onHover"
              data-mdb-animation="zoom-in"
            >
              <div
                className="card shadow-2-strong bg-light"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <button
                    className="btn btn-lg btn-block"
                    style={{ backgroundColor: "#00B9FC" }}
                    type="submit"
                    onClick={signInWithGoogle}
                  >
                    <i className="fab fa-google me-2"></i> Sign in with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
