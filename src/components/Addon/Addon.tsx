import './Addon.scss';

type Props = {
  title: string;
  description: string;
  price: string;
  selected: boolean;
  handleOnChange: () => void;
};

const Addon = (props: Props) => {
  return (
    <div
      className='addon'
      onClick={props.handleOnChange}
      style={{
        borderColor: props.selected ? '#9791cf' : '',
        backgroundColor: props.selected ? '#f8f9fe' : '',
      }}
    >
      <div className='addon-info'>
        <input
          type='checkbox'
          checked={props.selected}
          onChange={props.handleOnChange}
        />
        <div className='info'>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <div className='price'>
        <p>+{props.price}</p>
      </div>
    </div>
  );
};

export default Addon;
