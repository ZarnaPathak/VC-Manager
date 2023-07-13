import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, database } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

interface memberData {
  firstName: string;
  lastName: string;
  amount: number;
}

export const CreateMember = () => {
  const memberRef = collection(database, "Members");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const memberSchema = yup.object().shape({
    firstName: yup.string().required("You Must Add First Name."),
    lastName: yup.string().required("You Must Add Last Name."),
    amount: yup
      .number()
      .typeError("Amount must be a Number")
      .required("You Must Add Ammount and it should be only Numbers.")
      .min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(memberSchema),
  });

  const addOnSubmit = async (data: memberData) => {
    await addDoc(memberRef, {
      ...data,
      userId:user?.uid
    });
    navigate("/");
    console.log(data);
  };

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
            <form onSubmit={handleSubmit(addOnSubmit)}>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">First Name</p>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  {...register("firstName")}
                />
                <p style={{ color: "red" }}>{errors.firstName?.message}</p>
              </div>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">Last Name</p>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  {...register("lastName")}
                />
                <p style={{ color: "red" }}>{errors.lastName?.message}</p>
              </div>
              <div className="form-outline mb-4">
                <p className="form-label fs-5 text-start">Ammount</p>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  {...register("amount")}
                />
                <p style={{ color: "red" }}>{errors.amount?.message}</p>
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
