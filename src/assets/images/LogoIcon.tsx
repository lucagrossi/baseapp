import * as React from 'react';
interface LogoIconProps {
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (

<svg width="130" height="20" xmlns="http://www.w3.org/2000/svg" className={props.className}>
<path d="M0.76 18V0.819999H7.64V4.16H4.22V6.9H7.46V10.2H4.22V18H0.76ZM12.9483 18.16C10.0283 18.16 8.56828 16.6467 8.56828 13.62V7.74C8.56828 6.35333 8.95495 5.25333 9.72828 4.44C10.5149 3.61333 11.5883 3.2 12.9483 3.2C14.3083 3.2 15.3749 3.61333 16.1483 4.44C16.9349 5.25333 17.3283 6.35333 17.3283 7.74V13.62C17.3283 16.6467 15.8683 18.16 12.9483 18.16ZM12.9483 15.46C13.2283 15.46 13.4349 15.36 13.5683 15.16C13.7016 14.96 13.7683 14.6867 13.7683 14.34V7.18C13.7683 6.32667 13.4949 5.9 12.9483 5.9C12.4016 5.9 12.1283 6.32667 12.1283 7.18V14.34C12.1283 14.6867 12.1949 14.96 12.3283 15.16C12.4616 15.36 12.6683 15.46 12.9483 15.46ZM22.8897 18.16C19.9697 18.16 18.5097 16.6467 18.5097 13.62V7.74C18.5097 6.35333 18.8964 5.25333 19.6697 4.44C20.4564 3.61333 21.5297 3.2 22.8897 3.2C24.2497 3.2 25.3164 3.61333 26.0897 4.44C26.8764 5.25333 27.2697 6.35333 27.2697 7.74V13.62C27.2697 16.6467 25.8097 18.16 22.8897 18.16ZM22.8897 15.46C23.1697 15.46 23.3764 15.36 23.5097 15.16C23.643 14.96 23.7097 14.6867 23.7097 14.34V7.18C23.7097 6.32667 23.4364 5.9 22.8897 5.9C22.343 5.9 22.0697 6.32667 22.0697 7.18V14.34C22.0697 14.6867 22.1364 14.96 22.2697 15.16C22.403 15.36 22.6097 15.46 22.8897 15.46ZM31.5911 18.16C30.6711 18.16 30.0378 17.9667 29.6911 17.58C29.3444 17.1933 29.1711 16.5733 29.1711 15.72V6.58H28.1911V3.92H29.1711V0.819999H32.5711V3.92H33.5711V6.58H32.5711V14.8C32.5711 15.0533 32.5911 15.24 32.6311 15.36C32.6711 15.48 32.7778 15.54 32.9511 15.54C33.0844 15.54 33.2111 15.5333 33.3311 15.52C33.4511 15.5067 33.5311 15.5 33.5711 15.5V17.9C33.3711 17.9533 33.0778 18.0067 32.6911 18.06C32.3178 18.1267 31.9511 18.16 31.5911 18.16ZM40.3248 18.16C39.3648 18.16 38.6782 17.5867 38.2648 16.44V18H34.6648V0.72H38.2648V4.06C38.8248 3.48667 39.4782 3.2 40.2248 3.2C41.3582 3.2 42.1715 3.54 42.6648 4.22C43.1582 4.88667 43.4048 5.85333 43.4048 7.12V14.18C43.4048 15.38 43.1515 16.3467 42.6448 17.08C42.1382 17.8 41.3648 18.16 40.3248 18.16ZM39.1448 15.44C39.3848 15.44 39.5515 15.3667 39.6448 15.22C39.7515 15.06 39.8115 14.8667 39.8248 14.64C39.8515 14.4 39.8648 14.0333 39.8648 13.54V7.44C39.8648 6.92 39.8182 6.53333 39.7248 6.28C39.6315 6.02667 39.4315 5.9 39.1248 5.9C38.7915 5.9 38.5648 6.02667 38.4448 6.28C38.3248 6.53333 38.2648 6.90667 38.2648 7.4V13.54C38.2648 14.18 38.3182 14.66 38.4248 14.98C38.5315 15.2867 38.7715 15.44 39.1448 15.44ZM47.3444 18.16C46.211 18.16 45.431 17.7867 45.0044 17.04C44.591 16.28 44.3844 15.2 44.3844 13.8C44.3844 12.6533 44.531 11.7733 44.8244 11.16C45.131 10.5467 45.551 10.1 46.0844 9.82C46.6177 9.52667 47.431 9.20667 48.5244 8.86L49.4844 8.54V8.5V7.04C49.4844 6.65333 49.4044 6.36 49.2444 6.16C49.0977 5.94667 48.9177 5.84 48.7044 5.84C48.5177 5.84 48.351 5.92667 48.2044 6.1C48.071 6.27333 48.0044 6.50667 48.0044 6.8V7.68H44.6044V7.2C44.6044 5.76 44.9377 4.73333 45.6044 4.12C46.2844 3.50667 47.3844 3.2 48.9044 3.2C50.1177 3.2 51.1044 3.52 51.8644 4.16C52.6244 4.78667 53.0044 5.68 53.0044 6.84V18H49.5244V16.26C49.351 16.86 49.071 17.3267 48.6844 17.66C48.311 17.9933 47.8644 18.16 47.3444 18.16ZM48.7244 15.44C48.991 15.44 49.1777 15.3333 49.2844 15.12C49.4044 14.8933 49.4644 14.62 49.4644 14.3V10.22C48.9444 10.42 48.5577 10.6733 48.3044 10.98C48.0644 11.2867 47.9444 11.7133 47.9444 12.26V14.14C47.9444 15.0067 48.2044 15.44 48.7244 15.44ZM54.3523 18V0.72H57.9123V18H54.3523ZM59.3133 18V0.72H62.8733V18H59.3133ZM70.5017 18V4.12H68.4617V0.819999H75.9817V4.12H73.9417V18H70.5017ZM76.8914 3.36H80.3914V4.98C80.5647 4.40667 80.8647 3.96667 81.2914 3.66C81.7314 3.34 82.2714 3.18 82.9114 3.18V6.1C82.4181 6.1 81.8714 6.17333 81.2714 6.32C80.6847 6.45333 80.3914 6.61333 80.3914 6.8V18H76.8914V3.36ZM86.4264 18.16C85.2931 18.16 84.5131 17.7867 84.0864 17.04C83.6731 16.28 83.4664 15.2 83.4664 13.8C83.4664 12.6533 83.6131 11.7733 83.9064 11.16C84.2131 10.5467 84.6331 10.1 85.1664 9.82C85.6997 9.52667 86.5131 9.20667 87.6064 8.86L88.5664 8.54V8.5V7.04C88.5664 6.65333 88.4864 6.36 88.3264 6.16C88.1797 5.94667 87.9997 5.84 87.7864 5.84C87.5997 5.84 87.4331 5.92667 87.2864 6.1C87.1531 6.27333 87.0864 6.50667 87.0864 6.8V7.68H83.6864V7.2C83.6864 5.76 84.0197 4.73333 84.6864 4.12C85.3664 3.50667 86.4664 3.2 87.9864 3.2C89.1997 3.2 90.1864 3.52 90.9464 4.16C91.7064 4.78667 92.0864 5.68 92.0864 6.84V18H88.6064V16.26C88.4331 16.86 88.1531 17.3267 87.7664 17.66C87.3931 17.9933 86.9464 18.16 86.4264 18.16ZM87.8064 15.44C88.0731 15.44 88.2597 15.3333 88.3664 15.12C88.4864 14.8933 88.5464 14.62 88.5464 14.3V10.22C88.0264 10.42 87.6397 10.6733 87.3864 10.98C87.1464 11.2867 87.0264 11.7133 87.0264 12.26V14.14C87.0264 15.0067 87.2864 15.44 87.8064 15.44ZM96.3144 18.16C95.461 18.16 94.8144 17.96 94.3744 17.56C93.9477 17.1467 93.661 16.6067 93.5144 15.94C93.381 15.26 93.3144 14.3933 93.3144 13.34L93.3544 6.74C93.3544 5.7 93.6144 4.85333 94.1344 4.2C94.6677 3.53333 95.4144 3.2 96.3744 3.2C97.321 3.2 98.0277 3.51333 98.4944 4.14V0.72H101.994V18H98.4944V16.44C98.2944 17.0133 98.021 17.4467 97.6744 17.74C97.341 18.02 96.8877 18.16 96.3144 18.16ZM97.6544 15.42C98.001 15.42 98.2277 15.2533 98.3344 14.92C98.441 14.5733 98.4944 14.1133 98.4944 13.54V12.92V7.42C98.4944 6.99333 98.4344 6.63333 98.3144 6.34C98.1944 6.04667 97.981 5.9 97.6744 5.9C97.3277 5.9 97.0944 6.04 96.9744 6.32C96.8677 6.58667 96.8144 6.95333 96.8144 7.42V13.58C96.8144 14.8067 97.0944 15.42 97.6544 15.42ZM107.495 18.16C105.989 18.16 104.909 17.7467 104.255 16.92C103.602 16.0933 103.275 14.86 103.275 13.22V7.34C103.275 5.99333 103.662 4.96667 104.435 4.26C105.209 3.55333 106.289 3.2 107.675 3.2C110.489 3.2 111.895 4.58 111.895 7.34V8.4C111.895 9.46667 111.882 10.3333 111.855 11H106.775V13.84C106.775 14.3467 106.829 14.7467 106.935 15.04C107.042 15.32 107.269 15.46 107.615 15.46C107.882 15.46 108.069 15.38 108.175 15.22C108.295 15.06 108.362 14.88 108.375 14.68C108.402 14.4667 108.415 14.16 108.415 13.76V12.34H111.895V13.18C111.895 14.8867 111.562 16.1467 110.895 16.96C110.242 17.76 109.109 18.16 107.495 18.16ZM108.415 9.26V7.38C108.415 6.32667 108.155 5.8 107.635 5.8C107.049 5.8 106.755 6.32667 106.755 7.38V9.26H108.415ZM113.161 3.36H116.661V4.98C116.834 4.40667 117.134 3.96667 117.561 3.66C118.001 3.34 118.541 3.18 119.181 3.18V6.1C118.688 6.1 118.141 6.17333 117.541 6.32C116.954 6.45333 116.661 6.61333 116.661 6.8V18H113.161V3.36Z" fill="#FFFBFB"/>
</svg>
);
