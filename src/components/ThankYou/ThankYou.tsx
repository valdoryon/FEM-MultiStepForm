import './ThankYou.scss';
import image from '../../assets/images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <div className='thank-you'>
      <div className='thank-you_content'>
        <div className='thank-you_img-container'>
          <img src={image} />
        </div>
        <div className='thank-you_text'>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
