import * as React from 'react'
import Image from 'next/image'
import styles from './modules/sidebar.module.scss'
import NavLink from './NavLink'
import Link from 'next/link'

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.heading}>
        <Image src={'/me.jpg'} alt="Jeremiah Lena" width={40} height={40} />
        <Link href="/about">
          <div>
            <p className={`foreground`}>Jeremiah Lena</p>
            <div className = {styles.positionsContainer}>
              <p>Frontend Engineer</p>
              <p>Digital Marketer</p>
              <p>Visual Design Enthusiast</p>
            </div>
          </div>
        </Link>
      </div>

      <nav className={styles.navigation}>
        <NavLink href="/">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#130F26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Light/Discovery">
              <g id="Discovery">
                <path
                  id="Path_33947"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  id="Ellipse_738"
                  cx="11.611"
                  cy="11.611"
                  r="9.61098"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
          Home
        </NavLink>

        <NavLink href="/about">
          <svg
            data-style-type="fill"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Light-Outline/Profile">
              <g id="Profile">
                <g id="Group 3">
                  <g mask="url(#mask0_33437_4900)">
                    <path
                      id="Fill 1"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.96188 21.8701 3.99988 21.8701 3.99988 18.1731C3.99988 14.8771 8.52088 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
                    />
                  </g>
                </g>
                <g id="Group 6">
                  <g mask="url(#mask1_33437_4900)">
                    <path
                      id="Fill 4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9209 3.42776C9.77989 3.42776 8.03789 5.16876 8.03789 7.30976C8.03089 9.44376 9.75989 11.1838 11.8919 11.1918L11.9209 11.9058V11.1918C14.0609 11.1918 15.8019 9.44976 15.8019 7.30976C15.8019 5.16876 14.0609 3.42776 11.9209 3.42776ZM11.9209 12.6188H11.8889C8.9669 12.6098 6.59989 10.2268 6.60989 7.30676C6.60989 4.38176 8.99189 1.99976 11.9209 1.99976C14.8489 1.99976 17.2299 4.38176 17.2299 7.30976C17.2299 10.2378 14.8489 12.6188 11.9209 12.6188Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          About
        </NavLink>

        <NavLink href="/projects">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.712 7.72681L9.89099 13.5478"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.8912 13.548L3.0762 9.381C2.1832 8.835 2.3642 7.488 3.3702 7.197L19.4602 2.549C20.3752 2.284 21.2212 3.138 20.9472 4.05L16.1732 20.014C15.8742 21.014 14.5332 21.186 13.9912 20.294L9.8912 13.548"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Projects
        </NavLink>

        <NavLink href="/blog">
          <svg
            data-style-type="fill"
            className={styles.blogSvg}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Light-Outline/Edit">
              <g id="Edit">
                <path
                  id="Fill 1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.7508 21.9397H13.4978C13.0838 21.9397 12.7478 21.6037 12.7478 21.1897C12.7478 20.7757 13.0838 20.4397 13.4978 20.4397H20.7508C21.1648 20.4397 21.5008 20.7757 21.5008 21.1897C21.5008 21.6037 21.1648 21.9397 20.7508 21.9397Z"
                />
                <g id="Group 5">
                  <g mask="url(#mask0_33437_4634)">
                    <path
                      id="Fill 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1105 5.01676L3.69552 16.7918C3.52452 17.0058 3.46152 17.2818 3.52452 17.5468L4.20552 20.4318L7.24452 20.3938C7.53352 20.3908 7.80052 20.2618 7.97752 20.0418C11.1945 16.0168 17.3275 8.34276 17.5015 8.11776C17.6655 7.85176 17.7295 7.47576 17.6435 7.11376C17.5555 6.74276 17.3245 6.42776 16.9915 6.22676C16.9205 6.17776 15.2355 4.86976 15.1835 4.82876C14.5495 4.32076 13.6245 4.40876 13.1105 5.01676ZM3.61352 21.9398C3.26652 21.9398 2.96452 21.7018 2.88352 21.3628L2.06452 17.8918C1.89552 17.1728 2.06352 16.4308 2.52452 15.8548L11.9445 4.07276C11.9485 4.06876 11.9515 4.06376 11.9555 4.05976C12.9885 2.82476 14.8565 2.64276 16.1165 3.65376C16.1665 3.69276 17.8395 4.99276 17.8395 4.99276C18.4475 5.35476 18.9225 6.00176 19.1025 6.76776C19.2815 7.52576 19.1515 8.30777 18.7345 8.96876C18.7035 9.01776 18.6765 9.05976 9.14852 20.9798C8.68952 21.5518 8.00152 21.8848 7.26252 21.8938L3.62352 21.9398H3.61352Z"
                    />
                  </g>
                </g>
                <path
                  id="Fill 6"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2234 11.6847C16.0634 11.6847 15.9034 11.6337 15.7664 11.5297L10.3144 7.34175C9.98642 7.08975 9.92442 6.61975 10.1764 6.28975C10.4294 5.96175 10.8994 5.90075 11.2284 6.15275L16.6814 10.3397C17.0094 10.5917 17.0714 11.0627 16.8184 11.3917C16.6714 11.5837 16.4484 11.6847 16.2234 11.6847Z"
                />
              </g>
            </g>
          </svg>
          Writing
        </NavLink>

        <NavLink href="/tools">
          <svg
            data-style-type="fill"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Light-Outline/Bag 3">
              <g id="Bag 2">
                <g id="Group 3">
                  <g mask="url(#mask0_33437_4955)">
                    <path
                      id="Fill 1"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5229 10.3058C15.1089 10.3058 14.7729 9.96976 14.7729 9.55576V6.52376C14.7729 4.85676 13.4179 3.49976 11.7509 3.49976C10.9399 3.52776 10.1799 3.80776 9.60594 4.37576C9.03194 4.94476 8.71394 5.70176 8.71094 6.50876V9.55576C8.71094 9.96976 8.37494 10.3058 7.96094 10.3058C7.54694 10.3058 7.21094 9.96976 7.21094 9.55576V6.52376C7.21594 5.29476 7.69094 4.16076 8.54994 3.31076C9.40794 2.45976 10.5599 2.03476 11.7539 1.99976C14.2449 1.99976 16.2729 4.02976 16.2729 6.52376V9.55576C16.2729 9.96976 15.9369 10.3058 15.5229 10.3058Z"
                    />
                  </g>
                </g>
                <g id="Group 6">
                  <g mask="url(#mask1_33437_4955)">
                    <path
                      id="Fill 4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00776 7.97461C5.07376 7.97461 3.49976 9.54661 3.49976 11.4796V16.9956C3.49976 18.9276 5.07376 20.4996 7.00776 20.4996H16.4918C18.4258 20.4996 19.9998 18.9276 19.9998 16.9956V11.4796C19.9998 9.54661 18.4258 7.97461 16.4918 7.97461H7.00776ZM16.4918 21.9996H7.00776C4.24676 21.9996 1.99976 19.7546 1.99976 16.9956V11.4796C1.99976 8.71961 4.24676 6.47461 7.00776 6.47461H16.4918C19.2538 6.47461 21.4998 8.71961 21.4998 11.4796V16.9956C21.4998 19.7546 19.2538 21.9996 16.4918 21.9996Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Stack
        </NavLink>

        <NavLink href="/contact">
          <svg
            data-style-type="fill"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Light-Outline/Message">
              <g id="Message">
                <path
                  id="Fill 1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.777 13.4647C11.108 13.4647 10.441 13.2437 9.88298 12.8017L5.39798 9.18574C5.07498 8.92574 5.02498 8.45274 5.28398 8.13074C5.54498 7.80974 6.01698 7.75874 6.33898 8.01774L10.82 11.6297C11.383 12.0757 12.176 12.0757 12.743 11.6257L17.179 8.01974C17.501 7.75674 17.973 7.80674 18.235 8.12874C18.496 8.44974 18.447 8.92174 18.126 9.18374L13.682 12.7957C13.12 13.2417 12.448 13.4647 11.777 13.4647Z"
                />
                <g id="Group 5">
                  <g mask="url(#mask0_33437_4892)">
                    <path
                      id="Fill 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.839 20H16.659C16.661 19.998 16.669 20 16.675 20C17.816 20 18.828 19.592 19.604 18.817C20.505 17.92 21 16.631 21 15.188V8.32C21 5.527 19.174 3.5 16.659 3.5H6.841C4.326 3.5 2.5 5.527 2.5 8.32V15.188C2.5 16.631 2.996 17.92 3.896 18.817C4.672 19.592 5.685 20 6.825 20H6.839ZM6.822 21.5C5.279 21.5 3.901 20.94 2.837 19.88C1.652 18.698 1 17.032 1 15.188V8.32C1 4.717 3.511 2 6.841 2H16.659C19.989 2 22.5 4.717 22.5 8.32V15.188C22.5 17.032 21.848 18.698 20.663 19.88C19.6 20.939 18.221 21.5 16.675 21.5H16.659H6.841H6.822Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Contact
        </NavLink>
      </nav>

      <div className={styles.navContainer}>
        <p className={styles.navHeading}>SOCIAL</p>
        <nav className={styles.navigation}>
          <NavLink
            href="https://twitter.com/jeremiahlena13"
            target={'_blank'}
            referrerPolicy="no-referrer"
          >
            <svg
              data-style-type="fill"
              width="16"
              height="16"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M37.2104 7.71653C35.8188 8.33445 34.4272 8.7979 32.8811 8.95238C34.4272 8.02549 35.6642 6.48068 36.2827 4.78139C34.7365 5.70828 33.1903 6.3262 31.4895 6.63516C30.0979 5.09035 28.0879 4.16347 25.9232 4.16347C21.7485 4.16347 18.3469 7.56205 18.3469 11.733C18.3469 12.351 18.3469 12.9689 18.5015 13.4323C12.0075 13.1234 6.44119 10.0337 2.73033 5.39932C1.95724 6.63516 1.648 7.87101 1.648 9.26134C1.648 11.8875 3.03957 14.2047 5.04962 15.5951C3.81266 15.5951 2.57571 15.2861 1.648 14.6682C1.648 14.6682 1.648 14.6682 1.648 14.8227C1.648 18.5302 4.27652 21.6198 7.67814 22.2377C7.05967 22.3922 6.44119 22.5467 5.66809 22.5467C5.20424 22.5467 4.74038 22.5467 4.27652 22.3922C5.20424 25.4818 7.98738 27.6446 11.389 27.6446C8.76048 29.6528 5.51347 30.8887 1.95724 30.8887C1.33876 30.8887 0.720283 30.8887 0.101807 30.7342C3.50343 32.8969 7.52352 34.1328 11.6982 34.1328C25.7686 34.1328 33.3449 22.5467 33.3449 12.5054C33.3449 12.1965 33.3449 11.8875 33.3449 11.5786C34.8911 10.4972 36.1281 9.10686 37.2104 7.71653Z" />
              </g>
            </svg>
            Twitter
          </NavLink>

          <NavLink
            href="https://www.instagram.com/jerry__jacinth/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <svg
              data-style-type="fill"
              width="16"
              height="16"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M17.8635 3.77545C22.5577 3.77545 23.1137 3.79356 24.968 3.8781C26.969 3.96922 28.8255 4.36938 30.254 5.79713C31.6824 7.22434 32.083 9.07915 32.1747 11.0783C32.2593 12.9304 32.2775 13.4859 32.2775 18.1765C32.2775 22.867 32.2593 23.422 32.1747 25.2746C32.0835 27.2738 31.683 29.1286 30.254 30.5558C28.8255 31.983 26.9684 32.3832 24.968 32.4748C23.1143 32.5594 22.5583 32.5775 17.8635 32.5775C13.1688 32.5775 12.6128 32.5594 10.759 32.4748C8.75806 32.3837 6.90159 31.9836 5.47311 30.5558C4.04463 29.1286 3.6441 27.2738 3.55235 25.2746C3.46774 23.4214 3.45016 22.8659 3.45016 18.1759C3.45016 13.4859 3.46829 12.9304 3.5529 11.0778C3.6441 9.0786 4.04463 7.22379 5.47366 5.79659C6.90214 4.36938 8.75861 3.96922 10.7596 3.87755C12.6133 3.79301 13.1693 3.77545 17.8635 3.77545ZM17.8635 0.610352C13.0886 0.610352 12.4902 0.630662 10.6145 0.716294C7.75758 0.846389 5.24785 1.54572 3.23259 3.55862C1.21898 5.57098 0.518475 8.07791 0.388264 10.9334C0.302555 12.8074 0.282227 13.4052 0.282227 18.1759C0.282227 22.9466 0.302555 23.5444 0.388264 25.4184C0.518475 28.2728 1.21843 30.7803 3.23314 32.7938C5.2473 34.8061 7.75703 35.506 10.6151 35.6361C12.4902 35.7212 13.0886 35.7415 17.8635 35.7415C22.6385 35.7415 23.2368 35.7212 25.1125 35.6355C27.9689 35.5054 30.4792 34.8061 32.4945 32.7932C34.5086 30.7809 35.2091 28.2734 35.3393 25.4179C35.4245 23.5444 35.4448 22.9466 35.4448 18.1759C35.4448 13.4052 35.4245 12.8074 35.3388 10.9334C35.2086 8.07901 34.5086 5.57153 32.4939 3.55807C30.4798 1.54572 27.97 0.84584 25.112 0.715745C23.2368 0.630662 22.6385 0.610352 17.8635 0.610352Z" />
                <path d="M17.8634 9.15596C12.8775 9.15596 8.83545 13.1944 8.83545 18.1759C8.83545 23.1574 12.8775 27.1958 17.8634 27.1958C22.8494 27.1958 26.8914 23.1574 26.8914 18.1759C26.8914 13.1944 22.8494 9.15596 17.8634 9.15596ZM17.8634 24.0312C14.6268 24.0312 12.0028 21.4096 12.0028 18.1759C12.0028 14.9422 14.6268 12.3205 17.8634 12.3205C21.1001 12.3205 23.7241 14.9422 23.7241 18.1759C23.7241 21.4096 21.1001 24.0312 17.8634 24.0312Z" />
                <path d="M27.2489 10.9072C28.4141 10.9072 29.3587 9.96349 29.3587 8.79935C29.3587 7.6352 28.4141 6.69147 27.2489 6.69147C26.0837 6.69147 25.1392 7.6352 25.1392 8.79935C25.1392 9.96349 26.0837 10.9072 27.2489 10.9072Z" />
              </g>
            </svg>
            Instagram
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
