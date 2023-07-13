import { Member } from "./Member";
import { getDocs, collection} from "firebase/firestore";
import { auth, database } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface memberData {
  firstName: string;
  lastName: string;
  amount: number;
  userId: string;
}

export const Home = () => {
  const [member, setMember] = useState<memberData[] | null>(null);
  const memberRef = collection(database, "Members");
  const [user] = useAuthState(auth);
  {
    /*const MemberDoc = query(memberRef, where("userId", "==", user?.uid));*/
  }

  const getMemberData = async () => {
    const data = await getDocs(memberRef);
    setMember(
      data.docs.map((doc) => ({
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        amount: doc.data().amount,
        userId: doc.data().userId,
      }))
    );
  };

  useEffect(() => {
    getMemberData();
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        {member?.map(
          (mbr) =>
            mbr?.userId == user?.uid && (
              <Member
                firstName={mbr.firstName}
                lastName={mbr.lastName}
                amount={mbr.amount}
              />
            )
        )}
      </div>
    </>
  );
};
