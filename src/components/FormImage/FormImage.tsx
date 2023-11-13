import Step from '../Step/Step';
import image from '../../assets/images/bg-sidebar-desktop.svg';
import './FormImage.scss';

const FormImage = (props: { step: number }) => {
  const checkStep = (stepNum: number, extraStepNum?: boolean) => {
    if (extraStepNum && props.step === 5) {
      return true;
    }
    return props.step === stepNum;
  };
  return (
    <div className='image-container'>
      <img src={image} alt='sidebar-image' />
      <div className='steps'>
        <Step stepNumber={1} isActive={checkStep(1)} title='YOUR INFO' />
        <Step stepNumber={2} isActive={checkStep(2)} title='SELECT PLAN' />
        <Step stepNumber={3} isActive={checkStep(3)} title='ADD-ONS' />
        <Step stepNumber={4} isActive={checkStep(4, true)} title='SUMMARY' />
      </div>
    </div>
  );
};

export default FormImage;
