
import styles from './Style.module.css';
import Button from '../Button'

function Footer() {
  return (
    <div className="section w-full sm:mt-30 ">
      <div className="topfoot  bg-[#f5f19c] pt-16 pb-16 sm:flex items-center justify-between">
        <div className="left sm:w-1/2 px-8 sm:px-8  ">
          <div className="first order-1 font-[SansitaReg]  text-[6vh] leading-[7vh] sm:text-[4.2rem] w-1/3 sm:leading-[5rem] sm:mb-10 ">
            <h1>Let’s Build</h1>
          </div>
          {/* <Bu/> */}
          <div className='middle order-3 sm:order-2 w-[20vh] text-center mt-6 px-4 py-4 sm:w-fit sm:px-4 sm:py-[1.6vh] bg-[--black] text-[#f5f19c] whitespace-nowrap rounded-md'>
            <div
              className={`${styles.masker} flex items-center 
              gap-2 overflow-hidden 
              relative cursor-pointer`}
            >
              <span
                className={`${styles.spanMask} font-[Sansita] 
                text-[2.1vh] capitalize tracking-normal 
                font-semibold `}
              >
                Download Resume 📑
              </span>
            </div>
          </div>
        </div>

        <div className="right order-2 sm:order-3  flex sm:w-1/2 items-center justify-between sm:px-10">
          <div className="rght1 sm:w-2/3 flex flex-col items-end px-8 mt-6">
            <h3 className="text-[2.4vh] sm:text-[1.4rem] font-[Sansita] font-medium">
              A corner where ideas turn into projects simple, creative, and always evolving.
            </h3>
          </div>
          <div className="hidden sm:inline-block rght2 relative w-[150px] h-[150px]  overflow: hidden;">
            <div className={`${styles.loopFoot} `}></div>
            <div className="icon w-[120px] h-[120px] rounded-full border-black border-[1px] px-10 py-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 overflow-hidden">
              <div className="w-10 h-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="downfoot w-full h-fit bg-[var(--black)] px-8 pt-10 sm:pt-20">
        <div className="flex flex-col sm:flex-row sm:items-start justify-center space-y-10 sm:space-y-0 sm:space-x-10">


          <div className="flex flex-col items-center text-center">
            {/* Center Section with Form */}
            <h1 className="text-white font-[SansitaReg] text-[10vh] font-semibold">
              Let's Talk
            </h1>
            <h1 className="text-white pb-10 font-[SansitaReg] text-[2.8vh] font-semibold">
              This may be the end of the page,<br />but it’s just the start of what we can build together.
            </h1>

            {/* Styled Form */}
            <div className=''>
              <div className='flex items-center gap-6'>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-[var(--light)] w-full sm:w-[350px] h-[5.9vh] px-4 text-[2vh] rounded-sm"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-[var(--light)] w-full sm:w-[350px] h-[5.9vh] px-4 text-[2vh] rounded-sm"
                />
              </div>
              <textarea
                placeholder="Please tell a bit about yourself & your project"
                className="bg-[var(--light)] mt-5 w-full h-[20vh] px-4 pt-4 text-[2vh] rounded-sm">
              </textarea>

            </div>

            {/* Rewind Button */}
            <div className="flex items-center gap-6 justify-start mt-6">
              <a href="#">
                <button className="bg-[#f5f19c] font-[SansitaReg] px-10 py-3 rounded-md font-semibold">
                  Send Contact Request Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lowerText relative z-20 bg-black flex justify-center items-center text-white">
          <div className="underBorder p-0  w-[100%] h-[5rem] flex items-center justify-between border-t-[1.5px] border-white mt-10 font-[SansitaReg]">
            <div className="middle">
              &copy;Designed By &nbsp;
              <a className="underline underline-offset-[6px]" href="https://kalyani-mali.vercel.app/">Kalyani Mali</a>
            </div>
            <div className="right flex gap-5">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" stroke-linejoin="round" />
                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
              </svg></a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
                  <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
                  <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
                  <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.5" />
                  <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
                <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
