/**
 * GearIcon component renders an icon of a gear with a letter overlay.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.letter - The letter to be displayed on top of the gear icon.
 *
 * @returns {JSX.Element} The rendered GearIcon component.
 */
function GearIcon({ letter }: { letter: string }) {
  return (
    <>
      <div className="flex items-center justify-center relative pt-1">
        <img
          src="/assets/gearIcon.png"
          alt=""
          className="h-auto max-w-full w-20"
          style={{
            filter:
              "invert(57%) sepia(7%) saturate(6%) hue-rotate(317deg) brightness(86%) contrast(84%)", // Adjust values as needed
          }}
        />
        <span
          className="text-dashboard-icon-grey text-3xl font-bold"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-45%, -48%)",
          }}
        >
          {letter}
        </span>
      </div>
    </>
  );
}

export default GearIcon;
