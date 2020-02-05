/* global describe beforeEach it */

import { expect } from "chai";
import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Profile } from "./profile";

const adapter = new Adapter();
enzyme.configure({ adapter });

describe("Profile", () => {
  let profile;

  beforeEach(() => {
    profile = shallow(<Profile email="cody@email.com" />);
  });

  it("renders the email in an h1", () => {
    expect(profile.find("h1").text()).to.be.equal(
      "Welcome back, cody@email.com"
    );
  });
});
