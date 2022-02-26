import React from "react";

interface Props {
  height: string;
  width: string;
}

const RedditIcon: React.FC<Props> = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 599 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M495.4 124.3C501.254 124.3 506 119.554 506 113.7C506 107.846 501.254 103.1 495.4 103.1C489.546 103.1 484.8 107.846 484.8 113.7C484.8 119.554 489.546 124.3 495.4 124.3Z"
        fill="#FF4500"
      />
      <path
        d="M344 158.9C349.2 158.9 352.2 155 352 151.2C351.9 149.2 351.7 147.9 351.5 146.9C348.3 133.1 337.1 122.9 323.8 122.9C308 122.9 295.2 137.2 295.2 154.8C295.2 172.4 308 186.7 323.8 186.7C333.7 186.7 340.8 183.1 345.9 177.4C348.4 174.6 347.9 170.3 344.9 168.2C342.4 166.5 339.3 167.1 337 169C334.8 170.9 330.6 174.7 323.8 174.7C315.8 174.7 309 167.8 307.5 158.7H344V158.9ZM323.7 135C330.9 135 337.1 140.6 339.4 148.3H308C310.3 140.5 316.5 135 323.7 135Z"
        fill="#222222"
      />
      <path
        d="M295.8 129.2C295.8 126.2 293.6 123.8 290.8 123.3C282.1 122 273.9 125.2 269.2 131.1V130.3C269.2 126.6 266.2 124.3 263.2 124.3C259.9 124.3 257.2 127 257.2 130.3V179.3C257.2 182.5 259.6 185.3 262.8 185.5C266.3 185.7 269.2 183 269.2 179.5V154.2C269.2 143 277.6 133.8 289.2 135.1C289.6 135.1 290 135.1 290.4 135.1C293.4 134.9 295.8 132.3 295.8 129.2Z"
        fill="#222222"
      />
      <path
        d="M501.4 135.6C501.4 132.3 498.7 129.6 495.4 129.6C492.1 129.6 489.4 132.3 489.4 135.6C489.4 135.8 489.4 177.6 489.4 179.5C489.4 182.8 492.1 185.5 495.4 185.5C498.7 185.5 501.4 182.8 501.4 179.5C501.4 177.7 501.4 135.9 501.4 135.6Z"
        fill="#222222"
      />
      <path
        d="M412.2 102.4C412.2 99.1 409.5 96.4 406.2 96.4C402.9 96.4 400.2 99.1 400.2 102.4V129.1C396.1 125 391 123 384.9 123C369.1 123 356.3 137.3 356.3 154.9C356.3 172.5 369.1 186.8 384.9 186.8C391 186.8 396.2 184.7 400.3 180.6C400.8 183.4 403.3 185.5 406.2 185.5C409.5 185.5 412.2 182.8 412.2 179.5V102.4ZM385 174.9C375.8 174.9 368.4 166 368.4 154.9C368.4 143.9 375.8 134.9 385 134.9C394.2 134.9 401.6 143.8 401.6 154.9C401.6 166 394.1 174.9 385 174.9Z"
        fill="#222222"
      />
      <path
        d="M474.8 102.4C474.8 99.1 472.1 96.4 468.8 96.4C465.5 96.4 462.8 99.1 462.8 102.4V129.1C458.7 125 453.6 123 447.5 123C431.7 123 418.9 137.3 418.9 154.9C418.9 172.5 431.7 186.8 447.5 186.8C453.6 186.8 458.8 184.7 462.9 180.6C463.4 183.4 465.9 185.5 468.8 185.5C472.1 185.5 474.8 182.8 474.8 179.5V102.4ZM447.5 174.9C438.3 174.9 430.9 166 430.9 154.9C430.9 143.9 438.3 134.9 447.5 134.9C456.7 134.9 464.1 143.8 464.1 154.9C464.1 166 456.7 174.9 447.5 174.9Z"
        fill="#222222"
      />
      <path
        d="M531.8 179.6V135H537.1C539.9 135 542.4 132.9 542.6 130C542.8 126.9 540.3 124.3 537.3 124.3H531.8V115.9C531.8 112.7 529.4 109.9 526.2 109.7C522.7 109.5 519.8 112.2 519.8 115.7V124.4H514.8C512 124.4 509.5 126.5 509.3 129.4C509.1 132.5 511.6 135.1 514.6 135.1H519.7V179.7C519.7 183 522.4 185.7 525.7 185.7C529.2 185.5 531.8 182.9 531.8 179.6Z"
        fill="#222222"
      />
      <path
        d="M139.8 223.6C186.081 223.6 223.6 186.081 223.6 139.8C223.6 93.5185 186.081 56 139.8 56C93.5185 56 56 93.5185 56 139.8C56 186.081 93.5185 223.6 139.8 223.6Z"
        fill="#FF4500"
      />
      <path
        d="M195.7 139.8C195.7 133 190.2 127.6 183.5 127.6C180.2 127.6 177.2 128.9 175 131C166.6 125 155.1 121.1 142.3 120.6L147.9 94.4L166.1 98.3C166.3 102.9 170.1 106.6 174.8 106.6C179.6 106.6 183.5 102.7 183.5 97.9C183.5 93.1 179.6 89.2 174.8 89.2C171.4 89.2 168.4 91.2 167 94.1L146.7 89.8C146.1 89.7 145.5 89.8 145.1 90.1C144.6 90.4 144.3 90.9 144.2 91.5L138 120.7C125 121.1 113.3 125 104.8 131.1C102.6 129 99.6 127.7 96.3 127.7C89.5 127.7 84.1 133.2 84.1 139.9C84.1 144.9 87.1 149.1 91.3 151C91.1 152.2 91 153.4 91 154.7C91 173.5 112.9 188.8 139.9 188.8C166.9 188.8 188.8 173.6 188.8 154.7C188.8 153.5 188.7 152.2 188.5 151C192.7 149.1 195.7 144.8 195.7 139.8ZM111.9 148.5C111.9 143.7 115.8 139.8 120.6 139.8C125.4 139.8 129.3 143.7 129.3 148.5C129.3 153.3 125.4 157.2 120.6 157.2C115.8 157.3 111.9 153.3 111.9 148.5ZM160.6 171.6C154.6 177.6 143.2 178 139.9 178C136.5 178 125.1 177.5 119.2 171.6C118.3 170.7 118.3 169.3 119.2 168.4C120.1 167.5 121.5 167.5 122.4 168.4C126.2 172.2 134.2 173.5 139.9 173.5C145.6 173.5 153.7 172.2 157.4 168.4C158.3 167.5 159.7 167.5 160.6 168.4C161.4 169.3 161.4 170.7 160.6 171.6ZM159 157.3C154.2 157.3 150.3 153.4 150.3 148.6C150.3 143.8 154.2 139.9 159 139.9C163.8 139.9 167.7 143.8 167.7 148.6C167.7 153.3 163.8 157.3 159 157.3Z"
        fill="white"
      />
    </svg>
  );
};

export default RedditIcon;
