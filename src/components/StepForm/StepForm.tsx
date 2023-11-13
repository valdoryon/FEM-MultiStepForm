import './StepForm.scss';
import { useState } from 'react';
import { AddonsData } from '../../types/types.d';
import FormImage from '../FormImage/FormImage';
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import FourthStep from '../FourthStep/FourthStep';
import ThankYou from '../ThankYou/ThankYou';

const StepForm = () => {
  const [step, setStep] = useState(1);

  const [isYearly, setIsYearly] = useState(false);
  const [hasWritten, setHasWritten] = useState(false);
  const [appData, setAppData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [planData, setPlanData] = useState({
    name: '',
    price: '',
    priceNumber: 0,
  });

  const [selectedBiling, setSelectedBiling] = useState({
    Arcade: true,
    Advanced: false,
    Pro: false,
  });

  const [addonSelected, setAddonSelected] = useState({
    OnlineService: false,
    LargerStorage: false,
    CustomizableProfile: false,
  });

  const [addonsData, setAddonsData] = useState<AddonsData[]>([]);

  const handleClickNextStep = () => {
    if (step >= 5) {
      return;
    } else {
      setStep((actualStep) => actualStep + 1);
    }
  };

  const handleClickBackStep = () => {
    if (step <= 0) {
      return;
    } else {
      setStep((actualStep) => actualStep - 1);
    }
  };

  return (
    <div className='step-form_wrapper'>
      <div className='step-form'>
        <FormImage step={step} />
        {step === 1 ? (
          <FirstStep
            handleClickNextStep={handleClickNextStep}
            userName={appData.name}
            userEmail={appData.email}
            userPhone={appData.phone}
            hasWritten={hasWritten}
            setHasWritten={setHasWritten}
            setAppData={setAppData}
          />
        ) : step === 2 ? (
          <SecondStep
            setPlanData={setPlanData}
            handleClickNextStep={handleClickNextStep}
            handleClickBackStep={handleClickBackStep}
            selectedBiling={selectedBiling}
            setSelectedBiling={setSelectedBiling}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
          />
        ) : step === 3 ? (
          <ThirdStep
            handleClickNextStep={handleClickNextStep}
            handleClickBackStep={handleClickBackStep}
            setAddonsData={setAddonsData}
            addonSelected={addonSelected}
            setAddonSelected={setAddonSelected}
            isYearly={isYearly}
          />
        ) : step === 4 ? (
          <FourthStep
            handleClickNextStep={handleClickNextStep}
            handleClickBackStep={handleClickBackStep}
            setStep={setStep}
            selectedPlan={planData}
            selectedAddons={addonsData}
            isYearly={isYearly}
          />
        ) : step === 5 ? (
          <ThankYou />
        ) : null}
      </div>
    </div>
  );
};

export default StepForm;
