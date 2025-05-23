import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

// TO-DO: Need to update contact info (once we have them). Just LinkedIn for now.
const data = [
  {
    link: 'https://github.com/mldangelo',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/d',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/vtpivot/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/company/pivotatvt/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.youtube.com/@pivotatvt',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'https://twitter.com/dangelosaurus',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:michael.l.dangelo@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
