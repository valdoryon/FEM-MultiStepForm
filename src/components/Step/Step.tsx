import './Step.scss';

type Props = {
  stepNumber: number;
  isActive: boolean;
  title: string;
};

const Step = (props: Props) => {
  return (
    <div className='step'>
      <div
        className='step-number'
        style={{
          backgroundColor: props.isActive ? '#bde2fc' : 'transparent',
          borderColor: props.isActive ? '#bde2fc' : '#fff',
        }}
      >
        <p style={{ color: props.isActive ? '#000' : '#fff' }}>
          {props.stepNumber}
        </p>
      </div>
      <div className='step-progression_title'>
        <p>STEP {props.stepNumber}</p>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Step;
