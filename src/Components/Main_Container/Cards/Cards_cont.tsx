import circles from "../../../assets/Icons/Circles.png";
import Card_Copmponent from "./Card_Copmponent";
import { numberReplacer } from "../../../Functions/functions";

interface Cards_cont_Props {
  cvc_Input: string;
  cardNameInput: string;
  cardNumberInput: string;
  monthInput: string;
  yearInput: string;
}
const Cards_cont = ({
  cvc_Input,
  cardNameInput,
  cardNumberInput,
  monthInput,
  yearInput,
}: Cards_cont_Props) => {
  return (
    <div className="cards_cont">
      <div className="cards">
        <Card_Copmponent
          Card_className="card_back_part"
          display="none"
          card_cvv_className="cvc"
          card_cvv_text={cvc_Input ? numberReplacer("000", cvc_Input) : "000"}
        />
        <Card_Copmponent
          Card_className="card_front_part"
          display="block"
          img_className="circles"
          src={circles}
          card_holder_className="cardholder"
          card_holder_text={
            cardNameInput ? cardNameInput.toUpperCase() : "e.g. Jane Appleseed"
          }
          card_numbers_className="card_number"
          card_numbers_text={
            cardNumberInput
              ? numberReplacer("0000 0000 0000 0000", cardNumberInput)
              : "0000 0000 0000 0000"
          }
          expire_date_className="expire_date"
          card_month_className="month"
          card_month_text={
            monthInput ? `${numberReplacer("00", monthInput)}` : "00"
          }
          slash="/"
          card_year_className="year"
          card_year_text={
            yearInput ? `${numberReplacer("00", yearInput)}` : "00"
          }
        />
      </div>
    </div>
  );
};

export default Cards_cont;
