import "../icon-font.css"

const Feature_Box = ({ FeatureIcon, Heading, Paragraph }) => {
  return (
    <div className="bg-white opacity-80 p-4 rounded-sm transition-transform text-center hover:-translate-y-4 hover:scale-103">
      <i className={FeatureIcon}></i>
      <h3 className="text-base font-bold uppercase mb-6">{Heading}</h3>
      <p className="text-base mb-10">{Paragraph}</p>
    </div>
  );
};

export default Feature_Box;
