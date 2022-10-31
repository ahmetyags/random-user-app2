import { useState, useEffect } from "react";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import phoneicon from "../assets/phone.svg";
import growingMan from "../assets/growing-up-man.svg";
import growingWoman from "../assets/growing-up-woman.svg";
import mailicon from "../assets/mail.svg";
import padlock from "../assets/padlock.svg";
import map from "../assets/map.svg";
import Button from "./Button";
import axios from "axios";
import { Container } from "react-bootstrap";
import List from "./List";

const Card = () => {
  const [user, setUser] = useState("");
  // const [disable, setDisable] = useState(true);

  const getUserFromApi = async () => {
    const url = "https://randomuser.me/api/";
    try {
      const res = await axios(url);
      const data = res.data.results[0];
      setUser(data);
      console.log(data);
      setUserInfo({
        alt: "",
        name: "",
      });
      // setDisable(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  const { gender, name, location, email, picture, login, dob, phone, id } =
    user;

  const [userInfo, setUserInfo] = useState({
    alt: "",
    name: "",
  });
  const changeInfo = (e) => {
    setUserInfo({
      alt: e.target.alt,
      name: e.target.name,
    });
  };

  const [addList, setAddList] = useState([]);

  const addUser = () => {
    const repeat = addList.some((item) => item.email === user.email);

    !repeat &&
      setAddList([
        {
          name: name,
          email: email,
          dob: dob,
          phone: phone,
          id: id,
        },
        ...addList,
      ]);

    // setDisable(false);
  };

  const delAll = () => {
    setAddList("");
    // setDisable(true);
  };

  return (
    <Container
      className="text-center bg-light mt-5 p-4 card"
      style={{
        backgroundImage: "linear-gradient(180deg, #bdbdb3 0%, #fafafa 33%)",
        // width: "50rem",
      }}
    >
      <div>
        <img src={picture?.large} alt="avatar" className="rounded-circle" />
        <p>My {userInfo.alt ? userInfo.alt : "name"} is</p>
        <h4>
          {userInfo.name
            ? userInfo.name
            : name?.title + " " + name?.first + " " + name?.last}
        </h4>
        <div className="d-flex justify-content-evenly m-3">
          <img
            src={gender === "male" ? man : woman}
            alt="name"
            name={name?.title + " " + name?.first + " " + name?.last}
            width="50rem"
            height="50rem"
            onClick={changeInfo}
            className="rounded-circle border btn img-btn"
          />
          <img
            src={mailicon}
            alt="email"
            name={email}
            width="50rem"
            height="50rem"
            onClick={changeInfo}
            className="rounded-circle border btn img-btn"
          />
          <img
            src={gender === "male" ? growingMan : growingWoman}
            alt="age"
            name={dob?.age}
            width="50rem"
            height="50rem"
            onClick={changeInfo}
            className="rounded-circle border btn img-btn"
          />
          <img
            src={map}
            alt="street"
            name={location?.street?.number + " " + location?.street?.name}
            width="50rem"
            height="50rem"
            onClick={changeInfo}
            className="rounded-circle border btn img-btn"
          />
          <img
            src={phoneicon}
            alt="phone"
            name={phone}
            width="50rem"
            height="50rem"
            onClick={changeInfo}
            className="rounded-circle border btn img-btn"
          />
          <img
            src={padlock}
            alt="password"
            name={login?.password}
            width="50rem"
            height="50rem"
            onClick={changeInfo}
            className="rounded-circle border btn img-btn"
          />
        </div>
      </div>
      <Button
        newUser={getUserFromApi}
        addUser={addUser}
        delAll={delAll}
        // disable={disable}
      />
      <List addList={addList} />
    </Container>
  );
};

export default Card;
