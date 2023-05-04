import { useReducer } from "react";
import { createContext } from "react";

export const mailContext = createContext();

const mails = [
  {
    mId: "guid-1",
    unread: false,
    isStarred: false,
    subject: "Training Program",
    content:
      "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
  },
  {
    mId: "guid-2",
    unread: true,
    isStarred: false,
    subject: "Empower your future",
    content:
      "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
  },
  {
    mId: "guid-3",
    unread: true,
    isStarred: true,
    subject: "Pre Approved Loan",
    content: "Congratulations ! <u>Credit card<u> is being shipped to you today!",
  },
  {
    mId: "guid-4",
    unread: true,
    isStarred: false,
    subject: "You won a lottery!",
    content:
      "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
  },
  {
    mId: "guid-5",
    unread: true,
    isStarred: false,
    subject: "Invact Finance Program",
    content:
      "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
  },
  {
    mId: "guid-6",
    unread: true,
    isStarred: false,
    subject: "neoG Camp Interview",
    content:
      "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
  },
  {
    mId: "guid-7",
    unread: true,
    isStarred: false,
    subject: "Pre Approved Loan 1",
    content: "Congratulations ! <u>Credit card<u> is being shipped to you today!",
  },
  {
    mId: "guid-8",
    unread: true,
    isStarred: false,
    subject: "You won a lottery! 8th time",
    content:
      "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
  },
];

export default function MailProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    mails: mails,
    checkBoxes: [],
    spam: [],
    bin: [],
  });

  // function isStarred(val) {
  //   state.checkBoxes.includes(val) ?
  // }

  function reducer(state, action) {
    console.log(action, state);
    switch (action.type) {
      case "STAR": {
        const updatedMails = state.mails.reduce(
          (acc, mail) =>
            mail.mId === action.payload ? [...acc, { ...mail, isStarred: !mail.isStarred }] : [...acc, mail],
          []
        );
        return {
          ...state,
          mails: [...updatedMails],
        };
      }
      case "DELETE": {
        const deletedMail = state.mails.find(({ mId }) => mId === action.payload);
        const updatedMails = state.mails.filter(({ mId }) => mId !== action.payload);
        return {
          ...state,
          mails: [...updatedMails],
          bin: [...state.bin, deletedMail],
        };
      }
      case "SPAM": {
        const spamMail = state.mails.find(({ mId }) => mId === action.payload);
        const updatedMails = state.mails.reduce(
          (acc, mail) => (mail.mId === action.payload ? [...acc, { ...mail, isSpam: true }] : [...acc, mail]),
          []
        );
        return {
          ...state,
          mails: [...updatedMails],
          spam: [...state.spam, spamMail],
        };
      }
      case "READ": {
        const updatedMails = state.mails.reduce(
          (acc, mail) => (mail.mId === action.payload ? [...acc, { ...mail, unread: !mail.unread }] : [...acc, mail]),
          []
        );
        return {
          ...state,
          mails: [...updatedMails],
        };
      }
    }
  }
  return <mailContext.Provider value={{ state, dispatch }}>{children}</mailContext.Provider>;
}
