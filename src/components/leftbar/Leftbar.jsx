import "./leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/sunflower-and-red-butterfly-garry-gay.jpg"
              alt=""
            />
            <span>Gimasha Ranasinghe</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Friends</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Groups</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Watch</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="items">
            <img src="" alt="" />
            <span>Events</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Gaming</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Gallery</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Video</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="items">
            <img src="" alt="" />
            <span>Camera</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Reels</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Settings</span>
          </div>
          <div className="items">
            <img src="" alt="" />
            <span>Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
