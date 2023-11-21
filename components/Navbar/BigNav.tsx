import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { Button } from "@fluentui/react-components";
import {
  WeatherSunny24Filled,
  WeatherMoon24Filled,
  PeopleCheckmark24Filled,
  TaskListSquareLtr24Regular,
  Home24Regular,
  ArrowAutofitDown24Regular,
  BookContacts24Regular,
} from "@fluentui/react-icons";
import router from "next/router";

export default function BigNav() {

  const handleClick = () => {
    router.push("");
  };


  return (
    <div style={{ textAlign: "center" }} className="inline-block">
      <Button
        style={{ width: "125px", height: "35px" }}
        appearance="transparent"
        onClick={handleClick}
        icon={<Home24Regular />}
      >
        <p>Index</p>
      </Button>

      <Button
        style={{ width: "125px", height: "35px" }}
        className="width: 200px, height: 300px"
        appearance="transparent"
        icon={<ArrowAutofitDown24Regular />}
      >
        Categories
      </Button>

      <Button
        style={{ width: "125px", height: "35px" }}
        className="width: 200px, height: 300px"
        appearance="transparent"
        icon={<PeopleCheckmark24Filled />}
      >
        Profile
      </Button>

      <Button
        style={{ width: "125px", height: "35px" }}
        className="width: 200px, height: 300px"
        appearance="transparent"
        icon={<BookContacts24Regular />}
      >
        Contact
      </Button>

      <Button
        style={{ width: "125px", height: "35px" }}
        className="width: 200px, height: 300px"
        appearance="transparent"
        icon={<TaskListSquareLtr24Regular />}
      >
        FAQ
      </Button>
    </div>
  );
}
