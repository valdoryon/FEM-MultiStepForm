import './FourthStep.scss';

type Props = {
  handleClickBackStep: () => void;
  handleClickNextStep: () => void;
  selectedPlan: {
    name: string;
    price: string;
    priceNumber: number;
  };
  selectedAddons: {
    name?: string;
    price?: string;
    priceNumber?: number;
  }[];

  setStep: (step: number) => void;
  isYearly: boolean;
};

const FourthStep = (props: Props) => {
  const addonsPrice = () => {
    let price = 0;
    props.selectedAddons.forEach((addon) => {
      if (addon && addon.priceNumber) {
        price += addon.priceNumber;
      }
    });
    return price;
  };

  return (
    <div className='main-step_container'>
      <div className='step-information'>
        <div className='step-title'>
          <h1>Finishing Up</h1>
          <p>Double check if everything looks OK before confirming.</p>
        </div>

        <div className='finishing-info'>
          <div className='selected-plan'>
            <div className='plan'>
              <h3>
                {props.selectedPlan.name}
                {props.isYearly ? ' (Yearly)' : ' (Monthly)'}
              </h3>
              <p onClick={() => props.setStep(2)}>Change</p>
            </div>
            <h3>{props.selectedPlan.price}</h3>
          </div>

          <div className='spacer' />

          <div className='finishing-info_addons'>
            {props.selectedAddons.length !== 0 ? (
              props.selectedAddons.map(
                (addon: { name?: string; price?: string }) => (
                  <div
                    className='finishing-info_addon'
                    key={crypto.randomUUID()}
                  >
                    <p>{addon.name}</p>
                    <p>+{addon.price}</p>
                  </div>
                )
              )
            ) : (
              <p>No addons selected</p>
            )}
          </div>
        </div>
        <div className='finishing-info_price'>
          <p>Total (per {props.isYearly ? 'year' : 'month'})</p>
          <h3>
            +${addonsPrice() + props.selectedPlan.priceNumber}/
            {props.isYearly ? 'yr' : 'mo'}
          </h3>
        </div>
      </div>

      <div className='two-button_container'>
        <button onClick={props.handleClickBackStep}>Go back</button>
        <button className='confirm-button' onClick={props.handleClickNextStep}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FourthStep;
