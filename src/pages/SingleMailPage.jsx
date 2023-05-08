import { useContext } from "react";
import { useParams } from "react-router-dom";
import { mailContext } from "../contexts/MailProvider";

export default function SingleMailPage(){
    const { mailId } = useParams();
    const { state : { mails } } = useContext(mailContext);
    const detailedMail = mails.find(({ mId }) => mId === mailId);
    console.log(detailedMail);

    return (
        <>
        <h2>{detailedMail?.subject}</h2>
        <p>{detailedMail?.content}</p>
        </>
    )
}