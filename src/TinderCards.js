import React, { useState } from "react";
import "./TinderCards.css";
// import PersonIcon from "@material-ui/icons/Person";
// import ForumIcon from "@material-ui/icons/Forum";
// import IconButton from "@material-ui/core/IconButton";

import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://vnn-imgs-f.vgcloud.vn/2020/01/30/08/dien-thoai-cua-ceo-amazon-jeff-bezos-bi-hack.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: ", nameToDelete);
    setLastedDirection(direction);
  };

  const setLastedDirection = (direction) => {
    console.log("direction: ", direction);
  };

  const outOfFrame = (name) => {
    console.log("name: ", name, " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            name={person.name}
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
