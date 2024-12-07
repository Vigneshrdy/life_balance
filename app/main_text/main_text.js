import { FadeText } from "@/components/ui/fade-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import '../globals.css';

function FadeTextDemo() {
  return (
    <>
      <div className="flex flex-col space-y-8 text-center">
        <FadeText
          className="text-4xl font-bold text-black dark:text-white font-salita"
          direction="up"
          style={{ fontFamily: "Salita, sans-serif" }}
          framerProps={{
            hidden: { opacity: 0 }, // Ensures opacity starts at 0
            show: { opacity: 1, transition: { delay: 0.8 } }, // Transition to opacity 1
          }}
          text="Welcome to lifebalance"
        />
        {/* <FadeText
          className="text-4xl font-bold text-black dark:text-white"
          direction="right"
          framerProps={{
            hidden: { opacity: 0 }, // Ensures opacity starts at 0
            show: { opacity: 1, transition: { delay: 0.4 } }, // Transition to opacity 1
          }}
          text="I love you"
        />
        <FadeText
          className="text-4xl font-bold text-black dark:text-white"
          direction="down"
          framerProps={{
            hidden: { opacity: 0 }, // Ensures opacity starts at 0
            show: { opacity: 1, transition: { delay: 0.6 } }, // Transition to opacity 1
          }}
          text="I love you"
        /> */}
        <FadeText
          className="text-4xl font-bold text-black dark:text-white font-salita"
          direction="down"
          style={{ fontFamily: "Salita, sans-serif" }}
          framerProps={{
            hidden: { opacity: 0 }, // Ensures opacity starts at 0
            show: { opacity: 1, transition: { delay: 1.2 } }, // Transition to opacity 1
          }}
          text="One Click to Better Health."
        />
      </div>

      {/* RainbowButton with corrected marginTop and marginLeft */}
      {/* <RainbowButton style={{ marginTop: '600px'}}>
        Get Unlimited Access
      </RainbowButton> */}
    </>
  );
}

export default FadeTextDemo;
