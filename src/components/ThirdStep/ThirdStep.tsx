import './ThirdStep.scss';
import Addon from '../Addon/Addon';

import { AddonsData, selectedAddon } from '../../types/types.d';

type Props = {
  handleClickNextStep: () => void;
  handleClickBackStep: () => void;
  setAddonsData: (addonsData: AddonsData[]) => void;
  addonSelected: selectedAddon;
  setAddonSelected: (addonSelected: selectedAddon) => void;
  isYearly: boolean;
};

const ThirdStep = (props: Props) => {
  const whichAddon: () => AddonsData[] = () => {
    const myAddons = [];

    if (props.addonSelected.OnlineService) {
      myAddons.push({
        name: 'Online service',
        price: props.isYearly ? '10/yr' : '$1/mo',
        priceNumber: props.isYearly ? 10 : 1,
      });
    }
    if (props.addonSelected.LargerStorage) {
      myAddons.push({
        name: 'Larger storage',
        price: props.isYearly ? '20/yr' : '$2/mo',
        priceNumber: props.isYearly ? 20 : 2,
      });
    }
    if (props.addonSelected.CustomizableProfile) {
      myAddons.push({
        name: 'Customizable profile',
        price: props.isYearly ? '20/yr' : '$2/mo',
        priceNumber: props.isYearly ? 20 : 2,
      });
    }

    return myAddons;
  };

  const handleSubmit = () => {
    props.setAddonsData(whichAddon());
    props.handleClickNextStep();
  };

  return (
    <div className='main-step_container'>
      <div className='step-information'>
        <div className='step-title'>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>

        <div className='optional-addons'>
          <Addon
            title='Online service'
            description='Access to multiplayer games'
            price={props.isYearly ? '10/yr' : '$1/mo'}
            selected={props.addonSelected.OnlineService}
            handleOnChange={() => {
              props.setAddonSelected({
                ...props.addonSelected,
                OnlineService: !props.addonSelected.OnlineService,
              });
            }}
          />

          <Addon
            title='Larger storage'
            description='Extra 1TB of cloud save'
            price={props.isYearly ? '20/yr' : '$2/mo'}
            selected={props.addonSelected.LargerStorage}
            handleOnChange={() => {
              props.setAddonSelected({
                ...props.addonSelected,
                LargerStorage: !props.addonSelected.LargerStorage,
              });
            }}
          />

          <Addon
            title='Customizable Profile'
            description='Custom theme on your profile'
            price={props.isYearly ? '20/yr' : '$2/mo'}
            selected={props.addonSelected.CustomizableProfile}
            handleOnChange={() => {
              props.setAddonSelected({
                ...props.addonSelected,
                CustomizableProfile: !props.addonSelected.CustomizableProfile,
              });
            }}
          />
        </div>
      </div>

      <div className='two-button_container'>
        <button onClick={props.handleClickBackStep}>Go back</button>
        <button onClick={handleSubmit}>Next Step</button>
      </div>
    </div>
  );
};

export default ThirdStep;
