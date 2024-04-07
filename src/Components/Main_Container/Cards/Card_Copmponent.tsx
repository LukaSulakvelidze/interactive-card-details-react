interface Card_Copmponent_Props {
  Card_className: string;
  display: string;
  img_className?: string;
  src?: string;
  card_holder_className?: string;
  card_holder_text?: string;
  card_numbers_className?: string;
  card_numbers_text?: string;
  expire_date_className?: string;
  card_month_className?: string;
  card_month_text?: string;
  slash?: string;
  card_year_className?: string;
  card_year_text?: string;
  card_cvv_className?: string;
  card_cvv_text?: string;
}

const Card_Cpmponent = ({
  Card_className,
  display,
  img_className,
  src,
  card_holder_className,
  card_holder_text,
  card_numbers_className,
  card_numbers_text,
  expire_date_className,
  card_month_className,
  card_month_text,
  slash,
  card_year_className,
  card_year_text,
  card_cvv_className,
  card_cvv_text,
}: Card_Copmponent_Props) => {
  return (
    <div className={Card_className}>
      <img
        style={{ display: display }}
        className={img_className}
        src={src}
        alt="circles"
      />
      <span className={card_holder_className}>{card_holder_text}</span>
      <span className={card_numbers_className}>{card_numbers_text}</span>
      <div className={expire_date_className}>
        <span className={card_month_className}>{card_month_text}</span>
        <span>{slash}</span>
        <span className={card_year_className}>{card_year_text}</span>
      </div>
      <span className={card_cvv_className}>{card_cvv_text}</span>
    </div>
  );
};

export default Card_Cpmponent;
