import './SecondStep.scss';
import Option from '../Option/Option';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
import ReactSwitch from 'react-switch';
import { BillingPlan, selectedBilling, PlanData } from '../../types/types.d';

type Props = {
  handleClickNextStep: () => void;
  handleClickBackStep: () => void;
  setPlanData: (planData: PlanData) => void;
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
  selectedBiling: selectedBilling;
  setSelectedBiling: (selectedBiling: selectedBilling) => void;
};

const SecondStep = (props: Props) => {
  const billingPlans: BillingPlan[] = [
    {
      name: 'Arcade',
      price: props.isYearly ? '$90/yr' : '$9/mo',
      priceNumber: props.isYearly ? 90 : 9,
    },
    {
      name: 'Advanced',
      price: props.isYearly ? '$120/yr' : '$12/mo',
      priceNumber: props.isYearly ? 120 : 12,
    },
    {
      name: 'Pro',
      price: props.isYearly ? '$150/yr' : '$15/mo',
      priceNumber: props.isYearly ? 150 : 15,
    },
  ];

  const checkPlan = (): BillingPlan => {
    if (props.selectedBiling.Arcade) {
      return billingPlans[0];
    } else if (props.selectedBiling.Advanced) {
      return billingPlans[1];
    } else if (props.selectedBiling.Pro) {
      return billingPlans[2];
    }

    return {
      name: '',
      price: '',
      priceNumber: 0,
    };
  };

  const handleSubmit = () => {
    props.setPlanData(checkPlan());
    props.handleClickNextStep();
  };

  return (
    <div className='main-step_container'>
      <div className='step-information'>
        <div className='step-title'>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>

        <div className='billing-options'>
          <Option
            handleClick={() => {
              props.setSelectedBiling({
                Arcade: true,
                Advanced: false,
                Pro: false,
              });
            }}
            icon={arcadeIcon}
            title='Arcade'
            pricing={props.isYearly ? '$90/yr' : '$9/mo'}
            benefits={props.isYearly ? '2 months free' : ''}
            selected={props.selectedBiling.Arcade}
          />

          <Option
            handleClick={() => {
              props.setSelectedBiling({
                Arcade: false,
                Advanced: true,
                Pro: false,
              });
            }}
            selected={props.selectedBiling.Advanced}
            icon={advancedIcon}
            title='Advanced'
            pricing={props.isYearly ? '$120/yr' : '$12/mo'}
            benefits={props.isYearly ? '2 months free' : ''}
          />

          <Option
            handleClick={() => {
              props.setSelectedBiling({
                Arcade: false,
                Advanced: false,
                Pro: true,
              });
            }}
            selected={props.selectedBiling.Pro}
            icon={proIcon}
            title='Pro'
            pricing={props.isYearly ? '$150/yr' : '$15/mo'}
            benefits={props.isYearly ? '2 months free' : ''}
          />
        </div>

        <div className='billing-plan'>
          <span style={{ color: !props.isYearly ? '#092854' : '#8f8f97' }}>
            Monthly
          </span>
          <ReactSwitch
            checked={props.isYearly}
            onChange={() => props.setIsYearly(!props.isYearly)}
            height={20}
            width={40}
            handleDiameter={12}
            offColor='#092854'
            onColor='#092854'
            checkedIcon={false}
            uncheckedIcon={false}
          />
          <span style={{ color: props.isYearly ? '#092854' : '#8f8f97' }}>
            Yearly
          </span>
        </div>
      </div>

      <div className='two-button_container'>
        <button onClick={props.handleClickBackStep}>Go back</button>
        <button onClick={handleSubmit}>Next Step</button>
      </div>
    </div>
  );
};

export default SecondStep;
