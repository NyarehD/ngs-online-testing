import React from "react";
import HomeStyle from "./home.module.sass";


import img1 from "../../../assets/home-gallary/01.jpg";
import img2 from "../../../assets/home-gallary/02.jpg";
import img3 from "../../../assets/home-gallary/03.jpg";
import img4 from "../../../assets/home-gallary/04.jpg";
import img5 from "../../../assets/home-gallary/05.jpg";
import img6 from "../../../assets/home-gallary/06.jpg";

function home() {
  let Images = [img1, img2, img3, img4, img5, img6];

  const postData = [
    {
      title: "cable tv",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis odio turpis, finibus sit amet.",
      img: Images[0],
    },
    {
      title: "server",
      description:
        "In a mauris leo. Etiam suscipit ex sodales eros volutpat, at consequat neque sollicitudin.",
      img: Images[1],
    },
    {
      title: "internet",
      description:
        "Duis ut justo in sem suscipit mollis. Aliquam gravida sem quis neque finibus sollicitudin etiam.",
      img: Images[2],
    },
    {
      title: "hot reserve",
      description:
        "Integer porttitor dictum lectus, id pretium est dignissim vitae. Sed imperdiet elit quis.",
      img: Images[3],
    },
    {
      title: "router setup",
      description:
        "Aenean facilisis justo pulvinar, vulputate ipsum in, ornare est. Cras porta, tellus eget.",
      img: Images[4],
    },
    {
      title: "cable insurance",
      description:
        "Curabitur condimentum tortor at aliquet placerat. Aenean elit lorem, lobortis a tempor.",
      img: Images[5],
    },
  ];

  return (
    <div>
        <div  className={HomeStyle.container} >
          <div className={HomeStyle.row}>
            {postData.map((post ,index)=>(

                      <div key={index} className={HomeStyle.card}>
                          <div className={HomeStyle.imageBox}>
                            <img className={HomeStyle.img} src={post.img} alt="" />
                            <a href="/service" className={HomeStyle.link}> 
                            </a>
                          </div>
                          <div className={HomeStyle.textBox}>
                              <h2 className={HomeStyle.title} >{post.title}</h2>
                              <p className={HomeStyle.description} >{post.description}</p>
                          </div>
                      </div>

            ))}
          </div>
        </div>
    </div>
  );
}

export default home;
