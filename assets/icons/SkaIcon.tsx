import React, {ReactElement} from 'react';
import {SvgXml} from 'react-native-svg';

const XML = `
<svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">

<g fill="#f2b200">

<path d="M14.1 45.6l1.8-1.8l-10.1-9.9L4 35.7z">

</path>

<path d="M18.9 40.8l1.9-1.8l-10.1-9.9l-1.9 1.8z">

</path>

<path d="M13.7 26.2L23.8 36l1.8-1.7l-10.1-9.9z">

</path>

<path d="M32.7 58.4L18.9 44.9l-3.7 3.6L29.1 62z">

</path>

<path d="M37.6 53.7L23.7 40.1l-3.6 3.6l13.8 13.5z">

</path>

<path d="M42.5 48.9L28.6 35.4L25 38.9l13.8 13.6z">

</path>

</g>

<g fill="#ffce31">

<path d="M18.9 44.9l-8.8-8.6l-3.6 3.6l8.7 8.6z">

</path>

<path d="M15 31.6l-3.6 3.6l8.7 8.5l3.6-3.6z">

</path>

<path d="M19.8 26.8l-3.6 3.6l8.8 8.5l3.6-3.5z">

</path>

<path d="M7.8 34l-3.7 3.6L2 35.5L5.7 32z">

</path>

<path d="M12.6 29.3L9 32.8l-2.1-2l3.6-3.6z">

</path>

<path d="M17.5 24.5l-3.6 3.6l-2.2-2.1l3.7-3.6z">

</path>

<path d="M39.3 48L28.1 58.9c-3.8 3.7-9.9 3.7-13.7 0a9.3 9.3 0 0 1 0-13.4l11.2-10.9c3.8-3.7 9.9-3.7 13.7 0s3.8 9.7 0 13.4m-21.8.6c-2 2-2 5.3 0 7.3s5.4 2 7.4 0L36.1 45c2-2 2-5.3 0-7.3s-5.4-2-7.4 0L17.5 48.6">

</path>

<path d="M26.3 32.7c-7.7 7.6-15.3 15-17.9 17.5c-1.7 1.7-1.7 3.2-1.7 3.2L9.4 56s1.5.1 3.2-1.6c2.6-2.5 10.2-10 17.9-17.5c10.2-10 30.7-3.4 30.7-3.4L29.8 3s6.7 19.7-3.5 29.7">

</path>

</g>

<g fill="#f2b200">

<path d="M9.2 54.1s1.8.3 3.5-1.4c2.6-2.5 10.4-9.7 18.2-17.3c10.2-10 30.3-3.5 30.3-3.5S45 19.1 30.4 33.3C18.5 45 9.2 54.1 9.2 54.1z">

</path>

<path d="M3.5 55l4.3 4.2C9.5 57.4 9.4 56 9.4 56l-2.7-2.6s-1.5-.1-3.2 1.6">

</path>

<path d="M30.1 2.3c-1.9 1.9 3.6 10.3 12.3 18.8c8.7 8.5 17.3 13.9 19.2 12c1.9-1.9-4.3-9.6-13-18.1C39.9 6.6 32.1.5 30.1 2.3">

</path>

</g>

<path d="M43 20.5c7.8 7.6 15.5 12.6 17.1 11c1.6-1.6-4.2-8.3-12-16C40.2 8 33.3 2.3 31.7 3.9c-1.6 1.5 3.5 9 11.3 16.6" fill="#333">

</path>

</svg>
`;

export default (): ReactElement => <SvgXml xml={XML} width={25} height={25} />;
