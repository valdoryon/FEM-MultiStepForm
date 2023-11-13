import { useEffect, useState } from 'react';
import './FirstStep.scss';
import { AppData } from '../../types/types.d';

type Props = {
  handleClickNextStep: () => void;
  setAppData: (appData: AppData) => void;
  userName: string;
  userEmail: string;
  userPhone: string;
  hasWritten: boolean;
  setHasWritten: (hasWritten: boolean) => void;
};

const FirstStep = (props: Props) => {
  const [error, setError] = useState({
    emailError: false,
    phoneError: false,
    nameError: false,
  });

  const [formData, setFormData] = useState({
    name: props.userName,
    email: props.userEmail,
    phone: props.userPhone,
    hasWritten: props.hasWritten,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setHasWritten(true);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (props.hasWritten) {
      checkInput();
    }
  }, [formData]);

  const checkInput = () => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPhone =
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;

    const myErrors = {
      emailError: error.emailError,
      phoneError: error.phoneError,
      nameError: error.nameError,
    };

    //Check email with a regex
    if (regexEmail.test(formData.email)) {
      myErrors.emailError = false;
    } else {
      myErrors.emailError = true;
    }

    //Check phone with a regex
    if (regexPhone.test(formData.phone)) {
      myErrors.phoneError = false;
    } else {
      myErrors.phoneError = true;
    }

    //Check name is not empty
    if (formData.name === '') {
      myErrors.nameError = true;
    } else {
      myErrors.nameError = false;
    }

    return setError({
      ...myErrors,
    });
  };

  const onSubmit = () => {
    if (
      error.emailError ||
      error.phoneError ||
      error.nameError ||
      !props.hasWritten
    ) {
      return;
    }

    props.setAppData(formData);
    props.handleClickNextStep();
  };

  return (
    <>
      <div className='main-step_container'>
        <div className='first-step_form-container'>
          <div className='step-title'>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>

          <div className='form-inputs'>
            <div className='input-container'>
              <div className='input-error'>
                <p>Name</p>
                <p
                  style={{
                    visibility: error.nameError ? 'visible' : 'hidden',
                  }}
                >
                  This field is required
                </p>
              </div>
              <input
                style={{
                  borderColor: error.nameError ? 'red' : '',
                }}
                name='name'
                value={formData.name}
                onChange={handleOnChange}
                type='text'
                autoComplete='off'
                placeholder='Steve Jobs'
              />
            </div>

            <div className='input-container'>
              <div className='input-error'>
                <p>Email Address</p>
                <p
                  style={{
                    visibility: error.emailError ? 'visible' : 'hidden',
                  }}
                >
                  Valid mail required
                </p>
              </div>
              <input
                style={{ borderColor: error.emailError ? 'red' : '' }}
                name='email'
                value={formData.email}
                onChange={handleOnChange}
                type='text'
                autoComplete='off'
                placeholder='lorem@ipsum.com'
              />
            </div>

            <div className='input-container'>
              <div className='input-error'>
                <p>Phone Number</p>
                <p
                  style={{
                    visibility: error.phoneError ? 'visible' : 'hidden',
                  }}
                >
                  This field is required
                </p>
              </div>
              <input
                style={{
                  borderColor: error.phoneError ? 'red' : '',
                }}
                name='phone'
                value={formData.phone}
                onChange={handleOnChange}
                type='text'
                autoComplete='off'
                placeholder='e.g. +1 234 567 890'
              />
            </div>
          </div>
        </div>
        <div className='button-container'>
          <button onClick={onSubmit}>Next Step</button>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
