import React from "react";
import useFetch from "./useFetch";
const url = "https://pokeapi.co/api/v2/pokemon/ditto/";
const CustomHook = props => {
  const [data] = useFetch(
    "http://sit.symboinsurance.com/api/message/publish/analytics",
    {
      method: "POST",
      body: JSON.stringify({
        module: "B2C",
        deviceInfo:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
        page: "BIKE",
        section: "REGISTRATION_NUMB",
        action: "CLICK",
        eventName: "PRE_QUOTE_JOURNEY",
        eventLabel: "REGISTRATION_NUMB_NEXT"
      })
    }
  );

  return <div>{JSON.stringify(data)}</div>;
};

export default CustomHook;
