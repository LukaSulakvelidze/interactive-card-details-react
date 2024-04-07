import { useState } from "react";
import Cards_cont from "./Cards/Cards_cont";
import Input from "../Input";
import format from "../../Functions/functions";
import Button from "../Button";
import Result_cont from "../Result_cont";

const Main_Container = () => {
  const [cardNameInput, setCardNameInput] = useState("");
  const [cardNumberInput, setCardNumberInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [cvc_Input, setCvcInput] = useState("");

  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusNumber, setIsFocusNumber] = useState(false);
  const [isFocusMonth, setIsFocusMonth] = useState(false);
  const [isFocusYear, setIsFocusYear] = useState(false);
  const [isFocusCvc, setIsFocusCvc] = useState(false);

  const [submit, setSubmit] = useState(false);

  const submitButton = () => {
    if (
      cardNameInput !== "" &&
      cardNameInput.includes(" ") &&
      cardNumberInput.length === 19 &&
      monthInput.length === 2 &&
      yearInput.length === 2 &&
      cvc_Input.length === 3
    ) {
      setSubmit(true);
    }
  };
  return (
    <div className="container">
      <Cards_cont
        cvc_Input={cvc_Input}
        cardNameInput={cardNameInput}
        cardNumberInput={cardNumberInput}
        monthInput={monthInput}
        yearInput={yearInput}
      />

      <form style={{ display: submit ? "none" : "flex" }} className="main_form">
        <div className="input_cont">
          <label className="label_input"> Cardholder Name </label>
          <Input
            border={
              isFocusName
                ? "1px solid red"
                : "1px solid var(--Light-Grey, #dfdee0)"
            }
            className="input"
            placeholder="e.g. Jane Appleseed"
            maxLength={19}
            value={cardNameInput}
            onChange={(e) => {
              let value = e.target.value;
              value = value.replace(/[^A-Za-z\s]/, "");
              setCardNameInput(value);
            }}
            onBlur={() =>
              cardNameInput === "" || !cardNameInput.includes(" ")
                ? setIsFocusName(true)
                : setIsFocusName(false)
            }
          />
          {isFocusName && (
            <label className="label_error">
              Wrong format, space between/only text
            </label>
          )}
        </div>
        <div className="input_cont">
          <label className="label_input"> Card Number </label>
          <Input
            border={
              isFocusNumber
                ? "1px solid red"
                : "1px solid var(--Light-Grey, #dfdee0)"
            }
            className="input"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            value={format(cardNumberInput)}
            onChange={(e) => setCardNumberInput(e.target.value)}
            onBlur={() =>
              cardNumberInput.length < 19
                ? setIsFocusNumber(true)
                : setIsFocusNumber(false)
            }
          />
          {isFocusNumber && (
            <label id="card_number_label_error" className="label_error">
              Wrong format, numbers only
            </label>
          )}
        </div>
        <div className="dates_form">
          <div className="exp_date_input_cont">
            <label className="label_input"> Exp. Date (MM/YY) </label>
            <div className="date_input_cont">
              <Input
                border={
                  isFocusMonth
                    ? "1px solid red"
                    : "1px solid var(--Light-Grey, #dfdee0)"
                }
                className="input"
                placeholder="MM"
                maxLength={2}
                value={format(monthInput)}
                onChange={(e) => setMonthInput(e.target.value)}
                onBlur={() =>
                  monthInput.length < 2
                    ? setIsFocusMonth(true)
                    : setIsFocusMonth(false)
                }
              />

              <Input
                border={
                  isFocusYear
                    ? "1px solid red"
                    : "1px solid var(--Light-Grey, #dfdee0)"
                }
                className="input"
                placeholder="YY"
                maxLength={2}
                value={format(yearInput)}
                onChange={(e) => setYearInput(e.target.value)}
                onBlur={() =>
                  yearInput.length < 2
                    ? setIsFocusYear(true)
                    : setIsFocusYear(false)
                }
              />
            </div>
            {(isFocusYear || isFocusMonth) && (
              <label id="date_error" className="label_error">
                Can’t be blank
              </label>
            )}
          </div>

          <div className="cvc_cont">
            <label className="label_input">CVC</label>
            <Input
              border={
                isFocusCvc
                  ? "1px solid red"
                  : "1px solid var(--Light-Grey, #dfdee0)"
              }
              className="input"
              placeholder="e.g. 123"
              maxLength={3}
              value={format(cvc_Input)}
              onChange={(e) => setCvcInput(e.target.value)}
              onBlur={() =>
                cvc_Input.length < 2
                  ? setIsFocusCvc(true)
                  : setIsFocusCvc(false)
              }
            />

            {isFocusCvc && (
              <label id="cvv_error" className="label_error">
                Can’t be blank
              </label>
            )}
          </div>
        </div>
        <Button className="submit_button" onClick={() => submitButton()}>
          Confirm
        </Button>
      </form>
      {submit && <Result_cont />}
    </div>
  );
};

export default Main_Container;
