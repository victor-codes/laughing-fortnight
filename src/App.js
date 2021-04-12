import { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/inputField.js";
import Image from "./components/image.js";
import { createClient } from "pexels";

const client = createClient(
  "563492ad6f917000010000010f5a60ec4a9e4d899f78b34d538c18e8"
);
function App() {
  const [image, setImage] = useState([
    {
      id: 2880507,
      width: 4000,
      height: 6000,
      url:
        "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
      photographer: "Deden Dicky Ramdhani",
      photographer_url: "https://www.pexels.com/@drdeden88",
      photographer_id: 1378810,
      avg_color: "#7E7F7B",
      src: {
        original:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
        large2x:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        large:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
        small:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
        portrait:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        landscape:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        tiny:
          "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
    },
  ]);
  console.log(image);
  useEffect(() => {
    client.photos
      .curated({ per_page: 15, Default: 15, Max: 80 })
      .then((photo) => {
        setImage(photo.photos);
        console.log(photo);
      });
  }, []);

  const imageArray = image.map((url) => (
    <Image
      image={url.src.medium}
      link={url.url}
      photographer={url.photographer}
    />
  ));

  return (
    <div className="App">
      <div style={{ backgroundColor: "#ced8e3" }}>
        <div style={{ padding: "156px 0 156px 0" }}>
          <InputField />
        </div>
      </div>
      <div className="image__container">{imageArray}</div>
    </div>
  );
}

export default App;
