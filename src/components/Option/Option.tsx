import './Option.scss';

type Props = {
  icon: string;
  title: string;
  pricing: string;
  benefits: string;
  selected: boolean;
  handleClick: () => void;
};

const Option = (props: Props) => {
  return (
    <div
      onClick={props.handleClick}
      style={{
        borderColor: props.selected ? '#154b8b' : '',
        backgroundColor: props.selected ? '#f8f9fe' : '',
      }}
      className='option'
    >
      <div className='icon'>
        <img src={props.icon} />
      </div>
      <div className='option-title'>
        <h1>{props.title}</h1>
        <p>{props.pricing}</p>
        <p>{props.benefits}</p>
      </div>
    </div>
  );
};

export default Option;
