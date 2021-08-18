import styled from 'styled-components';

export const Nav = () => (
  <NavBar>
    <svg width="149" height="42" viewBox="0 0 149 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.0099 16.7744L16.9016 25.6383H26.3274L29.2191 16.7706L21.6152 11.3252L14.0099 16.7744ZM26.9719 17.522L24.936 23.6128H18.2943L16.2585 17.416L21.6139 13.5693L26.9693 17.416L26.9719 17.522Z"
        fill="white" stroke="white" stroke-width="0.5"/>
      <path
        d="M39.397 13.4633L36.5053 12.5022L34.7911 11.8633V1.17316L24.6145 4.38083L21.6152 0.53418L20.5441 2.03067L18.7222 4.4869L8.54693 1.17316V11.8594L3.83339 13.3559L5.44002 15.6L6.72122 17.3099L0.512512 26.0703L10.6891 29.3827V34.2978L15.4026 32.8013L15.5103 32.9086L21.7228 41.4569L28.043 32.8026L32.7565 34.299V29.3827H32.8642L34.0429 28.9559L42.8268 26.0716L36.6117 17.416L39.397 13.4633ZM32.8629 3.84664V11.3252L31.1486 10.791L29.4344 10.1521L28.8988 10.8997L27.2896 9.83003L27.8252 8.97507L25.6856 6.09073L32.8629 3.84664ZM10.4751 3.84664L17.6499 6.1968L15.509 9.08242L15.8306 9.50926L16.0445 9.83003L14.4379 11.0057L13.9024 10.1508L10.4751 11.3265V3.84664ZM10.6891 23.7201V27.3533L8.97486 26.8192L3.61943 25.0032L8.01139 18.9125L9.1901 20.6224L10.0472 21.9003L10.3688 21.793L11.0094 21.5795L11.331 22.7553L11.5449 23.3942L10.6891 23.7201ZM21.6152 38.1444L17.2232 32.161L20.6505 31.0926V30.1316H22.5723V31.0926L24.2865 31.6268L26.0008 32.161L25.0373 33.5502L21.6152 38.1444ZM30.827 25.1093V31.7342L24.5069 29.7035V28.207H18.8337V29.7035H18.7261L17.9766 29.9169L12.5097 31.6268V25.1093L13.9024 24.6824L12.1881 19.2319L11.2246 19.5527L10.7967 19.7661L6.94031 14.4243L13.1529 12.3936L14.01 13.5693L18.6223 10.2569L17.7652 9.08115L21.6216 3.73929L25.478 9.08115L24.6209 10.2569L29.2332 13.5693L30.0904 12.3936L36.3029 14.4243L32.4465 19.7661L31.0538 19.3393L29.7726 23.292L29.3447 24.7885L29.7726 24.8958L30.827 25.1093ZM39.7173 25.0019L34.7911 26.6045L32.6489 27.3521V23.7201L31.6855 23.3994L32.007 22.331L32.221 21.5834L32.8616 21.7968L33.1832 21.9041L33.9327 20.9431L35.3253 19.0262L36.8256 21.0569L39.7173 25.0019Z"
        fill="white" stroke="white" stroke-width="0.5"/>
      <path
        d="M60.392 22.2236H56.214V30.1303H52.6792V8.44087H61.3555C62.2705 8.43902 63.1768 8.61741 64.0224 8.96581C64.8681 9.3142 65.6365 9.82575 66.2835 10.4711C66.9304 11.1164 67.4433 11.8828 67.7926 12.7264C68.1418 13.5699 68.3207 14.4739 68.3188 15.3866C68.2884 16.7371 67.868 18.0502 67.1081 19.1684C66.3482 20.2866 65.281 21.1624 64.0345 21.6907L68.962 30.1316H64.998L60.392 22.2236ZM56.1077 19.0185H61.2492C61.7147 19.0089 62.1737 18.9067 62.5993 18.718C63.0248 18.5293 63.4084 18.2579 63.7275 17.9196C64.0466 17.5813 64.2949 17.1829 64.4578 16.7478C64.6207 16.3126 64.695 15.8494 64.6764 15.3853C64.695 14.9211 64.6207 14.458 64.4578 14.0228C64.2949 13.5877 64.0466 13.1893 63.7275 12.851C63.4084 12.5127 63.0248 12.2412 62.5993 12.0526C62.1737 11.8639 61.7147 11.7617 61.2492 11.7521H56.1064L56.1077 19.0185Z"
        fill="white" stroke="white" stroke-width="0.2"/>
      <path
        d="M85.6727 14.6389V30.1316H82.3519V27.8875C81.7286 28.7432 80.9049 29.434 79.9528 29.8995C79.0006 30.365 77.9487 30.5912 76.8888 30.5584C75.8474 30.5318 74.8215 30.3005 73.8699 29.8777C72.9183 29.4549 72.0597 28.849 71.3432 28.0947C70.6267 27.3404 70.0665 26.4525 69.6946 25.4819C69.3227 24.5113 69.1465 23.477 69.176 22.4383C69.1465 21.3996 69.3227 20.3654 69.6946 19.3947C70.0665 18.4241 70.6267 17.5362 71.3432 16.7819C72.0597 16.0276 72.9183 15.4217 73.8699 14.9989C74.8215 14.5762 75.8474 14.3448 76.8888 14.3182C77.9404 14.2667 78.9885 14.4737 79.9411 14.921C80.8936 15.3682 81.7215 16.0419 82.3519 16.883V14.6389H85.6727ZM82.2442 22.3322C82.2442 21.0287 81.7251 19.7785 80.801 18.8568C79.8769 17.9351 78.6236 17.4172 77.3167 17.4172C76.0099 17.4172 74.7565 17.9351 73.8325 18.8568C72.9084 19.7785 72.3892 21.0287 72.3892 22.3322C72.3693 22.9831 72.4832 23.6311 72.7238 24.2363C72.9644 24.8416 73.3266 25.3914 73.7882 25.8518C74.2498 26.3122 74.801 26.6736 75.4078 26.9135C76.0146 27.1535 76.6643 27.2671 77.3167 27.2473C77.9738 27.2851 78.6314 27.1839 79.2464 26.9503C79.8614 26.7167 80.42 26.356 80.8853 25.8918C81.3507 25.4276 81.7123 24.8705 81.9465 24.257C82.1807 23.6435 82.2822 22.9876 82.2442 22.3322Z"
        fill="white" stroke="white" stroke-width="0.2"/>
      <path
        d="M103.132 14.6389L97.0267 30.1316H93.1703L87.0641 14.6389H90.7065L95.0985 26.3961L99.3829 14.6389H103.132Z"
        fill="white" stroke="white" stroke-width="0.2"/>
      <path
        d="M111.595 27.4607C112.362 27.483 113.122 27.3203 113.812 26.9866C114.502 26.6529 115.101 26.1579 115.558 25.5437L118.343 27.1463C117.593 28.2577 116.568 29.1566 115.367 29.7557C114.165 30.3547 112.829 30.6335 111.488 30.5648C110.385 30.6343 109.28 30.4742 108.243 30.0946C107.205 29.715 106.259 29.1242 105.463 28.3599C104.667 27.5955 104.039 26.6743 103.619 25.6549C103.2 24.6354 102.997 23.54 103.025 22.4383C103.01 21.3718 103.209 20.313 103.609 19.3239C104.009 18.3349 104.604 17.4355 105.357 16.6785C106.11 15.9215 107.008 15.3221 107.996 14.9153C108.985 14.5086 110.045 14.3028 111.114 14.31C112.183 14.3171 113.24 14.5371 114.223 14.9569C115.206 15.3768 116.096 15.9882 116.839 16.7552C117.582 17.5222 118.164 18.4295 118.551 19.4238C118.938 20.4181 119.122 21.4794 119.093 22.5457C119.093 22.9725 118.985 23.5067 118.985 23.9348H106.668C106.94 25.0079 107.584 25.9504 108.486 26.5956C109.387 27.2409 110.489 27.5473 111.595 27.4607ZM115.773 21.0504C115.646 19.9623 115.112 18.9621 114.278 18.2491C113.444 17.5362 112.371 17.163 111.274 17.2038C110.151 17.1516 109.048 17.5156 108.178 18.2258C107.307 18.9359 106.731 19.942 106.56 21.0504H115.773Z"
        fill="white" stroke="white" stroke-width="0.2"/>
      <path d="M121.449 7.47986H124.77V30.1316H121.449V7.47986Z" fill="white" stroke="white" stroke-width="0.2"/>
      <path
        d="M127.663 10.1508C127.663 9.72817 127.788 9.31506 128.024 8.96367C128.259 8.61228 128.594 8.33841 128.985 8.17669C129.377 8.01496 129.807 7.97265 130.223 8.0551C130.638 8.13754 131.02 8.34105 131.32 8.63988C131.619 8.9387 131.823 9.31944 131.906 9.73392C131.989 10.1484 131.946 10.578 131.784 10.9685C131.622 11.3589 131.347 11.6926 130.995 11.9274C130.643 12.1622 130.229 12.2875 129.805 12.2875C129.237 12.2858 128.694 12.0602 128.292 11.6598C127.891 11.2595 127.665 10.717 127.663 10.1508ZM128.091 14.639H131.412V30.1316H128.091V14.639Z"
        fill="white" stroke="white" stroke-width="0.2"/>
      <path
        d="M148.872 20.6211V30.1303H145.551V20.9418C145.604 20.4612 145.549 19.9749 145.392 19.5176C145.234 19.0603 144.978 18.6433 144.64 18.2963C144.302 17.9493 143.892 17.6809 143.439 17.5101C142.985 17.3394 142.499 17.2706 142.016 17.3086C139.766 17.3086 138.053 18.5866 138.053 21.7968V30.1303H134.733V14.6377H138.053V16.5546C138.579 15.7755 139.302 15.1482 140.148 14.7357C140.994 14.3232 141.934 14.14 142.873 14.2045C146.408 14.2109 148.872 16.561 148.872 20.6211Z"
        fill="white" stroke="white" stroke-width="0.2"/>
    </svg>

    <div>
      <p>Solutions</p>
      <p>Insights</p>
      <p>Resources</p>
      <p>Company</p>
    </div>
  </NavBar>
);


const NavBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  & div {
    color: white;
    display: flex;
    font-size: 14px;
    
    padding-left: 2rem;

    & p {
      margin-left: 0.6rem;
    }
  }
`;