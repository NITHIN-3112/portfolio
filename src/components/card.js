import image from "./image.jpg";
import { useNavigate } from "react-router-dom";
export const Card2Example = () => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/profile");
  };

  const handleFollow = () => {
    return <div></div>;
  };

  return (
    <section className="page card-2-example-page">
      <div className="card-2">
        <img src={image} />
        <div>
          <h2>Nithin Khammampati</h2>
          <h3>Frontend Developer</h3>
          <p>
            Empowering users through captivating interfaces, turning ideas
            into realities.
          </p>
          <div className="buttons">
            <button onClick={handleProfile}>Profile</button>
            <button onClick={handleFollow} className="primary">
              <a
                href="https://www.linkedin.com/in/nithin-khammampati-729a8a235/"
                className="follow-anchor"
              >
                Follow
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
