/* eslint-disable global-require */
export default function getIcon(type) {
  switch (type) {
    case 'Homepageillustration':
      return require('../../assets/Covid_Assets/Homepageillustration.png');
    case 'BackArrow':
      return require('../../assets/Covid_Assets/Backwardarrow.png');
    case 'BackArrowBlack':
      return require('../../assets/Covid_Assets/backArrowBlack.png')
    case 'CheckBox':
      return require('../../assets/Covid_Assets/CheckboxSelected.png');
    case 'Home':
      return require('../../assets/Covid_Assets/Sections.png');
    case 'Explore':
      return require('../../assets/Covid_Assets/Places.png');
    case 'Statistics':
      return require('../../assets/Covid_Assets/Chart.png');
    case 'SwitchOn':
      return require('../../assets/Covid_Assets/switchOn.png');
    case 'Pencil':
      return require('../../assets/Covid_Assets/Pencil.png');
    case 'Call':
      return require('../../assets/Covid_Assets/Phone.png');
    case 'SocialDistancing':
      return require('../../assets/Covid_Assets/SocialDistancing.png');
    case 'Sanitize':
      return require('../../assets/Covid_Assets/Sanitize.png');
    case 'Nohandshake':
      return require('../../assets/Covid_Assets/Nohandshake.png');
    case 'Places':
      return require('../../assets/Covid_Assets/Places.png');
    case 'Group':
      return require('../../assets/Covid_Assets/Group.png');
    case 'No':
      return require('../../assets/Covid_Assets/No.png');
    case 'Search':
      return require('../../assets/Covid_Assets/Search.png');
    case 'Indian-flag':
      return require('../../assets/Covid_Assets/india-flag/indian-flag.png');
    case 'States-flag':
      return require('../../assets/Covid_Assets/states-flag/states-flag.png')
    default:
      return {};
  }
}
