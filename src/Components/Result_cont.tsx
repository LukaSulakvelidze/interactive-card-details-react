import Button from "./Button";
import Check_Icon from "../assets/Icons/Check.png"

const Result_cont = () => {
  return (
    <div className="result_cont">
      <img className="check_icon" src={Check_Icon} alt="Icon" />
      <h2>Thank you!</h2>
      <p>We've added your card details.</p>
      <Button className="continue_button"> Continue</Button>
    </div>
  );
};

export default Result_cont;
